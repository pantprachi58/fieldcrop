const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replacements = [
    { from: /readonly="readonly"/gi, to: 'readOnly' },
    { from: /checked="checked"/gi, to: 'defaultChecked' },
    { from: /selected="selected"/gi, to: 'defaultValue' }, // Note: selected on option is tricky, defaultSelected is better, but this might work depending on usage. Let's just use defaultSelected
    { from: /selected="selected"/gi, to: 'defaultSelected' },
    { from: /maxlength=/gi, to: 'maxLength=' },
    { from: /minlength=/gi, to: 'minLength=' },
    { from: /enctype=/gi, to: 'encType=' },
    { from: /datetime=/gi, to: 'dateTime=' },
    { from: /allowfullscreen/gi, to: 'allowFullScreen' },
    { from: /frameborder=/gi, to: 'frameBorder=' },
    { from: /stroke-width/gi, to: 'strokeWidth' },
    { from: /stroke-dasharray/gi, to: 'strokeDasharray' },
    { from: /stroke-dashoffset/gi, to: 'strokeDashoffset' },
    { from: /stroke-linecap/gi, to: 'strokeLinecap' },
    { from: /stroke-linejoin/gi, to: 'strokeLinejoin' },
    { from: /stroke-miterlimit/gi, to: 'strokeMiterlimit' },
    { from: /fill-rule/gi, to: 'fillRule' },
    { from: /clip-rule/gi, to: 'clipRule' }
  ];

  replacements.forEach(rep => {
    if (rep.from.test(content)) {
      content = content.replace(rep.from, rep.to);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed props in ${file}`);
  }
});

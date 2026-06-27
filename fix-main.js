const fs = require('fs');
const file = 'd:/downloads/fieldcrop/demo.artureanec.com/nextjs-FieldCrop/public/js/main.min.js';
let content = fs.readFileSync(file, 'utf8');

const regex = /(l\(document\)\.ready\(function\(\)\{o\.onReady\(\)\}\),d\.on\("load",function\(\)\{o\.onLoad\(\);var t=l\("\.js-isotope"\);0<t\.length&&l\.fn\.isotope&&t\.isotope\("layout"\)\}\)),(l\.fn\.is_on_screen=function\(\)\{[\s\S]*?\})\}\(jQuery\);/g;

if (regex.test(content)) {
  content = content.replace(regex, "$2; $1}(jQuery);");
  fs.writeFileSync(file, content);
  console.log('Fixed main.min.js successfully.');
} else {
  console.log('Could not find the exact pattern in main.min.js');
}

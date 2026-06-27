const fs = require('fs');
const path = require('path');

// Function to format CSS by adding proper indentation and line breaks
function formatCSS(css) {
  let formatted = '';
  let indentLevel = 0;
  let inRule = false;
  let inComment = false;
  let buffer = '';
  
  // First, let's split by curly braces and semicolons
  const tokens = css.split(/([{};])/);
  
  for (let token of tokens) {
    token = token.trim();
    
    if (token === '') continue;
    
    if (token === '/*') {
      inComment = true;
      formatted += '\n' + '  '.repeat(indentLevel) + '/*';
      continue;
    }
    
    if (token === '*/') {
      inComment = false;
      formatted += ' */\n';
      continue;
    }
    
    if (inComment) {
      formatted += token;
      continue;
    }
    
    if (token === '{') {
      formatted += ' {\n';
      indentLevel++;
      inRule = true;
    } else if (token === '}') {
      indentLevel--;
      formatted = formatted.trimEnd() + '\n' + '  '.repeat(indentLevel) + '}\n';
      inRule = false;
    } else if (token === ';') {
      formatted = formatted.trimEnd() + ';\n' + '  '.repeat(indentLevel);
    } else {
      // Handle @ rules
      if (token.startsWith('@')) {
        formatted += '\n' + '  '.repeat(indentLevel) + token;
      } else if (inRule) {
        // Property value
        formatted += '  '.repeat(indentLevel) + token + ' ';
      } else {
        // Selector
        formatted += '\n' + '  '.repeat(indentLevel) + token;
      }
    }
  }
  
  return formatted.trim();
}

// Read and format both files
const files = [
  { input: 'public/css/critical.min.css', output: 'public/css/critical.css' },
  { input: 'public/css/style.min.css', output: 'public/css/style.css' }
];

console.log('Formatting CSS files...\n');

files.forEach(({ input, output }) => {
  try {
    console.log(`Reading ${input}...`);
    const css = fs.readFileSync(input, 'utf8');
    
    console.log(`Formatting ${input}...`);
    const formatted = formatCSS(css);
    
    console.log(`Writing to ${output}...`);
    fs.writeFileSync(output, formatted);
    
    // Also create a properly minified version
    const minifiedOutput = output.replace('.css', '.min.css');
    const properlyMinified = css
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .trim();
    fs.writeFileSync(minifiedOutput, properlyMinified);
    
    console.log(`✓ Created ${output} (formatted) and ${minifiedOutput} (properly minified)\n`);
  } catch (error) {
    console.error(`Error processing ${input}:`, error.message);
  }
});

console.log('Done!');
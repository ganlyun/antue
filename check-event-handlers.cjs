const fs = require('fs');
const path = require('path');

// Find all .vue files in components directory
const componentsDir = path.join(__dirname, 'components');

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.vue')) {
      callback(filePath);
    }
  });
}

walkDir(componentsDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has render function with on: syntax
  if (content.includes('render ()') && content.match(/on:\s*\{/)) {
    console.log(`Found on: syntax in ${filePath} - manual update needed`);
  }
});

console.log('Check complete! Files with on: syntax need manual updates.');

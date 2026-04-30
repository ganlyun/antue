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
  let modified = false;
  
  // Replace beforeDestroy with beforeUnmount
  if (content.includes('beforeDestroy')) {
    content = content.replace(/beforeDestroy\s*\(/g, 'beforeUnmount (');
    modified = true;
    console.log(`Updated beforeDestroy -> beforeUnmount in ${filePath}`);
  }
  
  // Replace destroyed with unmounted
  if (content.includes('destroyed')) {
    content = content.replace(/destroyed\s*\(/g, 'unmounted (');
    modified = true;
    console.log(`Updated destroyed -> unmounted in ${filePath}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Lifecycle hook updates complete!');

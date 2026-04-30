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
  
  // Check if file has a render function with h parameter
  if (content.includes('render (h)')) {
    // Add import for h if not already present
    if (!content.includes("import { h } from 'vue'") && !content.includes('import {h} from \'vue\'')) {
      // Find the <script> tag and add import after it
      content = content.replace(/<script>\n/, '<script>\nimport { h } from \'vue\'\n');
      modified = true;
      console.log(`Added h import in ${filePath}`);
    }
    
    // Change render (h) to render ()
    content = content.replace(/render\s*\(h\)/g, 'render ()');
    modified = true;
    console.log(`Updated render function signature in ${filePath}`);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Render function updates complete!');

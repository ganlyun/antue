import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, 'components');

// Get all component directories
const componentDirs = fs.readdirSync(componentsDir).filter(dir => {
  const fullPath = path.join(componentsDir, dir);
  return fs.statSync(fullPath).isDirectory();
});

componentDirs.forEach(dir => {
  const indexPath = path.join(componentsDir, dir, 'index.js');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf-8');
    let modified = false;
    
    // Match import statements like: import X from './something' (without .vue extension)
    const importRegex = /import\s+(\w+)\s+from\s+'\.\/([^']+)'/g;
    
    content = content.replace(importRegex, (match, componentName, importPath) => {
      // Skip if already has .vue extension or is a style import
      if (importPath.endsWith('.vue') || importPath.includes('style')) {
        return match;
      }
      
      // Check if the .vue file exists
      const vueFilePath = path.join(componentsDir, dir, `${importPath}.vue`);
      if (fs.existsSync(vueFilePath)) {
        modified = true;
        console.log(`Fixing: ${dir}/index.js - ${componentName} from './${importPath}' -> './${importPath}.vue'`);
        return `import ${componentName} from './${importPath}.vue'`;
      }
      
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(indexPath, content, 'utf-8');
      console.log(`Updated: ${dir}/index.js`);
    }
  }
});

console.log('Done! All component imports have been fixed.');

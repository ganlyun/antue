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

let totalFixed = 0;

componentDirs.forEach(dir => {
  const compDir = path.join(componentsDir, dir);
  
  // Process all .vue files in the component directory
  const files = fs.readdirSync(compDir).filter(file => file.endsWith('.vue'));
  
  files.forEach(file => {
    const filePath = path.join(compDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    
    // Match import statements like: import X from './something' (without .vue extension)
    const importRegex = /import\s+(\w+)\s+from\s+'\.\/([^']+)'/g;
    
    content = content.replace(importRegex, (match, componentName, importPath) => {
      // Skip if already has .vue extension or is a style/js import
      if (importPath.endsWith('.vue') || importPath.endsWith('.js') || importPath.includes('style')) {
        return match;
      }
      
      // Check if the .vue file exists
      const vueFilePath = path.join(compDir, `${importPath}.vue`);
      if (fs.existsSync(vueFilePath)) {
        modified = true;
        totalFixed++;
        console.log(`Fixing: ${dir}/${file} - ${componentName} from './${importPath}' -> './${importPath}.vue'`);
        return `import ${componentName} from './${importPath}.vue'`;
      }
      
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  });
});

console.log(`\nDone! Fixed ${totalFixed} imports in component .vue files.`);

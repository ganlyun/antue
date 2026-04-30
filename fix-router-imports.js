import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routersDir = path.join(__dirname, 'examples', 'routers');

// Get all router directories
const routerDirs = fs.readdirSync(routersDir).filter(dir => {
  const fullPath = path.join(routersDir, dir);
  return fs.statSync(fullPath).isDirectory();
});

routerDirs.forEach(dir => {
  const indexPath = path.join(routersDir, dir, 'index.vue');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf-8');
    let modified = false;
    
    // Match import statements like: import X from '../../common/something' or './demo/something' (without .vue extension)
    const importRegex = /import\s+(\w+)\s+from\s+'([^']+\/[^']+)'/g;
    
    content = content.replace(importRegex, (match, componentName, importPath) => {
      // Skip if already has .vue extension or is not a relative import
      if (importPath.endsWith('.vue') || !importPath.startsWith('.')) {
        return match;
      }
      
      // Resolve the path relative to the current file
      const dirPath = path.join(routersDir, dir);
      let fullPath;
      
      if (importPath.startsWith('../../common/')) {
        // Common components
        const commonPath = path.join(__dirname, 'examples', 'common');
        const fileName = importPath.replace('../../common/', '');
        fullPath = path.join(commonPath, `${fileName}.vue`);
      } else if (importPath.startsWith('./demo/')) {
        // Demo components
        const demoPath = path.join(dirPath, 'demo');
        const fileName = importPath.replace('./demo/', '');
        fullPath = path.join(demoPath, `${fileName}.vue`);
      } else {
        return match;
      }
      
      if (fs.existsSync(fullPath)) {
        modified = true;
        console.log(`Fixing: ${dir}/index.vue - ${componentName} from '${importPath}' -> '${importPath}.vue'`);
        return `import ${componentName} from '${importPath}.vue'`;
      }
      
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(indexPath, content, 'utf-8');
      console.log(`Updated: ${dir}/index.vue`);
    }
  }
});

console.log('Done! All router page imports have been fixed.');

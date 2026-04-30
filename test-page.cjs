const { chromium } = require('playwright');

(async () => {
  console.log('Starting Playwright test...');
  
  // Launch browser
  const browser = await chromium.launch({ 
    headless: false,
    executablePath: '/root/.cache/ms-playwright/chromium-1217/chrome-linux/chrome'
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    console.log('Navigating to http://localhost:8080/...');
    await page.goto('http://localhost:8080/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('Page loaded successfully!');
    console.log('Page title:', await page.title());
    console.log('Page URL:', page.url());
    
    // Check if the app mounted correctly
    const appElement = await page.$('#app');
    if (appElement) {
      console.log('✓ App element found');
      
      // Check for any error messages in the page
      const errors = await page.evaluate(() => {
        const errorElements = document.querySelectorAll('.error, .warning');
        return Array.from(errorElements).map(el => el.textContent);
      });
      
      if (errors.length > 0) {
        console.log('⚠ Page contains errors/warnings:', errors);
      } else {
        console.log('✓ No visible errors on page');
      }
      
      // Take a screenshot
      await page.screenshot({ path: 'test-screenshot.png' });
      console.log('✓ Screenshot saved to test-screenshot.png');
      
      // Check console for JavaScript errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log('❌ Console Error:', msg.text());
        } else if (msg.type() === 'warning') {
          console.log('⚠️  Console Warning:', msg.text());
        }
      });
      
      // Wait a bit to see if there are any runtime errors
      await page.waitForTimeout(2000);
      
      console.log('\n✅ Test completed successfully!');
    } else {
      console.log('❌ App element not found');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();

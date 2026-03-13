const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  await page.goto('http://localhost:3000');
  await page.type('#user-name', 'Test User');
  await page.type('#user-email', 'test@test.com');
  await page.click('button[type="submit"]');
  
  await page.waitForTimeout(1000); 
  await page.click('#start-btn');
  
  await page.waitForTimeout(2000);

  const qText = await page.evaluate(() => document.getElementById('question-text').innerText);
  console.log('Final Question Text on screen:', qText);

  await browser.close();
})();

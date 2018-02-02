const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  try{
  	await page.goto('https://example.com');	
  }
  catch (error) {
	console.log(error);
	browser.close();
  }
})();
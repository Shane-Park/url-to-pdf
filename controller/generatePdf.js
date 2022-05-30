const puppeteer = require("puppeteer");

const generatePdf = async (url) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox", 
      "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  try{
    await page.goto(url);    
  } catch(e) {
    console.error(e);
  }
  const pdf = await page.pdf();
  await browser.close();
  console.log("return pdf")
  // Return Buffer
  return pdf;
};

/*
 If you absolutely trust the content you open in Chrome, you can launch Chrome with the --no-sandbox argument...
 Running without a sandbox is strongly discouraged. Consider configuring a sandbox instead!!!

 More Info Here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
*/

module.exports = generatePdf;

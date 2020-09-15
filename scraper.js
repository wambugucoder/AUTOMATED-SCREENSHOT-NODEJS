const puppeteer = require('puppeteer');
const chalk = require('chalk');

//CREATE A BEAUTIFUL CONSOLE DESIGN
//const err= chalk.bold.red
//const success= chalk.keyword("green")
( async () => {
    try {
        //open headless browser
        var browser = await puppeteer.launch({headless:false})
        //new page
        var page = await browser.newPage();
        //url
       await page.goto('https://www.google.com/')
         await page.screenshot({ path: 'example.png'});
         await browser.close();
         console.log(chalk.green("Screenshot has been taken"))
         
    } catch (error) {
        console.log(err(error))
        await browser.close();
        console.log(chalk.red("OOPS!!"))
    }
    
})();

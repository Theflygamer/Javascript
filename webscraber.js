run
function run(){
    const puppeteer = require('puppeteer');
    async function scrapeProudct(url){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
    
        const [el] = await page.$x('//*[@id="aspnetForm"]/main/div/div[2]/div/div/div/div/div[1]/div[7]/div/a/figure/span'); // the element you want to scrape (the data)
        const txt = await el.getProperty('textContent');
        const price = await txt.jsonValue();
    
        const [el2] = await page.$x('//*[@id="aspnetForm"]/main/div/div[2]/div/div/div/div/div[1]/div[7]/div/a/figure/figcaption');// the element you want to scrape (the data)
        const txt2 = await el2.getProperty('textContent');
        const nameOfCar = await txt2.jsonValue();
    
        console.log('audi '+ nameOfCar + ' der er ' +  price);// here we log it out to the console to see if it works 
    }
    scrapeProudct('https://sites.audi.dk/leasing/?mn=TT+coupe&bid=24279')// the website you wanna scrape rember its headless so no browser will open
    
}
setInterval(run, 10000); //to test out it works set it to only 1000 when you know it works you cant set your own time interval

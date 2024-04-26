const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function ServicePageAppDevTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/services');
      let expectedURL="http://localhost:3000/appDev-services";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div[3]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
ServicePageAppDevTest();
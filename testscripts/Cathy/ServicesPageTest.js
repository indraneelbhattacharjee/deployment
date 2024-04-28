const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

//contains test for all service options

async function ServicePageWebDevTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/services');
      let expectedURL="http://localhost:3000/webDev-services";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div[1]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
ServicePageWebDevTest();


async function ServicePageSoftwareDevTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/services');
      let expectedURL="http://localhost:3000/software-services";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div[2]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
ServicePageSoftwareDevTest();


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


async function ServicePageUIUXDevTest() {
    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    try{
      await driver.get('http://localhost:3000/services');
      let expectedURL="http://localhost:3000/uiux-services";
      await driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div[4]/a")).click();
      let redirectURL=driver.getCurrentUrl();
      assert.strictEqual(redirectURL,expectedURL);
    } finally {
      await driver.quit();
    }
}
ServicePageUIUXDevTest();
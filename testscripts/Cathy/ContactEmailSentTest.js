const { Builder, By, until } = require('selenium-webdriver');

async function ContactEmailSentTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/contact');

        await driver.findElement(By.css('.fullName')).sendKeys('Cathy Khong');
        await driver.findElement(By.css('.email')).sendKeys('cathykhong@example.com');
        await driver.findElement(By.css('.message')).sendKeys('This is a test message');

        await driver.findElement(By.css('#sendContact')).click();

        await driver.sleep(5000);

        console.log('Email has been sent.');

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await driver.quit();
    }
}
ContactEmailSentTest();
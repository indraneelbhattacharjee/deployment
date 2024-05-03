const { Builder, By, until } = require('selenium-webdriver');

async function ContactEmptyFieldTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/contact');

        await driver.wait(until.elementLocated(By.css('.fullName')), 5000);
        await driver.wait(until.elementLocated(By.css('.email')), 5000);
        await driver.wait(until.elementLocated(By.css('.message')), 5000);

        await driver.findElement(By.css('.fullName')).sendKeys('Cathy Khong');
        await driver.findElement(By.css('.email')).sendKeys('cathykhong@example.com');
        await driver.findElement(By.css('.message')).sendKeys('This is a test message');

        await driver.findElement(By.css('#sendContact')).click();

        await driver.wait(until.urlIs('http://localhost:3000/contact'), 10000);

        console.log('Form submitted successfully!');
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await driver.quit();
    }
}
ContactEmptyFieldTest();
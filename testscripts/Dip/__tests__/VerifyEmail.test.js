const { Builder, By, until } = require("selenium-webdriver");

describe('VerifyEmailPage Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Email verification flow', async () => {
        await driver.get('http://localhost:3000/verify-email');

        await driver.findElement(By.id("email")).sendKeys("test4@bd.com");

        // Submit the form
        await driver.findElement(By.css("button[type='submit']")).click();

        // Wait for an alert or redirection
        await driver.wait(until.alertIsPresent(), 10000);
        const alert = await driver.switchTo().alert();
        expect(await alert.getText()).toContain('You will receive a code in your email to reset your password.');
        await alert.accept();

        // Optionally, check redirection
        await driver.wait(until.urlIs('http://localhost:3000/reset-password'), 10000);
        expect(await driver.getCurrentUrl()).toBe('http://localhost:3000/reset-password');

        console.log("Test Passed: Email verification triggered and alert handled.");
    });
});


const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe('Registration Form Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('User registration and alert handling', async () => {
        await driver.get("http://localhost:3000/register");

        await driver.findElement(By.id("username")).sendKeys("testuser");
        await driver.findElement(By.id("email")).sendKeys("testuser@example.com");
        await driver.findElement(By.id("password")).sendKeys("Password123!");
        await driver.findElement(By.id("confirm-password")).sendKeys("Password123!");

        await driver.findElement(By.css("button[type='submit']")).click();

        await driver.wait(until.alertIsPresent(), 10000);
        let alert = await driver.switchTo().alert();
        await alert.accept();

        await driver.wait(until.urlIs("http://localhost:3000/login"), 10000);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toBe("http://localhost:3000/login");

        console.log("Test Passed: User registered and redirected to login page after accepting alert.");
    });
});

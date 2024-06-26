import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login_page.js';
import { expect } from 'chai';

When("entering email {string} and password {string}", async (username, password) => {
    await LoginPage.writeCredentials(username, password)
});

When("pressing login button", async () => {
    await LoginPage.pressLoginButton()
});

Then("verify user successfully logged in", async () => {
    const actualMessage = await LoginPage.getLoginModalText()
    console.log('Actual message: ', actualMessage)

    expect(actualMessage).to.equal('You are logged in!');
});
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login_page.js';

Given("app is open", async () => {
    await LoginPage.homeButtonDisplayed();
});

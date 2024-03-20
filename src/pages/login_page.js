import LoginLocators from '../locators/login_locators.js';

const loginLocators = new LoginLocators();

class LoginPage {
    async homeButtonDisplayed () {
        await loginLocators.homeOption.isExisting();
    }

    async writeCredentials (username, password) {
        await loginLocators.loginOption.click();
        await loginLocators.inputUsername.setValue(username);
        await loginLocators.inputPassword.setValue(password);
    }

    async pressLoginButton () {
        await loginLocators.submitButton.click();
    }

    async getLoginModalText() {
        await loginLocators.modalWindowLogin.waitForDisplayed({ timeout: 5000 })
        return await loginLocators.modalWindowLogin.getText();
    }
}

export default new LoginPage();
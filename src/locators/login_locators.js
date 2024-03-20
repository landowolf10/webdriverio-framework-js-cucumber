class LoginLocators {
    get homeOption () {
        return $("//*[@text='Home' or @label='Home']");
    }

    get loginOption () {
        return $("//*[@text='Login' or @label='Login']");
    }

    get inputUsername () {
        return $("//*[@text='Email' or @label='Email']");
    }

    get inputPassword () {
        return $("//*[@text='Password' or @label='Password']");
    }

    get submitButton () {
        return $("//*[@text='LOGIN' or @label='LOGIN']");
    }

    get modalWindowLogin () {
        return $("//*[@text='You are logged in!' or @label='You are logged in!']");
    }

    get wrongElement () {
        return $("//*[@text='wrong']");
    }
}

export default LoginLocators;
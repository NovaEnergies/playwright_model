exports.LoginPage = class LoginPage{

    constructor(page) {
        this.page = page
        this.username_field = page.getByLabel('Username')
        this.password_field = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        await this.username_field.fill(username)
        await this.password_field.fill(password)
        await this.login_button.click()
    }
}
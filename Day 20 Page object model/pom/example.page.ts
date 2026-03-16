import {Page,Locator} from '@playwright/test'
interface LoginData{
    username:string
    password:string
}
class Example{
    usernameTf:Locator
    passwordTf:Locator
    submitbtn:Locator
    page:Page
    constructor(page:Page){
        this.page=page;
        this.usernameTf=page.locator("#username")
        this.passwordTf=page.locator("#password")
        this.submitbtn=page.locator("#submit")

    }
    
    async Login(loginData:LoginData){
        await this.usernameTf.fill(loginData.username);
        await this.passwordTf.fill(loginData.password);



    }
    

}
export default Example;
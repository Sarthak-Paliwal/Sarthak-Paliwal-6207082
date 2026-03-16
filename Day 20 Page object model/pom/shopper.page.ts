import {Locator,Page} from "@playwright/test"
class Shoppers{
    fnameTf:Locator
    lnameTf:Locator
    maleRad:Locator
    femaleRad:Locator
    otherRad:Locator
    phoneTf:Locator
    emailTf:Locator
    passwordTf:Locator
    cnfpasswordTf:Locator

    constructor(page:any){
        this.fnameTf=page.locator("//input[@id='First Name']");
        this.lnameTf=page.locator("//input[@id='Last Name']")
        this.maleRad=page.locator("#Male")
        this.femaleRad=page.locator("#Female")
        this.otherRad=page.locator("#Other")
        this.phoneTf=page.locator('//input[@id="Phone Number"]')
        
        this.passwordTf=page.locator("")
        this.cnfpasswordTf=page.locator("")


    }
}
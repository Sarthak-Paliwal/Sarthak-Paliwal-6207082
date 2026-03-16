import {Locator} from "@playwright/test"
class Amazon{
    inputTf:Locator
    submitbtn:Locator
    configRadio:Locator
    productCard:Locator
   
    constructor(page:any){
        this.inputTf= page.locator("#twotabsearchtextbox")
        this.submitbtn=page.locator("#nav-search-submit-button")
        this.configRadio=page.locator('//li[@id="p_n_g-1003495121111/44897292031"]')
        this.productCard=page.locator('//div[@class="a-section aok-relative s-image-fixed-height"]/img').nth(4)
        
    }

    async searchProduct(data:any){
        await this.inputTf.fill(data.product);
        await this.submitbtn.click();
    }
    async filterProduct(data:any){
        await this.configRadio.click();
    }
    
    

}
export default Amazon;
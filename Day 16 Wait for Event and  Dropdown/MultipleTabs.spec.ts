import {test} from "@playwright/test"
test("Multiple Tabs",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.flipkart.com");
    const input=await page.getByPlaceholder("Search for Products, Brands and More").first();
    await input.fill("shoes");
    await input.press("Enter");
let [page2]=await Promise.all([
    page.waitForEvent("popup"),
    await page.locator('(//img[@class="MZeksS"])[3]').click()
])
const price=await page2.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();
console.log(price);


})

//new Tab
test("Task 2",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button",{name:'view more'}).first().click()
    ])
    await page2.getByRole("button",{name:"Add to Cart"});
    await page2.pause();
})

//new Window

test("Task 3",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=1");
    const [page2]=await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button",{name:'view more'}).first().click()
    ])
    await page2.getByRole("button",{name:"Add to Cart"});
    await page2.pause();
})

//Download
test.only("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [page2]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    await page.pause();
    
    
})
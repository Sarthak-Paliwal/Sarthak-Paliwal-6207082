import { test, expect,request } from '@playwright/test';

test('Post request', async ({request}) => {
    //let apiContext= await request.newContext()
    let r1=await request.post("https://petstore.swagger.io/v2/pet",{
        data:{
            id:"1",
            name:"dogs",
            status:"available"

        }
    })
    const resData=await r1.json();
    console.log(resData);
    
});
test('Get Request', async ({ request }) => {
  let r1=await request.get("https://petstore.swagger.io/v2/pet/1")
 const resData=await r1.json();
    console.log(resData);
});

test('Delete Request', async ({ request }) => {
  let r1=await request.delete("https://petstore.swagger.io/v2/pet/1")
 const resData=await r1.json();
    console.log(resData);
});

test('Get Pet Request', async ({ request }) => {
  let r1=await request.get("https://petstore.swagger.io/v2/pet/available")
 const resData=await r1.json();
    console.log(resData);
});

test('Update Pet Request', async ({ request }) => {
  let r1=await request.put("https://petstore.swagger.io/v2/pet/available",{
    data:{
        id:"1",
        name:"dogggggggggg",
        status:"available"
        
    }
  })
 const resData=await r1.json();
    console.log(resData);
});

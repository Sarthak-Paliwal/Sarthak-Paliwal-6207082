//!Annotation
//TODO types of annotations Fix me , Only, skip, Fail, Describe, slow, settimeout

import {test} from "@playwright/test"

test.skip("title1",async()=>{//!skips the complete test case
    console.log("hello1");
    
})
// test.describe.only("title2",async()=>{ //! when you use describe then in that test block you cant use fixture
//     console.log("hello2"); //It groups multiple test cases
//     test.only("internal",()=>{
//         console.log("test1in");
        
//     })
//     test("internal2",()=>{
//         console.log("test2in");
        
//     })

// })
test("title3",async()=>{ //! makes the default time to 3x slower i.e., 90 sec
    test.slow()
    console.log("hello3");

    
})
test.fixme("title4",async()=>{//!skips this test case as well because it is not yet completed
    console.log("hello4");
    
})
// test.fail("title5",async()=>{ //! it works as not operator if test case is failing then it gives
//     console.log("hello5"); //!pass and vice versa for pass
    
// })
test("title6",async()=>{
    console.log("hello6");
    
})

// test.only("title6",async()=>{  //!runs only this test case no other test cases will be executed
//     console.log("hello6");
    
// })

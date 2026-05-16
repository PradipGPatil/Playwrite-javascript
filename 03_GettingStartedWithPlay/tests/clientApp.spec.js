import {test} from '@playwright/test'

test.only(" end to end test ", async({browser})=>{

    const context= await browser.newContext();
    const page = await context.newPage();

    const email=page.locator("#userEmail");
    const password=page.locator("#userPassword");
    const loginbtn=page.locator("#login");
    const cards=page.locator(".card-body");
    const text="ZARA COAT 3";


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await email.fill("testpradip@gmail.com");
    await password.fill("Demo@1234");
    await loginbtn.click();
       await page.pause();
    const cardCount=await cards.count()
    console.log(cardCount);

     for(let i=0;i<cardCount;i++){
    
        if(await cards.nth(i).locator("b").textContent()===text){
            await cards.nth(i).locator('.w-10').click();
            break;
        }

     }


})
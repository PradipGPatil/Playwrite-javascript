const{test}=require("@playwright/test")

test("login practice", async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    
    // web element
    const registerBtn=page.locator('.text-reset');
    const firstNameTxtBox=page.locator("#firstName");
    const lastNameTxtBox=page.locator("#lastName");
    const useremainTxtBox=page.locator("#userEmail");
    const phoneNumberTxtBox=page.locator("#userMobile");
    const userPasswordTxtBox=page.locator("#userPassword");
    const confirmPasswordTxtBox=page.locator("#confirmPassword");

    const elUsername= page.locator("#userEmail");
    const elPassword=page.locator("#userPassword");
    const loginBtn=page.locator("#login");
    const cardtTitle=page.locator(".card-body b")


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await elUsername.fill("testpradip@gmail.com");
    await elPassword.fill("Demo@1234");
    await loginBtn.click();

    await page.waitForLoadState("networkidle");
    console.log( await cardtTitle.allTextContents())



})


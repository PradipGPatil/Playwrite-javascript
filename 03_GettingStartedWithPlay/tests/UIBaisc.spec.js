const {test, expect}=require('@playwright/test');


test.only ("browser contest test", async ({browser})=>{

  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  console.log(await page.title());
  await page.locator("#username").fill("testuser");
  await page.locator("#password").fill("demo@1234");
  await page.locator("#signInBtn").click();
  console.log(await page.locator('[style="display: block;"]').textContent());

  // assertion used to check contain text
  await expect(await page.locator('[style="display: block;"]')).toContainText('Incorrect')
})


// if playwrite see you do not have context then 
// it will create context automatically for you 
test("page test",async({page})=>{
    await page.goto("https://google.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})
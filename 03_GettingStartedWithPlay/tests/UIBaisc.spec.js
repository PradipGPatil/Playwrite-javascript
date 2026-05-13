const {test, expect}=require('@playwright/test');


test("browser contest test", async ({browser})=>{


    const context=await browser.newContext();
  const page=await context.newPage();

  
  // we created the locatore at top and store it in variable
const userName=page.locator("#username");
const signIn=page.locator("#signInBtn");
const password=page.locator("#password");
const iphoneWebElement=page.locator(".card-body a");



  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  console.log(await page.title());
  await page.locator("#username").fill("testuser");
  await page.locator("#password").fill("demo@1234");
  await page.locator("#signInBtn").click();
  console.log(await page.locator('[style="display: block;"]').textContent());

  // assertion used to check contain text
  await expect(await page.locator('[style="display: block;"]')).toContainText('Incorrect')

  // now login with corrct name and password
  await userName.fill("")
  await password.fill("")
  await userName.type("rahulshettyacademy");
  await password.type("Learning@830$3mK2")
  await signIn.click();
  console.log(await iphoneWebElement.first().textContent("iphone"))

  // if we want to get content of the all the text 

  // allTextContents retrun the nodelist , but it will not wait till page get completly rendered
  // so it sometime return the empty page . 
  const allcardTitle= await iphoneWebElement.allTextContents();
  console.log(allcardTitle);
})


// if playwrite see you do not have context then 
// it will create context automatically for you 
test("page test",async({page})=>{
    await page.goto("https://google.com/")
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})
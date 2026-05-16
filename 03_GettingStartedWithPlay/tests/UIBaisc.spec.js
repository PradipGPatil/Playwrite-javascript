const { test, expect } = require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');


test("browser contest test", async ({ browser }) => {


  const context = await browser.newContext();
  const page = await context.newPage();


  // we created the locatore at top and store it in variable
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const password = page.locator("#password");
  const iphoneWebElement = page.locator(".card-body a");



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
  const allcardTitle = await iphoneWebElement.allTextContents();
  console.log(allcardTitle);
})


// if playwrite see you do not have context then 
// it will create context automatically for you 
test("page test", async ({ page }) => {
  await page.goto("https://google.com/")
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
})


test("Ui controls", async ({ page }) => {

  const username = page.locator("#username");
  const password = page.locator('input[name*="password"]');

  const dropdown = page.locator("select");
  const userradiobtn = page.locator('input[name="radio"]');
  const okaybtn = page.locator("#okayBtn");
  const signInbtn = page.locator("#signInBtn");
  const checkboxbtn = page.locator("input#terms");
  const link = page.locator('a[href*="document"]');


  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  await username.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");

  // select option is used for static dropdown selection
  await dropdown.selectOption("consult");
  await userradiobtn.last().check();
  await okaybtn.click();

  await expect(userradiobtn.last()).toBeChecked();
  console.log(await userradiobtn.last().isChecked());

  await checkboxbtn.check();
  await expect(checkboxbtn).toBeChecked();

  await checkboxbtn.uncheck();
  expect(await checkboxbtn.isChecked()).toBeFalsy();

  await expect(link).toHaveAttribute("class", "blinkingText");
  await page.pause();

});


test("child window handling", async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  const link = page.locator('a[href*="document"]');
  const username = page.locator("#username");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


  const [page2] = await Promise.all([
    // here we do not give await because it return the promise. if we add await it will wait to event get trigger
    // which will not happen becuase we are clicking later 
    context.waitForEvent("page"),// 
     link.click() // when we click on this link it will open new page . also trigger then new page event 

  ])

  const text=await page2.locator(".red").textContent();
  const splitText= text.split('@');
  const reqText= splitText[1].split(" ");
  console.log(reqText[0]);

  await username.type(reqText[0]);
  console.log( "here is text by textcontec"+ await username.textContent());

  console.log("here is value by inputvalue "+ await username.inputValue())

  await page.pause()


})
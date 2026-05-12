
import { defineConfig, devices } from '@playwright/test';

// to run playwrite we need default config file where playwrite check 
const config= defineConfig({
  testDir: './tests',
  reporter: 'html',
// by default playwrite has 30 sec timeout so it will wait button to be loaded 
  timeout:40*1000,

  // as name suggest expect , use to tell playwright how much time to wait
  expect:{
    timeout:50*100
  },
  use: {
    browserName:"chromium",

    // instead of running npx playwright test --headed each time we can configure here directly
    headless: false
  }

});

export default config;


import { defineConfig, devices } from '@playwright/test';
import { off } from 'process';
import type {TestOptions} from './test-options';

require('dotenv').config();

export default defineConfig<TestOptions>({
  fullyParallel: true,
  retries: 1,
  reporter: [
    //['json', {outputFile: 'test-report/jsonReport.json'}],
    //['junit', {outputFile: 'test-report/junitReport.xml'}],
    //['allure-playwright'],
    ['html']
  ],

  use: {

    baseURL: 'http://localhost:4200/',
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',

    trace: 'on-first-retry',
    video: 'off'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200/'
  }
  

});

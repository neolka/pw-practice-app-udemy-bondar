import {test, expect} from '@playwright/test';


test('Applitools visual test', async ({page}) => {
    await page.goto('/')
   
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})
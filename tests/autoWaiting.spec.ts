import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()

})

test('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')
    const text = await successButton.allTextContents()

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout:20000})
})
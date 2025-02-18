import {test} from '@playwright/test'

test('like counter increasing', async({page}) => {
    await page.goto('/')
    await page.getByText('Global Feed'). click()

    const firstLikeButton = page.locator('app-article-preview').first().locator('button')
    await firstLikeButton.click()
})
import {test} from '@playwright/test'
import {PageManager} from '../page-objects/pageManager'
import {faker} from '@faker-js/faker'
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('navigate to form page', async({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().dataPickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async({page}) => {
    const pm = new PageManager(page)

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`


    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutPage().submitUsingTheGridFormWithCredsAndSelectOptions('test@test.com', 'Welcome123', 'Option 1')
    await pm.onFormLayoutPage().submitInliineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
    await page.locator('nb-card',{hasText: 'Inline form'}).screenshot({path: 'screenshots/inlineForm.png'})
//     await pm.navigateTo().dataPickerPage()
//     await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(3)
//     await pm.onDatePickerPage().selectdatePickerrWithRangeFromToday(5,10)
// 
})

test.only('testing with Argos CI', async({page}) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await argosScreenshot(page, "form Layouts Page");
    await pm.navigateTo().dataPickerPage()
    await argosScreenshot(page, "data Picker Page");
})
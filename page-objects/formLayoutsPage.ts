import { Page } from "@playwright/test";
import { HelperBase} from '../page-objects/helperBase'


export class FormLayoutsPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async submitUsingTheGridFormWithCredsAndSelectOptions(email: string, password: string, optionText: string){

        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridForm.getByRole('button').click()
    }

    async submitInliineFormWithNameEmailAndCheckbox(email: string, password: string, rememberMe: boolean){

        const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"})
        await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(email)
        await inlineForm.getByRole('textbox', {name: "Email"}).fill(password)
        if (rememberMe)
            await inlineForm.getByRole('checkbox').check({force: true})
            await inlineForm.getByRole('button').click()
    }
}
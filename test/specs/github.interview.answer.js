const LoginPage = require('../pageobjects/login.page');

//Create a reusable function that will login to Github with the following login details:
//This will need to be reusable and run prior to the other steps

//user name: 'KTJ-Demo'
//password of 'Dog.Bone1'

describe('Github Repository Tests', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('KTJ-Demo', 'Dog.Bone1');
        await browser.pause(3000);
    })

    //Create a test that will create a new Github Repository and Validate that the Repository was created

    it('Create a new Github Repository', async () => {
        const uuid = () => Math.random().toString(36).slice(2)
        const id = uuid()
        await browser.$("a[class='btn btn-sm btn-primary']").waitForClickable()
        await browser.$("a[class='btn btn-sm btn-primary']").click()
        await browser.$("#repository_name").setValue("repo_" + id)
        await browser.$("button=Create repository").click()
        await browser.pause(3000)
    })


     //Create a test that searches for a Repository that contains the word KTJ-Demo

    // it('Search for Repositories that contain the word KTJ-Demo', async () => {
    //     await browser.$('input[id=dashboard-repos-filter-left]').setValue('KTJ-Demo')
    //     await browser.$('.dashboard-sidebar').contains('KTJ-Demo')
    //     await browser.pause(3000);
    //     await browser.$("form[class='logout-form js-loggout-form']").click()
    // })


    // //Create a test that validates the following Repo Grid Items:
    // //.gitignore, LICENSE, README.md

    // it('Create a test that validates the following Repo Grid Items: .gitignore, LICENSE, README.md', async () => {
    //     await browser.$('.dashboard-sidebar > .Details > .js-repos-container > .list-style-none > :nth-child(1)').click()
    //     await expect(browser).toContain('.gitignore')
    //     await expect(browser).toContain('README.md')
    //     await browser.pause(3000);
    //     await browser.$("form[class='logout-form js-loggout-form']").click()
    // })



});
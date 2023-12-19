import { test, expect, Page } from '@playwright/test';

const baseUrl = 'https://uat.quiklyz.com/';
const loginUrl = 'https://uat.quiklyz.com/login'

test.describe("c", () => {

    let page: Page;
    
    test.beforeAll(async ({browser}) => {
      
        page = await browser.newPage();
            await page.goto(baseUrl)
    })
    test.afterEach(async ({browser})=>{
        await browser.close();
    }); 
    
           //invalid first name
        test('Verify the Register functionality  by providing first name', async ({}) =>{
            await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('menuitem', { name: 'New user? Start here' }).click()
        await expect(page).toHaveURL(loginUrl)
        await page.getByRole('textbox', { name: 'First Name' }).fill('Prafull@')
        await page.getByRole('textbox', { name: 'Last Name' }).fill('')
        await expect(page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter a valid first name')).toHaveText('Enter a valid first name')
    })
        //invalid last name
        test('Verify the Register functionality  by providing invalid last name', async ({}) =>{
            await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('menuitem', { name: 'New user? Start here' }).click()
        await page.getByRole('textbox', { name: 'Last Name' }).fill('patil@11')
        await page.getByRole('textbox', { name: 'Email Address' }).click()
        await expect(page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter a valid last name')).toHaveText('Enter a valid last name')
    })
          //invalid Email
        test('Verify the Register functionality  by providing invalid Email', async ({}) =>{
            await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('menuitem', { name: 'New user? Start here' }).click()
        await page.getByRole('textbox', { name: 'Email Address' }).fill('Praful1@com')
        await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).click()
        await expect(page.getByRole('tabpanel', { name: 'Register' }).getByText('Please enter valid value for Email Address')).toHaveText('Please enter valid value for Email Address')
    })
      //invalid mobile number
        test('Verify the Register functionality  by providing invalid mobile number', async ({}) =>{
            await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('menuitem', { name: 'New user? Start here' }).click()
        await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).fill('912620345')
        await page.locator('.mat-checkbox-inner-container').first().click()
        await expect(page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter your Mobile Number must be 10 characters')).toHaveText('Enter your Mobile Number must be 10 characters')
        await expect(page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' })).toBeDisabled()
     })
      
    test('Verify the Login functionality  by providing unregistered mobile number', async ({}) =>{

        await page.waitForTimeout(1000)
        await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('button', { name: 'Login', exact: true }).click()
        await expect(page).toHaveURL(loginUrl)
        
        //Enter unregistered mobile number
        await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203466")
        await page.getByRole('button', { name: 'Get OTP' }).click()
        await expect(page.getByText('Please Enter Valid Registered Mobile Number.')).toHaveText('Please Enter Valid Registered Mobile Number.')
        await page.getByRole('button', { name: 'OK' }).click()
    })
        test('Verify the Login functionality by providing invalid mobile number', async ({}) =>{

            await page.waitForTimeout(1000)
            await page.getByText('Bengaluru', { exact: true }).click()
            await page.getByRole('button', { name: 'Login ' }).click()
            await page.getByRole('button', { name: 'Login', exact: true }).click()
        
            // enter a mobile number with 9 digits or fewer.
        await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("99778811")
        await expect(page.getByRole('button', { name: 'Get OTP' })).toBeDisabled()
    })
    test('Verify that the PanVerification field should not accept age below 18 years', async ({}) => {
        await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login ' }).click()
        await page.getByRole('button', { name: 'Login', exact: true }).click()
        await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203450")
        await page.getByRole('button', { name: 'Get OTP' }).click()
      for (let i = 1; i <= 6; i++) {
        await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
      }
        await page.getByRole('button', {name:'Login', exact:true}).click()
        
        // DOB should be greater than 18 years 
    await page.getByLabel('PAN Number *').fill('AQVPT9014E')
    await page.getByRole('button', { name: 'Open calendar' }).click()
    await page.getByRole('button', { name: '10 May 2023', exact: true }).click()
    await page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
    await page.getByRole('button', { name: 'Edit Record' }).click()
    await expect(page.getByText('DOB should be greater than 18 years')).toHaveText('DOB should be greater than 18 years')
    await page.getByRole('button', { name: 'OK' }).click()
})
test('Verify that the Continue button is disabled when an invalid PAN number is entered', async ({}) => {
    await page.getByText('Bengaluru', { exact: true }).click()
    await page.getByRole('button', { name: 'Login ' }).click()
    await page.getByRole('button', { name: 'Login', exact: true }).click()
    await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203450")
    await page.getByRole('button', { name: 'Get OTP' }).click()
  for (let i = 1; i <= 6; i++) {
    await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
  }
    await page.getByRole('button', {name:'Login', exact:true}).click()
     
    //Invalid Pan Number so Continue button must be disabled 
      await page.getByLabel('PAN Number *').fill('AQVPT9014')
      await page.getByRole('button', { name: 'Open calendar' }).click()
      await page.getByRole('button', { name: 'Choose month and year' }).click()
      await page.getByRole('button', { name: 'Previous 24 years' }).click()
      await page.getByRole('button', { name: '1994' }).click()
      await page.getByRole('button', { name: 'June 1994' }).click()
      await page.getByRole('button', { name: '10 June 1994', exact: true }).click()
      await page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
  await expect(page.getByRole('button', { name: 'Edit Record' })).toBeDisabled()
})
test('Verify that the PAN and name do not match when entered details belong to different persons', async ({}) => {
    await page.getByText('Bengaluru', { exact: true }).click()
    await page.getByRole('button', { name: 'Login ' }).click()
    await page.getByRole('button', { name: 'Login', exact: true }).click()
    await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203450")
    await page.getByRole('button', { name: 'Get OTP' }).click()
  for (let i = 1; i <= 6; i++) {
    await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
  }
    await page.getByRole('button', {name:'Login', exact:true}).click()
    // Pan and name doesn't match
await page.getByLabel('PAN Number *').fill('AQVPT9014E')
await page.getByRole('button', { name: 'Open calendar' }).click()
await page.getByRole('button', { name: 'Choose month and year' }).click()
await page.getByRole('button', { name: 'Previous 24 years' }).click()
await page.getByRole('button', { name: '1994' }).click()
await page.getByRole('button', { name: 'June 1994' }).click()
await page.getByRole('button', { name: '10 June 1994', exact: true }).click()
await page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
await page.getByRole('button', { name: 'Edit Record' }).click()
await expect(page.getByText('Name entered does not match with details received from PAN, please correct the n')).toHaveText('Name entered does not match with details received from PAN, please correct the name or PAN number to proceed')
await page.getByRole('button', { name: 'OK' }).click()
})
})
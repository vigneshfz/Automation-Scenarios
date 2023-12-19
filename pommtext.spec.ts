import {test } from "@playwright/test";
import RegisterPage from "../tests/pageobject/register"
import otpPage from "../tests/pageobject/otp"
import findCarPage from "../tests/pageobject/findcar"
import eligibilityPage from "../tests/pageobject/eligibility"


test('test', async ({ page }) => {
const register = new RegisterPage(page)
const otp = new otpPage(page)
const findcar = new findCarPage(page)
const eligibility = new eligibilityPage(page)
await page.goto("https://uatcontainer.quiklyz.com")
await register.mumbai()
await register.login()
await register.newUser()

await register.enterFirstName("Prafull")
await register.enterLastName("Patil")
await register.enterEmail("Prafull110@gmail.com")
await register.enterPhone("9126203553")

await register.privacyPolicy()
await register.registerButton()

await otp.otp1("1")
await otp.otp2("2")
await otp.otp3("3")
await otp.otp4("4")
await otp.otp5("5")
await otp.otp6("6")
await otp.otpContinueButton()

await findcar.findcar()
await findcar.chooseCar()
await findcar.checkELigibility()

await eligibility.pan("CVPPP2613E")
await eligibility.date1()
await eligibility.date2()
await eligibility.date3()
await eligibility.date4()
await eligibility.date5()
await eligibility.date6()
await eligibility.checkbox()
await eligibility.Continue()
})
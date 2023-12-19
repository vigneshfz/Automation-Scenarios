import {test} from "@playwright/test"
import RegisterPage from "../tests/pageobjectt/register"
import otpPage from "../tests/pageobjectt/otp"
import findCarPage from "../tests/pageobjectt/findcar"
import eligibilitypage from "../tests/pageobjectt/eligibilitycheck"
import regularmatch from "../tests/pageobjectt/Regularmatch"
import empstatus from "../tests/pageobjectt/empstatus"
import incomevalidation from "../tests/pageobjectt/incomevalidation"
import selectyourbank from "../tests/pageobjectt/selectyourbank"
import fileupload from "../tests/pageobjectt/fileupload"
import tokenpayment from "../tests/pageobjectt/tokenpayment"
import choosepaymentmethod from "../tests/pageobjectt/choosepaymethod"
import proceedtokyc from "../tests/pageobjectt/proceedtokycagr"
import proceedtoaddresscheck from "../tests/pageobjectt/proceedtoAddresscheck"
import proceedtoeagreement  from "../tests/pageobjectt/proceedtoeagreem"
 import refundablesecuritydep from "./pageobjectt/Refundablesecdep"
 import securitypay from "./pageobjectt/securitypay"
 import seldeliveryloc from "./pageobjectt/seldeliveryloc"
 import continuetoemand from "./pageobjectt/continuetoemand"





test('test', async ({ page }) => {
const register = new RegisterPage(page)
const otp = new otpPage(page)
const findcar = new findCarPage(page)
const eligibilitycheck = new eligibilitypage(page)
const Regularmatch = new regularmatch(page)
const Empstatus= new empstatus(page)
const Incomevalidation=new incomevalidation(page)
const Selectyourbank=new selectyourbank(page)
const Fileupload= new fileupload(page)
const Tokenpayment= new tokenpayment(page)
const Paymentmethod=new choosepaymentmethod(page)
const Proceedtokyc= new proceedtokyc(page)
const ProceedtoAddresscheck=new proceedtoaddresscheck(page)
const Proceedtoeagreement=new proceedtoeagreement(page)
const Refundablesecuritydep=new refundablesecuritydep(page)
const Securitypay=new securitypay(page)
const Seldeliveryloc=new seldeliveryloc(page)
const Continuetoemand=new continuetoemand(page)

await page.goto("https://uat.quiklyz.com")
await register.mumbai()
await register.login()
await register.newUser()
await register.enterFirstName("karthi")
await register.enterLastName("k")
await register.enterEmail("prakashnov7@gmail.com")
await register.enterPhone("7010748230")
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
await eligibilitycheck.pan("BJPPV2702P")
await eligibilitycheck.cal()
await eligibilitycheck.year()
await eligibilitycheck.backbutton()
await eligibilitycheck.selectyear()
await eligibilitycheck.selectmonth()
await eligibilitycheck.selectdate()
await eligibilitycheck.checkbox()
await eligibilitycheck.Continue()
await Regularmatch.address("t.nagar")
await Regularmatch.pin("600028")
await Regularmatch.city("chennai")
await Empstatus.selstatus()
await Empstatus.click()
await Incomevalidation.selstatus()
await Incomevalidation.terms()
await Incomevalidation.click()
await Selectyourbank.selbank()
await Selectyourbank.selname()
await Selectyourbank.statement()
await Selectyourbank.contbtn()
await Fileupload.upload()
await Fileupload.selectbank()
await Fileupload.submit()
await Fileupload.done()
await Fileupload.proctocontn()
await Fileupload.cont()
await Tokenpayment.pay()
await Paymentmethod.cardnum('5123 4567 8901 2346')
await Paymentmethod.cardname('HDFC')
await Paymentmethod.cvv('123')
await Paymentmethod.month()
await Paymentmethod.monthsel()
await Paymentmethod.year()
await Paymentmethod.yearsel()
await Paymentmethod.click()
await Paymentmethod.axissim()
await Paymentmethod.submt()
await Paymentmethod.aadhaar()
await Paymentmethod.verify()
await Paymentmethod.retrieve()
await Proceedtokyc.kycverificationbtn()
await ProceedtoAddresscheck.Addrcheck()
await ProceedtoAddresscheck.ckycaddress()
await Proceedtoeagreement.eagree()
await Proceedtoeagreement.continue()
await Refundablesecuritydep.clickbtn()
await Securitypay.selbank()
await Securitypay.selname()
await Securitypay.statement()
await Securitypay.contbtn()
await Seldeliveryloc.doorstep()
await Seldeliveryloc.saveandcon()
await Continuetoemand.accounttyp('savings')
await Continuetoemand.Bankaccno('123456')
await Continuetoemand.Accountholder('raj')
await Continuetoemand.email('vigneshmks2409@gmail.com')
await Continuetoemand.authentication('44455')
await Continuetoemand.Bank('HDFC')
await Continuetoemand.Bankacc('12465555555565')
await Continuetoemand.Ifsc('4655555465')
await Continuetoemand.mandate('string')
await Continuetoemand.continue()

})
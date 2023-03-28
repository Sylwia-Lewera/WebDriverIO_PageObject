const DashboardPage = require('./../po/pages/dashboard.page.js');
const DoctorsPage = require('./../po/pages/doctors.page.js');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach(async function () {
        await dashboardPage.open();
      });
  
      it('Check page title', async function () {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
      });

      it('Open modal window for adding a new doctor', async () => {
        await dashboardPage.sidemenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed(); 
      });
      it('Add new doctor', async () => {
        await dashboardPage.sidemenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await (doctorsPage.addDoctorModal.rootEl).waitForDisplayed();
  
        await $('[name="Name').setValue('John Doe');
        await $('[#DoctorMobile').setValue('1111111111');
        await $('[name="Email').setValue('test@test.com');
        await $('[name="Education').setValue('Basic');
        await $('[name="Designation').setValue('Test');
  
        await $('.e-footer-content button.e-primary').click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed(); 
  
        expect($('#Specialist_8')).$('.name').toHaveTest('Dr. John Doe');
        expect($('#Specialist_8')).$('.ducation').toHaveTest('Basic', {ignoreCase: true});
      });
  
      it('Close a modal window for adding new doctor', async () => {
        await dashboardPage.sidemenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await (doctorsPage.addDoctorModal.rootEl).waitForDisplayed();
  
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed(); 
      });
})
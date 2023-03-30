//const { pages } = require('../../po');
const { pages } = require('../../po/pages');

describe('Doctors page', () => {
    beforeEach(async function () {
      await pages('dashboard').open();
      });
  
      it('Check page title', async function () {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
      });

      it('Open modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed(); 
      });
      it('Add new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await (pages('doctors').addDoctorModal.rootEl).waitForDisplayed();
  
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.input('phone').setValue('1111111111');
        await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
        await pages('doctors').addDoctorModal.input('education').setValue('Basic');
        await pages('doctors').addDoctorModal.input('designation').setValue('Test');
  
        await pages('doctors').addDoctorModal.saveBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed(); 
  
        expect(pages('doctors').specialistCard(8).name).toHaveTest('Dr. John Doe');
        expect(pages('doctors').specialistCard(8).ducation).toHaveTest('Basic', {ignoreCase: true});
      });
      it('Close a modal window for adding new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await (pages('doctors').addDoctorModal.rootEl).waitForDisplayed();
  
        await pages('doctors').addDoctorModal.closeBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed(); 
      });
})


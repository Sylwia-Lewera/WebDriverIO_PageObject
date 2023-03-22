describe('Doctors page', () => {
    beforeEach(async function () {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
      });
  
      it('Check page title', async function () {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
      });

      it('Open modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click(); //add new doctor button click new-doctor-dialog
        expect($('.new-doctor-dialog')).toBeDisplayed(); 
      });
      it('Add new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await ($('.new-doctor-dialog')).waitForDisplayed();
  
        await $('[name="Name').setValue('John Doe');
        await $('[#DoctorMobile').setValue('1111111111');
        await $('[name="Email').setValue('test@test.com');
        await $('[name="Education').setValue('Basic');
        await $('[name="Designation').setValue('Test');
  
        await $('.e-footer-content button.e-primary').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed(); 
  
        expect($('#Specialist_8')).$('.name').toHaveTest('Dr. John Doe');
        expect($('#Specialist_8')).$('.ducation').toHaveTest('Basic', {ignoreCase: true});
      });
  
      it('Close a modal window for adding new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await ($('.new-doctor-dialog')).waitForDisplayed();
  
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed(); 
      });
})
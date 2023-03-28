const SideMenuComponent = require('./../components/common/sidemenu.component.js'); 

class DashboardPage {

    constructor() {
        this.sidemenu = new SideMenuComponent();
    }
    async open(){
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    }
}

module.exports = DashboardPage;
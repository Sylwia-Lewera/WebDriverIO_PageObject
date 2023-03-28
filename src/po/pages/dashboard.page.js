const BasePage = require('./base.page');
const SideMenuComponent = require('./../components/common/sidemenu.component'); 

class DashboardPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/dashboard')
        this.sidemenu = new SideMenuComponent();
    }
}

module.exports = DashboardPage;
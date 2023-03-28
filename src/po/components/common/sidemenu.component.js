const BaseComponent = require('./base.component');

class SideMenuComponent extends BaseComponent {

    constructor() {
        super('#plannerSideBar');
    }
    
    get name() {
        returnthis.rootEL.$('.name');
    }

    item(param){
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]'
        };
        return this.rootEL.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;
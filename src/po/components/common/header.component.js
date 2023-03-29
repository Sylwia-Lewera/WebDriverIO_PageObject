const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {

    constructor() {
        super('planner-header');
    }

    get logoutBTN() {
        return this.rootEL.$('logout-icon-container');
    }
}

module.exports = HeaderComponent;
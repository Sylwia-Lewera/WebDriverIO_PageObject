const DashboardPage = require('./dashboard.page.js');
const DoctorsPage = require('./doctors.page.js');


/**
 * 
 * @param name {'dashboard' | 'doctors'}
 * @returns {DashboardPage | DoctorsPage}
 */
function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsPage,
    pages,
}
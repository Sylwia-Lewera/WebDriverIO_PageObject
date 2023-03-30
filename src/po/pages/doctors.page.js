const BasePage = require('./base.page');

const AddDoctorModal = require('../components/doctors/add-doctor.component');
const DoctorListHeader = require('../components/doctors/list-header.component');
const SpecialistCard = require('../components/doctors/specialist-card.compponent');

class DoctorsPage extends BasePage {

    constructor() {
        super('/showcase/angular/appointmentplanner/#/doctors');
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModal();
    }

    specialistCard(id) { 
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;
const Patient = require('../models/Patient');


//GET /api/patients
async function getAllPatients(req, res) {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
}

//GET /api/patients/:patientId
async function getPatientById(req, res) {
    const { patientId } = req.params;
    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





module.exports = {
    getAllPatients,
    getPatientById
}
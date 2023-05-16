const Patient = require('./app/models/Patient');


//GET /api/patients
async function getAllPatients(req, res) {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
}



module.exports = {
    getAllPatients
}


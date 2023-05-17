const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');


//defining the routes

router.get('/', patientController.getAllPatients);
// router.post('/', patientController.createPatient);
router.get('/:patientId', patientController.getPatientById);
// router.put('/:patientId', patientController.updatePatientById);
// router.delete('/:patientId', patientController.deletePatientById);

module.exports = router;
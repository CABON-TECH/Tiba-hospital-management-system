const mongoose = require('mongoose');


//defining schema
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female',
            'other'
        ],
        required: true
    },
    contact: {
        type: Number,
        required: true
    },

});

//defining the model
const Patient = mongoose.model('Patient', patientSchema);

//exporting the model
module.exports = Patient;
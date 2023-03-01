const express = require('express');

const { getAllPlans } = require('./controllers/plansController');
const { getDoctorSurgeries } = require('./controllers/surgeriesController');
const {
    getAllPatientsPlans,
    getAllPatientsSurgeries,
    createPatient,
    getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patientsController');


const app = express();
app.use(express.json());

app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/:id', getAllPlans);
app.post('/', createPatient);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.get('/surgeries/:name', getDoctorSurgeries);



module.exports = app;
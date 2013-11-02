var express = require('express'),
    wines = require('./routes/vaservices/vaservices');


var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser({keepExtensions:true, uploadDir:"uploads"}));
//app.engine('jade',require('jade').__express);




app.get('/myHealthPersonalInformationReport',wines.myHealthPersonalInformationReport);
app.get('/demographics',wines.demographics);
app.get('/downloadRequestSummary',wines.downloadRequestSummary);
app.get('/myHealthAccountSummary',wines.myHealthAccountSummary);
app.get('/healthCareProviders',wines.healthCareProviders);
app.get('/treatmentFacilities',wines.treatmentFacilities);
app.get('/healthInsurance',wines.healthInsurance);
app.get('/vaWellnessReminders',wines.vaWellnessReminders);
app.get('/vaAppointments',wines.vaAppointments);
app.get('/vaMedicationHistory',wines.vaMedicationHistory);
app.get('/medicationsAndSupplements',wines.medicationsAndSupplements);
app.get('/vaAllergies',wines.vaAllergies);
app.get('/allergiesAdverseReactions',wines.allergiesAdverseReactions);
app.get('/medicalEvents',wines.medicalEvents);
app.get('/immunizations',wines.immunizations);
app.get('/vaLaboratoryResults',wines.vaLaboratoryResults);
app.get('/labsAndTests',wines.labsAndTests);
app.get('/vitalsAndReadings',wines.vitalsAndReadings);
app.get('/familyHealthHistory',wines.familyHealthHistory);
app.get('/militaryHealthHistory',wines.militaryHealthHistory);
app.post('/register',wines.registration);
app.get('/redditList',wines.redditList);
app.get('/pills',wines.pills);
app.post('/loadFile',wines.loadFile);

app.listen(process.env.PORT || 8080);

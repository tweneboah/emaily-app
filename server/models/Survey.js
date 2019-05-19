const mongoose = require('mongoose');

const { Schema } = mongoose;

const surveySchema = new Schema ({
    title: String,
    subject: String,
    body: String,
    recipients: [String]
});

//Loading to mongoose library
//After creating you have make it available by requiring it inside the root file index.js

mongoose.model('surveys', surveySchema); 

 


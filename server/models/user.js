const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

//This describe how the individual properties will look like

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
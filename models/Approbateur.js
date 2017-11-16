var mongoose = require('mongoose');

var ApprobateurSchema = new mongoose.Schema({
    name   : String,
    email  : String,
    update : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Approbateur',ApprobateurSchema);

var mongoose = require('mongoose');

var FactureSchema = new mongoose.Schema({
    batch  : String,
    doco   : Number,
    dcto   : String,
    update : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Facture', FactureSchema);

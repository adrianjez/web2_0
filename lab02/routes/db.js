var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
    if(err) {
        console.log('błąd połączenia', err);
    } else {
        console.log('połączenie udane');
    }
});
// schemat dokumentu opisującego studenta w kolekcji test
var studentSchema = new mongoose.Schema({
    name: String,
    surname: String
});
// eksportowanie modelu student, który będziemy wykorzystywać do zbutowania API
module.exports = mongoose.model('student', studentSchema);
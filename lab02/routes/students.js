var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});


var student = require('./db');


/* GET students listing. */
router.get('/list', function(req, res, next) {
    student.find(function (err, students) {
        if (err) return next(err);
        res.json(students);
    });
});

router.get('/list/:id', function(req, res){

    student.findById(req.params.id, function (err, student){
       res.json(student)
    });
});

router.post('/add', urlencodedParser, function (req, res) {
    console.log("Payload: " + JSON.stringify(req.body));
    student.create(req.body, function (err, stud) {
        if (err) return next(err);
        res.json(stud);
    });
});

router.put('/:id', function (req, res) {
   student.findById(req.params.id, function (err, student){
       if (err) return next(err);
       student.name = req.body.name;
       student.surname = req.body.surname;
       student.save(function (err) {
           res.json({message: 'Student updated'});
       })
   });
});


module.exports = router;

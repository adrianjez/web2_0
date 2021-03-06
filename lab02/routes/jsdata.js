/**
 * Created by student on 08.03.17.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});


router.get('/', function(req, res, next) {
    var data = {
        imie: "Michał",
        nazwisko: "Nowak",
        data_ur: "1991-08-29",
        wyprawa: "Wyprawa na Świnicę",
        pocz: new Date("2016-08-29 06:45:00"),
        koniec: new Date("2016-08-29T20:35:18"),
        przyjaciele: [
            {imie: 'Jan', nazw: 'Kaczmarek', szczyt: false},
            {imie: 'Tomasz', nazw: 'Mazór', szczyt: true},
            {imie: 'Katarzyna', nazw: 'Zarówna', szczyt: true},
            {imie: 'Mariusz', nazw: 'Bartoszewicz', szczyt: true},
            {imie: 'Maria', nazw: 'Chwalba', szczyt: false}
        ],
        strony: [
            {nazwa: "Pierwsza strona", link: "strona2"},
            {nazwa: "Nasza wyprawa", link: "jsdata2"},
            {nazwa: "Świnica na Wiki", link: "https://pl.wikipedia.org/wiki/%C5%9Awinica"},
            {nazwa: "Trasa", link: "http://www.wiecznatulaczka.pl/swinica-przez-zawrat-2/"},
        ]
    };

    res.render('jsdata', data);
});


router.get('/szablon', function (req, res, next) {
    res.render('content')
});

module.exports = router;
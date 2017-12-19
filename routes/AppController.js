var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.get('/:id', function (req, res, next) {
    var message = req.params.id
    var result;
    var date;
    if(message && !isNaN(message)){
        date = new Date(parseInt(message)*1000);
        result = {unix:parseInt(message), natural:getDateString(date)};
    }

    if(message && isNaN(message)){
        date = new Date(message);
        if(!isNaN(Date.parse(date))){
            result = {unix:Date.UTC(date.getUTCFullYear(),date.getUTCMonth(), date.getUTCDate())/1000, natural:message};
        } else{
            result = {unix:null, natural:null};
        }
    }
    res.send(result);
});


function getDateString(date){
    var monthNum = date.getUTCMonth();
    var month;
    switch(monthNum){
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5: 
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    return month + ' ' + day + ', ' + year;
}

module.exports = router;
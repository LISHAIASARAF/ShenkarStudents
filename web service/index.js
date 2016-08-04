var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var funGrades = require('./funGrades');
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Orign,X-Requested-With, Content-Type,Accept");
    app.set('json spaces',4);
    res.set("Content-Type", "application/json");
    next();
});


// A function that gets all Shenkar students
app.get('/',function(req,res){
    funGrades.getAllShenkarStudents(function(data){
        res.send(data);
    });

});



//A function that gets student id as a parameter and returns his grade.
app.get('/getShenkarStudentGrade/:studentId',function(req,res){
    funGrades.getShenkarStudentGrade(req.params.studentId, function(data){
        res.send(data);
    });

});



app.get('/getshenkarStudentsExcellence/:studentGrade/:studentYear', function(req, res) {
    funGrades.getshenkarStudentsExcellence(req.params.studentGrade,req.params.studentYear, function(data){
        res.send(data);
    });

});


app.listen(port);
console.log("listening on port " + port);

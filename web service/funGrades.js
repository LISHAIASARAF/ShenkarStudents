var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://db_usr:db_pass@ds139705.mlab.com:39705/shenkar_students');

var students = require('./shenkarStudentSchema').Student;


mongoose.connect('mongodb://db_usr:db_pass@ds139645.mlab.com:39645/shenkar_students');
var conn = mongoose.connection;
conn.on('error', function(err) {
    console.log('connection error: ' + err);
})
conn.once('open', function() {
    console.log("connection achieved");
})

//create connection
// mongoose.connection.once('open', function(){
//     students.find({},function(err, studentsDB){
//         if(err) throw err;
//         console.log("check");
//         console.log(studentsDB);
//     });
// });

// A function that gets all Shenkar students
exports.getAllShenkarStudents = function(callback) {
    //console.log("getAllStudents");
    students.find({}).exec(function(err,data){
        if(err) callback(JSON.stringify({err:'this is error'}));
        else callback(JSON.stringify(data));
    })
}

//A function that gets student id as a parameter and returns his grade
exports.getShenkarStudentGrade = function(studentId,callback) {
   students.find().where("id",studentId).exec(function(err,data){
         if(err) callback(JSON.stringify({err:'this is error'}));
        else callback(JSON.stringify(data));
   })
}

// A function that get a grade as a parameter and returns a list of all the
// shenkar students with excellence grade that are equal or bigger
exports.getshenkarStudentsExcellence = function(studentGrade,studentYear,callback) {
    students.find().where("grade").gt(studentGrade).where("year",studentYear)
    .exec(function(err,data){
         if(err) callback(JSON.stringify({err:'this is error'}));
        else callback(JSON.stringify(data));

    })
}
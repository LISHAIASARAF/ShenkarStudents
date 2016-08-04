var mongoose = require('mongoose');
var schema = mongoose.Schema;

var shenkarStudentSchema = new schema({
        id: {type:Number},
        course: {type:String, index:1, required:true, unique:false},
        grade: {type:Number},
        year: {type:Number, required:true}, 
        age: {type:Number}
}, {collection: 'users'});

exports.Student = mongoose.model('users', shenkarStudentSchema);
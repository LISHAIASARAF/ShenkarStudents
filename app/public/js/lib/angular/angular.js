 var myApp = angular.module('myApp',[]);
 myApp.controller('studentData', function ($scope, $http) {
  
     $scope.data = [];
        
      

    $scope.getAllShenkarStudents  = function(){
        $http.get('http://shenkarstudents.herokuapp.com').success(function(data){
                $scope.data = data;
        });
     }; 
   })

     // getShenkarStudentGrade.run(function($http, $scope) {
     //    $http.get('http://shenkarstudents.herokuapp.com/getShenkarStudentGrade').then(function(response , studentId){
     //         var result ;
     //         angular.forEach(Id, function(studentId){
     //            if(studentId == Id)

     //                return result;

     //         }) ;  
     //    }); 

     // });

    //  getshenkarStudentsExcellence.run(function($http, $scope, $scope) {
    //     $http.get('http://shenkarstudents.herokuapp.com/getshenkarStudentsExcellence').then(function(response , studentGrade, studentYear){
    //         var resultArr[];
    //         angular.forEach(Grade,Year, function(studentGrade,studentYear){
    //             if(studentGrade >= Grade  && studentYear == Year)
    //                 resultArr.push(      );

    //         });    
    //     return resultArr;
    //     }); 


    // });

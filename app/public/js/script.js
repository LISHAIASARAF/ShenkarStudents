 var myApp = angular.module('myApp',[]);
 myApp.controller('studentsData', function ($scope, $http) {
  
     $scope.data = [];
        

    $scope.getAllShenkarStudents  = function(){
        $http.get('http://shenkarstudents.herokuapp.com').success(function(data){
                $scope.data = data;
        });
     }; 

     $scope.getShenkarStudentGrade = function(){
        $http.get('http://shenkarstudents.herokuapp.com/getShenkarStudentGrade/'+ $scope.studentId).success(function(data){
            $scope.data = data;
     })
 };

           $scope.getshenkarStudentsExcellence = function(){    
        $http.get('http://shenkarstudents.herokuapp.com/getshenkarStudentsExcellence/'+
         $scope.studentGrade +"/"+  $scope.studentYear).success(function(data){
            $scope.data = data;
     })
 };
   
   })
   

   

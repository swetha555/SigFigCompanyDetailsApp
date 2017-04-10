// create the module and name it
var sigfigApp = angular.module('sigfigApp', ['ngRoute']);

//defined a controller

sigfigApp.controller('companiesCtrl', function($scope, $http) {
    $scope.initFirst = function() {
        $http.get("/companies").success(function(response) {
            $scope.companies = response;
            $scope.selectedComp = $scope.companies[0];
        });
    };

//to get persons, api call

    $scope.getPersons = function(id) {
        $http.get("/companies/" + id +"/people").success(function(response) {
            $scope.personsListByCompany = response;
            $scope.showPersons = true;
        });
    };

//to create a company, post api call

    $scope.createNewCompany = function(name, age, address, phone) {

        var data = {
            name: $scope.name,
            address: $scope.address,
            revenue: $scope.revenue,
            phone: $scope.phone
        };
        $http.post("/companies", JSON.stringify(data)).success(function(response) {
            console.log('Company successfully created !!');
            $scope.initFirst();
        });
        $scope.name = '';//emptying the var
            $scope.address = '';
            $scope.revenue = '';
            $scope.phone = '';
    };

    //to create a person, post api call.

    $scope.createNewPerson = function(name, companyId, email) {
        var data = {
            "name": $scope.personName,
            "companyId": $scope.selectedComp._id,
            "email": $scope.personEmail
        };
        $http.post("/person", JSON.stringify(data)).success(function(response) {
            console.log("person created successfully");
        });
        $scope.personName = '';
        $scope.personEmail = '';
        $scope.personCompany = '';
    };
    $scope.displayPerson = "";

    $scope.openCompanyDetails = function(id, name) {
        $http.get("/companies/" + id).success(function(response) {
            $scope.displayCompany = response;
            $scope.displayPerson =  response;
            $scope.companyView = true; //hides rest and shows selected company details
        });
    }

    $scope.openPersonDetails = function(id, name) {
        $http.get("/companies/" + id + "/people").success(function(response) {
            $scope.displayPerson = response;
            $scope.displayPerson.name = name;
            $scope.personView = true; 
        });
    }



});

// sigfigApp.config(function($routeProvider, $locationProvider){
//       $routeProvider
//             .when('/', {
//                 templateUrl : 'testCode/index.html',
//                 controller  : 'companiesCtrl'
//             })
//             // route for the company detail page
//             .when('/index.html#companydetail', {
//                 templateUrl : '/partials/company.html',
//                 controller  : 'companiesCtrl'
//             })
//              // use the HTML5 History API
//         $locationProvider.html5Mode(true);

//     });

//   sigfigApp.controller('companiesCtrl', ['$scope', 'CompaniesFactory', '$location',
// function ($scope, CompaniesFactory, $location) {

//     // callback for ng-click 'createNewUser':
//     $scope.createNewCompany = function () {
//         CompaniesFactory.create($scope.company);
//         // $location.path('/user-list');
//         console.log($scope.company);
//     }
// }]);

//       services.factory('CompaniesFactory', function ($resource) {
//     return $resource('/companies', {}, {
//         query: { method: 'GET', isArray: true },
//         create: { method: 'POST' }
//     })
// });

// services.factory('PeopleFactory', function ($resource) {
//     return $resource('/companies/{companyId}/people', {}, {
//         show: { method: 'GET' },
//         create: { method: 'POST' }
//         // update: { method: 'PUT', params: {id: '@id'} },
//         // delete: { method: 'DELETE', params: {id: '@id'} }
//     })
// });



// sigfigApp.controller('companiesCtrl', function($scope, $http) {
//       $scope.CompaniesData = "";
//       var response = $http({
//             method:"GET",
//             url: "/companies"
//       });
//       response.success(
//             function(){
//                   $scope.companies = response;
//                   console.log($scope.companies);
//       });
// });

//     sigfigApp.controller('personsCtrl', function($scope, $http) {

//     $http.get("/companies/{companyId}/people").success(function(response){
//       $scope.companies = response;
//       $scope.selected = $scope.companies[0];
//       console.log($scope.companies);
// });
//     $http.post("/companies").success(function(response){
//       $scope.companies = response;

//       // console.log(response.companies[0].name);

// });
'use strict';

angular.module('nodecmsApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    function login(form) {
      Auth.login({
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then( function() {
        // Logged in, redirect to home
        $location.path('/admin');
      })
      .catch( function(err) {
        $scope.errors.other = err.message;
      });
    };

    function loginHandleSubmit(form){
      $scope.submitted = true;

      if(form.$valid) {
        login();
      }
    };

    function loginOauth(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.loginHandleSubmit = loginHandleSubmit;
    $scope.loginOauth = loginOauth;
  });

'use strict';

/**
 * @ngdoc function
 * @name cpCartApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the cpCartApp
 */
angular.module('cpCartApp')
  .controller('FormCtrl', function ($scope) {

    // store form data in object
    $scope.formData = {};

    $scope.processform = function() {
        alert('Create process function!')
    };
  });

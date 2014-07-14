'use strict';

/**
 * @ngdoc function
 * @name cpCartApp.controller:DropdownCtrl
 * @description
 * # DropdownCtrl
 * Controller of the cpCartApp
 */
angular.module('cpCartApp')
  .controller('DropdownCtrl', function ($scope) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    });

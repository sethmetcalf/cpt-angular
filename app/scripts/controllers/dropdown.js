'use strict';

/**
 * @ngdoc function
 * @name cpCartApp.controller:DropdownCtrl
 * @description
 * # DropdownCtrl
 * Controller of the cpCartApp
 */
angular.module('cpCartApp')
  .controller('DropdownCtrl', ['$scope', 'States', function ($scope, States) {
        $scope.states = data;
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
    }
])

'use strict';

/**
 * @ngdoc function
 * @name cpCartApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the cpCartApp
 */
angular.module('cpCartApp')
  .controller('FormCtrl', ['$scope', function ($scope) {
    console.log("States.data");

    var states = [{
        id: "1",
        name: "USA",
        value: "Select State",
        items: [
            {id: "AL", name: "Alabama"},
            {id: "AK", name: "Alaska"},
            {id: "AZ", name: "Arizona"},
            {id: "AR", name: "Arkansas"},
            {id: "CA", name: "California"},
            {id: "CO", name: "Colorado"},
            {id: "CT", name: "Connecticut"},
            {id: "DE", name: "Delaware"},
            {id: "DC", name: "District of Columbia"},
            {id: "FL", name: "Florida"},
            {id: "GA", name: "Georgia"},
            {id: "HI", name: "Hawaii"},
            {id: "ID", name: "Idaho"},
            {id: "IL", name: "Illinois"},
            {id: "IN", name: "Indiana"},
            {id: "IA", name: "Iowa"},
            {id: "KS", name: "Kansas"},
            {id: "KY", name: "Kentucky"},
            {id: "LA", name: "Louisiana"},
            {id: "ME", name: "Maine"},
            {id: "MD", name: "Maryland"},
            {id: "MA", name: "Massachusetts"},
            {id: "MI", name: "Michigan"},
            {id: "MN", name: "Minnesota"},
            {id: "MS", name: "Mississippi"},
            {id: "MO", name: "Missouri"},
            {id: "MT", name: "Montana"},
            {id: "NE", name: "Nebraska"},
            {id: "NV", name: "Nevada"},
            {id: "NH", name: "New Hampshire"},
            {id: "NJ", name: "New Jersey"},
            {id: "NM", name: "New Mexico"},
            {id: "NY", name: "New York"},
            {id: "NC", name: "North Carolina"},
            {id: "ND", name: "North Dakota"},
            {id: "OH", name: "Ohio"},
            {id: "OK", name: "Oklahoma"},
            {id: "OR", name: "Oregon"},
            {id: "PA", name: "Pennsylvania"},
            {id: "RI", name: "Rhode Island"},
            {id: "SC", name: "South Carolina"},
            {id: "SD", name: "South Dakota"},
            {id: "TN", name: "Tennessee"},
            {id: "TX", name: "Texas"},
            {id: "UT", name: "Utah"},
            {id: "VT", name: "Vermont"},
            {id: "VA", name: "Virginia"},
            {id: "WA", name: "Washington"},
            {id: "WV", name: "West Virginia"},
            {id: "WI", name: "Wisconsin"},
            {id: "WY", name: "Wyoming"}
        ]},

       {id: "2",
        name: "Canada",
        value: "Select Province",
        items: [
            {id: "AB", name: "Alberta"},
            {id: "BC", name: "British Columbia"},
            {id: "MB", name: "Manitoba"},
            {id: "NB", name: "New Brunswick"},
            {id: "NL", name: "Newfoundland and Labrador"},
            {id: "NS", name: "Nova Scotia"},
            {id: "ON", name: "Ontario"},
            {id: "PE", name: "Prince Edward Island"},
            {id: "QC", name: "Quebec"},
            {id: "SK", name: "Saskatchewan"},
            {id: "NT", name: "Northwest Territories"},
            {id: "NU", name: "Nunavut"},
            {id: "YT", name: "Yukon"}
        ]}
    ];

    $scope.states = states;
        console.log(states);
    $scope.currentState = states[0];
        console.log(states[0])
    $scope.$watch('currentState', function(value, oldValue){
        $scope.currentItem = value.items[0];
        console.log(value.items[0]);
    });

//    var paymentMethod = [
//        {id: "CC", name: "Credit/Debit Card"},
//        {id: "ACH", name: "ACH / E-Check"}
//    ];

    var paymentMethod = [
        "Credit/Debit Card",
        "ACH / E-Check"
    ];
        $scope.paymentMethod = paymentMethod;
        $scope.type = paymentMethod[0];


        $scope.processform = function() {
    };
  }])

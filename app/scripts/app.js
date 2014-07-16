'use strict';

/**
 * @ngdoc overview
 * @name cpCartApp
 * @description
 * # cpCartApp
 *
 * Main module of the application.
 */
angular
  .module('cpCartApp', [
    'ngSanitize',
    'ui.bootstrap',
    'ui.router'
  ])

.config(function($stateProvider, $urlRouterProvider) {
        console.log("routerprovider")
        $stateProvider

            // main view of shopping cart
            .state('form', {
                url: '/form',
                templateUrl: 'views/form.html',
                controller: 'FormCtrl'
            })

            // url will be (/form/products.html)
            .state('form.products', {
                url: '/products',
                templateUrl: 'views/form-products.html'
            })

            // url will be (/form/checkout.html)
            .state('form.checkout', {
                url: '/checkout',
                templateUrl: 'views/form-checkout.html'
            })

            // url will be (/form/confirm.html)
            .state('form.confirm', {
                url: '/confirm',
                templateUrl: 'views/form-confirm.html'
            });

        $urlRouterProvider.otherwise('/form/products');
    });

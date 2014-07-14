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

        $stateProvider

            // main view of shopping cart
            .state('form', {
                url: '/form',
                templateURL: 'form.html',
                controller: 'formController'
            })

            // url will be (/form/products.html)
            .state('form.products', {
                url: '/products',
                templateUrl: 'form-products.html'
            })

            // url will be (/form/checkout.html)
            .state('form.checkout', {
                url: '/checkout',
                templateUrl: 'form-checkout.html'
            })

            // url will be (/form/confirm.html)
            .state('form.confirm', {
                url: '/confirm',
                templateUrl: 'form-confirm.html'
            });

        $urlRouterProvider.otherwise('/form/products');
    })

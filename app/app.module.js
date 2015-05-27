'use strict';

angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.pages.hello'
])
    .config(function($stateProvider) {
        $stateProvider.state('app', {
            url: '',
            abstract: true
        });
    });
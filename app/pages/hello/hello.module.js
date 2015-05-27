angular.module('app.pages.hello', ['app.greeter'])
    .config(function ($stateProvider) {
        $stateProvider.state('app.hello', {
            url: '',
            views: {
                'main@': {
                    controller: 'HelloCtrl as vm',
                    templateUrl: '/pages/hello/hello.html'
                }
            }
        });
    });
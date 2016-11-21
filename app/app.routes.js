angular.module('pogoApp').config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/calculator/', {
      templateUrl: 'app/components/calc/calc.view.html'
    })
    .otherwise({ redirectTo: '/calculator'});
});

angular.module('pogoApp').config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('pogoApp');
});

'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', function($scope, FlowersEndpoint) {
  $scope.data = {};
  $scope.data.flowers = FlowersEndpoint.collections[0].skus;
  $scope.data.shipping = FlowersEndpoint.collections[0].shipping_options;
}]);

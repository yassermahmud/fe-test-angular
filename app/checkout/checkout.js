'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'Checkout'
  });
}])

.controller('Checkout', ['$scope', 'FlowersEndpoint', '$anchorScroll', function($scope, FlowersEndpoint, $anchorScroll) {
  $scope.data = {};
  $scope.data.flowers = FlowersEndpoint.collections[0].skus;
  $scope.data.shipping = FlowersEndpoint.collections[0].shipping_options;
  
  $scope.today = new Date();
  
  $scope.selectFlower = function(selectedFlower) {
    $scope.data.selectedFlower = selectedFlower;
    $scope.data.order = {};
    $scope.data.order.pricingObj = {};
    $anchorScroll('pricing');
  }

  $scope.calculatePrice = function() {
    if($scope.data.order.deliveryDate && $scope.data.order.pricingObj.quantity && $scope.data.order.pricingObj.amount && $scope.data.order.shipmentPrice) {
      $scope.data.order.total = parseFloat($scope.data.order.pricingObj.amount) + parseFloat($scope.data.order.shipmentPrice) * parseInt($scope.data.order.pricingObj.quantity);
    }
  }
}]);

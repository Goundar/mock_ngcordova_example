angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $cordovaNetwork) {
  $scope.message = "";
  if($cordovaNetwork.isOnline()){
    $scope.message = "Online";
  }
  else{
    $scope.message = "Offline";
  }
});

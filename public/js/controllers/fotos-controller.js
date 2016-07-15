angular.module('alurapic')
.controller('FotosController', function($scope, $http) {
	$scope.fotos = [];
	// pega fotos do servidor
	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	}).error(function(error) {
		console.log(error);
	})

});
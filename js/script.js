var clima= angular.module("clima",[])
clima.controller("clim",function($scope,$rootScope,$http){
	$scope.climaB= [];{ 
		$http({
			method:"GET",
			url:"http://maps.openweathermap.org/maps/2.0/weather/TA2/{30}/{-90.25}/{15.5}"
		}).then(function callbackSuccess(x){
			console.log(x)
			$scope.climaB.push(x);
		})
	}
});
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

	$stateProvider
        .state('home', {
			url: "/",
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        })
		.state('page1', {
            url: "/page1",
			templateUrl: "partials/page1.html",
			controller: "Page1Ctrl"
		})
		.state('page2', {
            url: "/page2",
			templateUrl: "partials/page2.html",
			controller: "Page2Ctrl"
		})
});
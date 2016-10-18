'use strict';

// Setting up routes
angular.module('media').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Routing for general settings page
		$stateProvider.
		state('root.changeMedia', {
			url: 'settings',
			views: {
				'content@': {
					templateUrl: 'modules/media/views/change-media.client.view.html',
					controller: 'ChangeMediaController as settingsCtrl'
				},
				'basic-media@root.changeMedia': {
					templateUrl: 'modules/media/views/partials/basic-media.partial.html'
				}
			}
		});
	}
]);

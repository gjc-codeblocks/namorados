app.directive('cafe', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/directive/cafe/cafe.html',
		require: '^parent',
	};
});
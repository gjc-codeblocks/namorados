app.controller('restauranteController', ['$scope', function($scope) {
		
	$scope.restaurante = [
	    {nome: 'Bartolomeu', categoria: 'Restaurantes',},
	    {nome: "Cateretê", categoria: 'Restaurantes'},
	    {nome: 'Coco Bambu', categoria: 'Restaurantes'},
	    {nome: 'Contemporâne', categoria: 'Restaurantes'},
	    {nome: 'Doróró', categoria: 'Restaurantes', info: true},
	    {nome: 'Himitsu', categoria: 'Restaurantes'},	    
	    {nome: "Kabanas", categoria: 'Restaurantes'},
	    {nome: "Kanpai Blue", categoria: 'Restaurantes'},
	    {nome: 'La Eskina Taqueria', categoria: 'Restaurantes'},
	    {nome: "L'etoile D'argente", categoria: 'Restaurantes'},
	    
	    {nome: 'Lifebox Hamburgeria', categoria: 'Restaurantes'},
	    {nome: 'Los Compadres', categoria: 'Restaurantes'},
	    {nome: 'Mousse Cake', categoria: 'Restaurantes'},
	    {nome: 'P di Pizza', categoria: 'Restaurantes'},
	    {nome: 'Parrilla Restaurante', categoria: 'Restaurantes'},
	    {nome: 'Piquiras Buena Vista', categoria: 'Restaurantes'},	    
	    {nome: 'Piquiras Flamboyant', categoria: 'Restaurantes'},
	    {nome: 'Piquiras Bougainvile', categoria: 'Restaurantes'},
	    {nome: 'Republica da Saúde', categoria: 'Restaurantes', info: true},
	    {nome: 'QG Jeitinho Caseiro', categoria: 'Restaurantes'},	    
	];
	
	$scope.selecionaItem = function(index){
		
		if($scope.restaurante[index].selecionado){
			$scope.desmarcar(index);
		}else{
			
			$scope.$parent.qntdSelecionada++;
			
			$scope.restaurante[index].selecionado = true;
			$scope.$parent.masterArray.push($scope.restaurante[index]);
		}
		calcPorcentagem();				
	};
	
	$scope.desmarcar = function(index){
		
		$scope.$parent.qntdSelecionada = $scope.$parent.qntdSelecionada - 1;
		
		var oldArray = [];				
		calcPorcentagem();		
		angular.forEach($scope.$parent.masterArray, function(value, key) {
			if($scope.$parent.masterArray[key].nome != $scope.restaurante[index].nome){
				oldArray.push($scope.$parent.masterArray[key]);
			}
		});		
		$scope.$parent.masterArray = oldArray;		
		$scope.restaurante[index].selecionado = false;		
	}
	
	
	function calcPorcentagem(){
		var qntd = 0;
		var sele = 0;
		
		
		angular.forEach($scope.restaurante, function(value, key) {
			 if($scope.restaurante[key].selecionado){
				 sele++;
			 }
			 $scope.$parent.restauranteVisitados = sele;
			 qntd++;
			 
		});
		
		$scope.$parent.calculo[2].valor = ((sele/qntd)*100)*0.20;
	}
	
	$scope.showCard = function(cond){
		$scope.$parent.showCard = cond;
	}
	
}]);
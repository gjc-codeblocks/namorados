app.controller('cafeController', ['$scope', function($scope) {
		
	$scope.cafe = [
	    {nome: 'Atêlie do Grão', categoria: 'Cafés',},
	    {nome: 'Bandeira Café', categoria: 'Cafés'},
	    {nome: 'Biscoito J. Pereira', categoria: 'Cafés'},
	    {nome: 'Café Cariño', categoria: 'Cafés', info: true},
	    {nome: 'Café Coreto', categoria: 'Cafés'},
	    {nome: 'Café do Mundo', categoria: 'Cafés'},	    
	    {nome: "Cafécolate", categoria: 'Cafés'},
	    {nome: "Cappuccino Paris", categoria: 'Cafés'},
	    {nome: 'Della Panificadora', categoria: 'Cafés'},	    
	    {nome: 'Divina Quitanda', categoria: 'Cafés'},
	    
	    {nome: 'Doce Café', categoria: 'Cafés',},
	    {nome: "Fran's Café", categoria: 'Cafés'},
	    {nome: 'Moinho Fino', categoria: 'Cafés'},
	    {nome: 'Ópera Brownieria', categoria: 'Cafés'},
	    {nome: 'Padoca - Casa de Pães', categoria: 'Cafés'},    
	    {nome: 'Panificadora Maná', categoria: 'Cafés'},
	    {nome: 'Panificadora Moreira', categoria: 'Cafés'},
	    {nome: 'Pão & Companhia', categoria: 'Cafés'},
	    {nome: 'Poema Gourmet', categoria: 'Cafés'},
	    {nome: 'Scada Café', categoria: 'Cafés', info: true},
	];
	
	$scope.selecionaItem = function(index){
		
		if($scope.cafe[index].selecionado){
			$scope.desmarcar(index);
		}else{
			
			$scope.$parent.qntdSelecionada++;
			
			$scope.cafe[index].selecionado = true;
			$scope.$parent.masterArray.push($scope.cafe[index]);
		}
		calcPorcentagem();				
	};
	
	$scope.desmarcar = function(index){
		
		$scope.$parent.qntdSelecionada = $scope.$parent.qntdSelecionada - 1;
		
		var oldArray = [];				
		calcPorcentagem();		
		angular.forEach($scope.$parent.masterArray, function(value, key) {
			if($scope.$parent.masterArray[key].nome != $scope.cafe[index].nome){
				oldArray.push($scope.$parent.masterArray[key]);
			}
		});		
		$scope.$parent.masterArray = oldArray;		
		$scope.cafe[index].selecionado = false;		
	}
	
	
	function calcPorcentagem(){
		var qntd = 0;
		var sele = 0;
		
		
		angular.forEach($scope.cafe, function(value, key) {
			 if($scope.cafe[key].selecionado){
				 sele++;
			 }
			 
			 $scope.$parent.cafeVisitados = sele;
			 qntd++;
		});
				
		$scope.$parent.calculo[0].valor = ((sele/qntd)*100)*0.20;
	}
	
	$scope.showCard = function(cond){
		$scope.$parent.showCard = cond;
	}
	
}]);
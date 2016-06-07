app.controller('cafeController', ['$scope', function($scope) {
		
	$scope.cafe = [
	    {nome: 'At�lie do Gr�o', categoria: 'Caf�s',},
	    {nome: 'Bandeira Caf�', categoria: 'Caf�s'},
	    {nome: 'Biscoito J. Pereira', categoria: 'Caf�s'},
	    {nome: 'Caf� Cari�o', categoria: 'Caf�s', info: true},
	    {nome: 'Caf� Coreto', categoria: 'Caf�s'},
	    {nome: 'Caf� do Mundo', categoria: 'Caf�s'},	    
	    {nome: "Caf�colate", categoria: 'Caf�s'},
	    {nome: "Cappuccino Paris", categoria: 'Caf�s'},
	    {nome: 'Della Panificadora', categoria: 'Caf�s'},	    
	    {nome: 'Divina Quitanda', categoria: 'Caf�s'},
	    
	    {nome: 'Doce Caf�', categoria: 'Caf�s',},
	    {nome: "Fran's Caf�", categoria: 'Caf�s'},
	    {nome: 'Moinho Fino', categoria: 'Caf�s'},
	    {nome: '�pera Brownieria', categoria: 'Caf�s'},
	    {nome: 'Padoca - Casa de P�es', categoria: 'Caf�s'},    
	    {nome: 'Panificadora Man�', categoria: 'Caf�s'},
	    {nome: 'Panificadora Moreira', categoria: 'Caf�s'},
	    {nome: 'P�o & Companhia', categoria: 'Caf�s'},
	    {nome: 'Poema Gourmet', categoria: 'Caf�s'},
	    {nome: 'Scada Caf�', categoria: 'Caf�s', info: true},
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
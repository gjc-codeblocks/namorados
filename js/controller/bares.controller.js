app.controller('baresController', ['$scope', function($scope) {
		
	$scope.bares = [
	    {nome: 'Arvoredo Cozinha de Bar', categoria: 'Bares'},
	    {nome: "Bahrem", categoria: 'Bares', info: true},
	    {nome: 'Bar Aerocaldo', categoria: 'Bares'},
	    {nome: 'Bar Devassa', categoria: 'Bares'},
	    {nome: 'Bar do Gordo', categoria: 'Bares', info: true},
	    {nome: 'Bar do Marquim', categoria: 'Bares'},	    
	    {nome: "Belga Chopp", categoria: 'Bares'},
	    {nome: "Boteco Posto 15", categoria: 'Bares'},
	    {nome: 'Carne de Sol 1008', categoria: 'Bares'},
	    {nome: 'Celsin & Cia', categoria: 'Bares'},	 
	    
	    {nome: 'Colombus Restaurante', categoria: 'Bares'},
	    {nome: 'Conversa de Boteco', categoria: 'Bares'},
	    {nome: 'Glória Bar', categoria: 'Bares'},
	    {nome: 'Jequitibá Bar', categoria: 'Bares', info: true},
	    {nome: 'Merkadão Paulista', categoria: 'Bares'},
	    {nome: 'Mestre Cervejeiro', categoria: 'Bares'},	    
	    {nome: 'Paim Grill', categoria: 'Bares'},
	    {nome: 'Rocket 07 Pub & Restaurante', categoria: 'Bares'},
	    {nome: 'Saccaria', categoria: 'Bares'},
	    {nome: 'Studio',categoria: 'Bares'},	    
	];
	
	$scope.selecionaItem = function(index){
				
		if($scope.bares[index].selecionado){
			$scope.desmarcar(index);
		}else{
			
			$scope.$parent.qntdSelecionada++;
			
			$scope.bares[index].selecionado = true;
			$scope.$parent.masterArray.push($scope.bares[index]);
		}
		calcPorcentagem();				
	};
	
	$scope.desmarcar = function(index){
		
		$scope.$parent.qntdSelecionada = $scope.$parent.qntdSelecionada - 1;
		
		var oldArray = [];				
		calcPorcentagem();		
		angular.forEach($scope.$parent.masterArray, function(value, key) {
			if($scope.$parent.masterArray[key].nome != $scope.bares[index].nome){
				oldArray.push($scope.$parent.masterArray[key]);
			}
		});		
		$scope.$parent.masterArray = oldArray;		
		$scope.bares[index].selecionado = false;		
	}
	
	
	function calcPorcentagem(){
		var qntd = 0;
		var sele = 0;
		
		
		angular.forEach($scope.bares, function(value, key) {
			 if($scope.bares[key].selecionado){
				 sele++;				 
			 }
			 
			 $scope.$parent.barVisitados = sele;
			 qntd++;
		});
		
		$scope.$parent.calculo[3].valor = ((sele/qntd)*100)*0.20;
	}
	
	$scope.showCard = function(cond){
		$scope.$parent.showCard = cond;
	}
	
}]);
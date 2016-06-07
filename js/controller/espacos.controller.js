app.controller('espacosController', ['$scope', function($scope) {
		
	$scope.espacos = [
	    {nome: 'Bacião do Setor Sul', categoria: 'Espaços e Cultura'},
	    {nome: 'Bosque dos Buritis', categoria: 'Espaços e Cultura'},
	    {nome: 'Campininha das Flores', categoria: 'Espaços e Cultura'},
	    {nome: 'Centro Cultural Oscar Niemeyer', categoria: 'Espaços e Cultura'},
	    {nome: 'Cine Cultura', categoria: 'Espaços e Cultura'},
	    {nome: 'Madre Esperança Garrido', categoria: 'Espaços e Cultura'},	    
	    {nome: "Martim Cererê", categoria: 'Espaços e Cultura'},
	    {nome: "Parque Areião", categoria: 'Espaços e Cultura'},
	    {nome: 'Parque Cascavel', categoria: 'Espaços e Cultura'},
	    {nome: 'Parque Flamboyant', categoria: 'Espaços e Cultura'},
	    
	    {nome: 'Parque Jardim Botanico', categoria: 'Espaços e Cultura'},
	    {nome: 'Parque Lago das Rosas', categoria: 'Espaços e Cultura'},
	    {nome: 'Parque Macambira Anicuns', categoria: 'Espaços e Cultura'},
	    {nome: 'Parque Vaca Brava', categoria: 'Espaços e Cultura'},
	    {nome: 'Praça Cívica', categoria: 'Espaços e Cultura'},
	    {nome: 'Sesi Santa Genoveva', categoria: 'Espaços e Cultura'},	    
	    {nome: 'Teatro Goiânia', categoria: 'Espaços e Cultura'},
	    {nome: 'Teatro Rio Vermelho', categoria: 'Espaços e Cultura'},
	    {nome: 'Teatro Sesi Centro', categoria: 'Espaços e Cultura'},
	    {nome: 'Vila Cultural Cora Coralina', categoria: 'Espaços e Cultura'},	    
	];
	
	$scope.selecionaItem = function(index){
		
		if($scope.espacos[index].selecionado){
			$scope.desmarcar(index);
		}else{
			
			$scope.$parent.qntdSelecionada++;
			
			$scope.espacos[index].selecionado = true;
			$scope.$parent.masterArray.push($scope.espacos[index]);
		}
		calcPorcentagem();				
	};
	
	$scope.desmarcar = function(index){
		
		$scope.$parent.qntdSelecionada = $scope.$parent.qntdSelecionada - 1;
		
		var oldArray = [];				
		calcPorcentagem();		
		angular.forEach($scope.$parent.masterArray, function(value, key) {
			if($scope.$parent.masterArray[key].nome != $scope.espacos[index].nome){
				oldArray.push($scope.$parent.masterArray[key]);
			}
		});		
		$scope.$parent.masterArray = oldArray;		
		$scope.espacos[index].selecionado = false;		
	}
	
	
	function calcPorcentagem(){
		var qntd = 0;
		var sele = 0;
		
		
		angular.forEach($scope.espacos, function(value, key) {
			 if($scope.espacos[key].selecionado){
				 sele++;
			 }			
			 
			 $scope.$parent.espacosVisitados = sele;
			 qntd++;
		});
		
		$scope.$parent.calculo[1].valor = ((sele/qntd)*100)*0.20;
	}
	
	$scope.showCard = function(cond){
		$scope.$parent.showCard = cond;
	}
	
}]);
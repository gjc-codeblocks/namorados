app.controller('espacosController', ['$scope', function($scope) {
		
	$scope.espacos = [
	    {nome: 'Baci�o do Setor Sul', categoria: 'Espa�os e Cultura'},
	    {nome: 'Bosque dos Buritis', categoria: 'Espa�os e Cultura'},
	    {nome: 'Campininha das Flores', categoria: 'Espa�os e Cultura'},
	    {nome: 'Centro Cultural Oscar Niemeyer', categoria: 'Espa�os e Cultura'},
	    {nome: 'Cine Cultura', categoria: 'Espa�os e Cultura'},
	    {nome: 'Madre Esperan�a Garrido', categoria: 'Espa�os e Cultura'},	    
	    {nome: "Martim Cerer�", categoria: 'Espa�os e Cultura'},
	    {nome: "Parque Arei�o", categoria: 'Espa�os e Cultura'},
	    {nome: 'Parque Cascavel', categoria: 'Espa�os e Cultura'},
	    {nome: 'Parque Flamboyant', categoria: 'Espa�os e Cultura'},
	    
	    {nome: 'Parque Jardim Botanico', categoria: 'Espa�os e Cultura'},
	    {nome: 'Parque Lago das Rosas', categoria: 'Espa�os e Cultura'},
	    {nome: 'Parque Macambira Anicuns', categoria: 'Espa�os e Cultura'},
	    {nome: 'Parque Vaca Brava', categoria: 'Espa�os e Cultura'},
	    {nome: 'Pra�a C�vica', categoria: 'Espa�os e Cultura'},
	    {nome: 'Sesi Santa Genoveva', categoria: 'Espa�os e Cultura'},	    
	    {nome: 'Teatro Goi�nia', categoria: 'Espa�os e Cultura'},
	    {nome: 'Teatro Rio Vermelho', categoria: 'Espa�os e Cultura'},
	    {nome: 'Teatro Sesi Centro', categoria: 'Espa�os e Cultura'},
	    {nome: 'Vila Cultural Cora Coralina', categoria: 'Espa�os e Cultura'},	    
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
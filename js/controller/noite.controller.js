app.controller('noiteController', ['$scope', function($scope) {
		
	$scope.noite = [
	    {nome: 'Alabama', categoria: 'Noite'},
	    {nome: 'Boate Villa Mix', categoria: 'Noite'},
	    {nome: 'Bolshoi Pub', categoria: 'Noite'},
	    {nome: 'Diablo Pub', categoria: 'Noite', info: true},
	    {nome: 'El Club', categoria: 'Noite'},
	    {nome: 'Metrópolis CLub', categoria: 'Noite'},	    
	    {nome: "Music", categoria: 'Noite'},
	    {nome: "Roxy Pub", categoria: 'Noite'},
	    {nome: 'Santa Fé Hall', categoria: 'Noite'},
	    {nome: 'The Pub', categoria: 'Noite'},
	    
	    {nome: 'Valley Pub', categoria: 'Noite'},
	    {nome: 'Woods Goiânia', categoria: 'Noite'},
	    {nome: 'Retrô Food & Drinks', categoria: 'Noite'},
	    {nome: 'Café Nice', categoria: 'Noite'},
	    {nome: 'Velvet 36', categoria: 'Noite'},
	    {nome: 'Tabu Cervejas Especiais', categoria: 'Noite'},	    
	    {nome: 'Monch Bier Pub', categoria: 'Noite'},
	    {nome: 'Belgian Dash', categoria: 'Noite'},
	    {nome: 'Bambo e Chill Out', categoria: 'Noite'},
	    {nome: 'Moony Food Drinks & Style', categoria: 'Noite'},	    
	];
	
	$scope.selecionaItem = function(index){
		
		if($scope.noite[index].selecionado){
			$scope.desmarcar(index);
		}else{
			
			$scope.$parent.qntdSelecionada++;
			
			$scope.noite[index].selecionado = true;
			$scope.$parent.masterArray.push($scope.noite[index]);
		}
		calcPorcentagem();				
	};
	
	$scope.desmarcar = function(index){
		
		$scope.$parent.qntdSelecionada = $scope.$parent.qntdSelecionada - 1;
		
		var oldArray = [];				
		calcPorcentagem();		
		angular.forEach($scope.$parent.masterArray, function(value, key) {
			if($scope.$parent.masterArray[key].nome != $scope.noite[index].nome){
				oldArray.push($scope.$parent.masterArray[key]);
			}
		});		
		$scope.$parent.masterArray = oldArray;		
		$scope.noite[index].selecionado = false;		
	}
	
	
	function calcPorcentagem(){
		var qntd = 0;
		var sele = 0;
		
		
		angular.forEach($scope.noite, function(value, key) {
			 if($scope.noite[key].selecionado){
				 sele++;
			 }
			 $scope.$parent.noiteVisitados = sele;
			 qntd++;
		});
		
		$scope.$parent.calculo[4].valor = ((sele/qntd)*100)*0.20;
	}
	
	$scope.showCard = function(cond){
		$scope.$parent.showCard = cond;
	}
	
}]);
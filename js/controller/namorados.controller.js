app.controller('namoradosController', ['$scope','$location','$anchorScroll', function($scope, $location, $anchorScroll) {
	
	$scope.masterArray = [];
	
	$scope.fraseFacebook = "";
	$scope.resultado = "";
	$scope.descricaoFacebook = "";
	$scope.imagemFB = "";
	$scope.whitespace = ' ';
	
	$scope.infoCardArray = [
		{
		    titulo: 'Restaurante Doror�',
		    imagem: 'view/img/locais/dororo.jpg',
		    descricao: 'Com a proposta de servir a culin�ria popular brasileira com uma releitura contempor�nea, o Doror� tem seu card�pio assinado pelo Chef Ian Baiocchi e oferece hamb�rgueres, past�is, tapiocas e sobremesas. Criado para ser um ponto de encontro entre amigos e fam�lia, o restaurante possui decora��o formada por p�steres lambe-lambe, pratos esmaltados e caixotes de feira, oferecendo uma experi�ncia gastron�mica aliada ao design',
		    facebook: 'https://www.facebook.com/dororobrasil/',
		    instagram: 'https://www.instagram.com/dororobrasil/',
		    local: 'https://www.google.com.br/maps/place/Doror%C3%B3/@-16.7139501,-49.2032951,17z/data=!3m1!4b1!4m5!3m4!1s0x935eefdf329c961f:0x6fac35a53b96f194!8m2!3d-16.7139552!4d-49.2011064',
		    site: 'http://www.dororo.com.br/',
		    classe: 'dororo',
		},
		{
		    titulo: 'Diablo Pub',
		    imagem: 'view/img/locais/diablo.jpg',
		    descricao: 'Conhecida como a casa mais rock da cidade, a Diablo Pub proporciona a seu p�blico a jun��o do alternativo e underground, com a qualidade e divers�o. Fundada em 2012 pelos empres�rios Cristiano Prado e Marlos Miyagi (Jap�o) para ser um diferencial na cena alternativa de Goi�nia, o espa�o construiu sua identidade e recebe semanalmente um p�blico fiel. Hoje � um dos pontos de encontro mais conhecidos da galera, frequentado por p�blicos distintos que se distribuem de acordo com sua programa��o',
		    facebook: 'https://www.facebook.com/DiabloPub/?fref=ts',
		    instagram: 'https://www.instagram.com/diablopub/',
		    local: 'https://www.google.com.br/maps/place/DIABLO/@-16.6837901,-49.2498485,17z/data=!3m1!4b1!4m5!3m4!1s0x935ef17721392519:0xe2f1d0b530ff9eac!8m2!3d-16.6837953!4d-49.2476598',
		    site: 'http://www.diablopub.com.br/',
		    classe: 'diablo',
		},
		{
		    titulo: 'Scada Caf�',
		    imagem: 'view/img/locais/scada.JPG',
		    descricao: 'O Scada � ideal para um lanche r�pido, uma reuni�o de neg�cios ou um encontro com amigos. O ambiente � aconchegante e o card�pio diversificado, tendo como carro chefe os caf�s especiais do sul de minas, e servidos nas vers�es: Espresso, Coado e Prensa Francesa.',
		    facebook: 'https://www.facebook.com/franquiascadacafe/',
		    instagram: 'https://www.instagram.com/scadacafe/',
		    local: 'https://https://www.google.com.br/maps/place/Scada+Caf%C3%A9/@-16.7078787,-49.2750603,17z/data=!3m2!4b1!5s0x935ef1254693cda9:0x1e314697df34cf00!4m5!3m4!1s0x935ef166f5b0aafb:0xb64e1643f331f3f9!8m2!3d-16.7078838!4d-49.2728716',
		    site: 'http://www.scadacafe.com.br/',
		    classe: 'scada',
		},
		{
		    titulo: 'Rep�blica da Sa�de',
		    imagem: 'view/img/locais/republicadasaude.jpg',
		    descricao: 'O Restaurante Rep�blica da Sa�de est� preparando uma noite mais que especial para o dia dos namorados. Para que a noite seja ainda mais inesquec�vel o card�pio ser� exclusivo contando com elementos afrodis�acos e ingredientes que ir�o harmonizar sabor e paix�o! Ideal pra quem procura um lugar mais intimista, aconchegante e rom�ntico.',
		    facebook: 'https://www.facebook.com/republicadasaude/?fref=ts',
		    instagram: 'https://www.instagram.com/repsaude/',
		    local: 'https://www.google.com.br/maps/place/Rep%C3%BAblica+da+Sa%C3%BAde/@-16.6952977,-49.2599862,17z/data=!3m1!4b1!4m5!3m4!1s0x935ef3e779c7c525:0xe7bb67a33c588f2b!8m2!3d-16.6953028!4d-49.2577975',
		    site: 'http://www.republicadasaude.com.br/',
		    classe: 'repdasaude',
		},
		{
		    titulo: 'Caf� Cari�o',
		    imagem: 'view/img/locais/cafecarino.png',
		    descricao: 'Fazer voc� se sentir bem. Essa � a promessa do Caf� Cari�o. Um bom momento � mesa, o prazer de uma boa companhia, ou uma leitura acompanhada de caf�, no Cari�o tudo isso fica ainda melhor. A decora��o retr� e charmosa e um atendimento pessoal e diferenciado, far�o voc� se sentir em casa. Aqui voc� encontra uma sele��o de caf�s especiais, carta de vinhos e cervejas especiais, e muitas comidinhas gostosas. Al�m disso, o Caf� Cari�o tamb�m tem sua dose de agito cultural, com exposi��es, workshops e muita m�sica. No Dia dos Namorados o Caf� Cari�o far� uma noite de comemora��o com jantar especial,  m�sica ao vivo com repert�rio rom�ntico e decora��o intimista. Um menu elaborado especialmente para essa noite, inclui entrada, prato principal, e sobremesa. Aproveite. Reservas feitas at� 08/06, ter�o desconto especial. Aproveite.',
		    facebook: 'https://www.facebook.com/graosespeciais/?fref=ts',
		    instagram: 'https://www.instagram.com/cafecarino/',
		    local: 'https://www.google.com.br/maps/place/Caf%C3%A9+Cari%C3%B1o+Cafeteria/@-16.6988084,-49.2584252,17z/data=!3m1!4b1!4m5!3m4!1s0x935ef11178041f7b:0xbe996f51ae754976!8m2!3d-16.6988135!4d-49.2562365',
		    site: 'http://www.cafecarino.com.br//',
		    classe: 'carino',
		},
		{
		    titulo: 'Jequitib� Bar',
		    imagem: 'view/img/locais/jequitiba.jpg',
		    descricao: 'Venha conferir nossas promo��es em um ambiente totalmente agrad�vel, temos tudo para te oferecer o melhor pre�o, o melhor atendimento. Reserve j� o seu lugar.',
		    facebook: 'https://www.facebook.com/JequitibaBar/?fref=ts',
		    instagram: 'https://www.instagram.com/jequitibarestaurante/',
		    local: 'https://www.google.com.br/maps/place/Jequitibar/@-19.9186746,-43.9344305,17z/data=!3m1!4b1!4m5!3m4!1s0xa699f0f2f87c8d:0x18e8a5cd84fd8c55!8m2!3d-19.9186797!4d-43.9322418',
		    site: 'http://restaurantejequitiba.com.br/',
		    classe: 'jequitiba',
		},
		{
		    titulo: 'Bahrem',
		    imagem: 'view/img/locais/bahrem.jpg',
		    descricao: 'Localizado no Setor Marista, �rea nobre que concentra os melhores bares e restaurantes da capital, o Bahrem Bar e Restaurante oferece aos seus clientes o melhor da cozinha tropical. Os m�veis r�sticos d�o um charme todo especial ao local, que � dividido em dois andares (um deles climatizado) e decorado com objetos antigos, v�rios quadros pintados com imagens de artistas, tvs e tel�o LCD. O resultado? Comida de restaurante com o clima descontra�do do boteco.',
		    facebook: 'https://www.facebook.com/bahremgoiania/',
		    instagram: 'https://www.instagram.com/bahremcervejaria/',
		    local: 'https://www.google.com.br/maps/place/Bahrem/@-16.6985322,-49.2658871,17z/data=!3m1!4b1!4m5!3m4!1s0x935ef11700000001:0xe91370f7a3efdd3!8m2!3d-16.6985373!4d-49.2636984',
		    site: 'http://www.bahrem.com/',
		    classe: 'bahrem',
		},
		{
		    titulo: 'Bar do Gordo',
		    imagem: 'view/img/locais/bardogordo.jpg',
		    descricao: 'Esperamos voc�s todos os dias a partir das 17 h com dobradinha de chopp de segunda a quarta feira. Os melhores petisco e panelinha da regi�o voc� encontra aqui e uma deliciosa feijoada no s�bado.',
		    facebook: 'https://www.facebook.com/BAR-Do-Gordo-306948472688808/?fref=ts',
		    instagram: 'https://www.instagram.com/bardogordogyn/',
		    local: 'https://www.google.com.br/maps/place/Bar+do+Gordo/@-16.7155183,-49.2405085,17z/data=!3m1!4b1!4m5!3m4!1s0x935ef056c0ed9bb3:0x2c95e483c2773110!8m2!3d-16.7155234!4d-49.2383198',
		    site: '',
		    classe: 'bargordo',
		},
	];
	
	$scope.showCard = false;
	$scope.showCompartilhar = false;
	$scope.showCompartilharMobile = false 
	$scope.footExpandido = false;
	
	$scope.qntdSelecionada = 0;
	
	$scope.infoCardActive = $scope.infoCardArray[0];
	
	
	$scope.fraseTipoCasal = "Casal Mocozado!";
	$scope.fraseDica = "�nimo! Casal que sai junto, se diverte junto";
	
	
	$scope.calculo = [
	    {nome: 'Caf�s', valor: 0, classe: 'cafes'},
	    {nome: 'Espa�os & Cultura', valor: 0, classe: 'espacos'},
	    {nome: 'Restaurante', valor: 0, classe: 'restaurante',},
	    {nome: 'Bares', valor: 0, classe: 'bares'},
	    {nome: 'Noite', valor: 0, classe: 'noite'},
	];
	
	
	$scope.showCardFunction = function(cond, nome){
		
		switch(nome){
			case 'Dor�r�':
				$scope.infoCardActive = $scope.infoCardArray[0];
				break;
			case 'Diablo Pub':
				$scope.infoCardActive = $scope.infoCardArray[1];
				break;
			case 'Scada Caf�':
				$scope.infoCardActive = $scope.infoCardArray[2];
				break;
			case 'Republica da Sa�de':
				$scope.infoCardActive = $scope.infoCardArray[3];
				break;
			case 'Caf� Cari�o':
				$scope.infoCardActive = $scope.infoCardArray[4];
				break;
			case 'Jequitib� Bar':
				$scope.infoCardActive = $scope.infoCardArray[5];
				break;
			case 'Bahrem':
				$scope.infoCardActive = $scope.infoCardArray[6];
				break;
			case 'Bar do Gordo':
				$scope.infoCardActive = $scope.infoCardArray[7];
				break;
		}
		
		$scope.showCard = cond;
	}
		
	$scope.goTo = function(ind){
		switch(ind){
			case 0:
				$location.hash('cafes');
				break;
			case 1:
				$location.hash('espacos');
				break;
			case 2:
				$location.hash('restaurante');
				break;
			case 3:
				$location.hash('bares');
				break;
			case 4:
				$location.hash('noite');
				break;		
		}		
		$anchorScroll();
	}
	
	$scope.hideCompartilhar = function(){
		$scope.showCompartilhar = false;
		
		$('#svg').empty();
	}
	
	$scope.montaGrafico = function(){
		tipoCasal();
		
		$scope.showCompartilhar = true;
		desenharGrafico($scope.calculo[0].valor, $scope.calculo[1].valor, $scope.calculo[2].valor, $scope.calculo[3].valor, $scope.calculo[4].valor);
	}
	
	function tipoCasal(){
		if($scope.qntdSelecionada >= 0 && $scope.qntdSelecionada <= 25){
			$scope.fraseTipoCasal = "Casal Mocozado!";
			$scope.fraseDica = "�nimo! Casal que sai junto, se diverte junto";
			
			$scope.fraseFacebook = "Vixi! completamos s�" + $scope.whitespace + $scope.qntdSelecionada + "% da lista... Em quantos voc�s j� foram? #100destinosgyn";
		}
		
		if($scope.qntdSelecionada >= 26 && $scope.qntdSelecionada <= 50){
			$scope.fraseTipoCasal = "Casal Mexe o Doce";
			$scope.fraseDica = "Corre! Ainda d� tempo de completar a lista";
			
			$scope.fraseFacebook = "Mas mo�o, completamos s� " + $scope.qntdSelecionada + " % da lista! Em quantos voc�s j� foram? #100destinosgyn";
		}
		
		if($scope.qntdSelecionada >= 51 && $scope.qntdSelecionada <= 75){
			$scope.fraseTipoCasal = "Casal Resenha";
			$scope.fraseDica = "Falta pouco! Chame seu amor e v� se divertir";
			
			$scope.fraseFacebook = "B�o demais da conta! Completamos " + $scope.qntdSelecionada + "% da lista. Em quantos voc�s j� foram? #100destinosgyn";
		}
		
		if($scope.qntdSelecionada >= 76 && $scope.qntdSelecionada <= 100){
			$scope.fraseTipoCasal = "Casal Top";
			$scope.fraseDica = "Parab�ns! Voc�s sabem se divertir a dois";
			
			$scope.fraseFacebook = "Rensga! J� completamos " + $scope.qntdSelecionada + "% da lista. Em quantos voc�s j� foram? #100destinosgyn";
		}
		
		$scope.resultado = "N�s curtimos "+ $scope.qntdSelecionada + "/100 lugares juntinhos!";
		$scope.descricaoFacebook = "Descubra quantos programas imperd�veis em Goi�nia voc� e seu amor j� aproveitaram juntinhos.";
		$scope.imagemFB = "http://namorados.opopular.com.br/opopular/view/img/resultados/opopular/Numeros_compartilhamento_OPopular-" + $scope.qntdSelecionada;
				
	}
	
	$scope.enviarAnalytics =  function(){
		
		angular.forEach($scope.masterArray, function(value, key) {
//			ga('send', 'event', $scope.masterArray[key].categoria, $scope.masterArray[key].nome);
			console.log('Categoria: '+$scope.masterArray[key].categoria + '::: Nome: ' + $scope.masterArray[key].nome);
		});
		
//		ga('send', 'event', 'Compartilhado', 'click');
	}
	
}]);

$('#compartilhar-facebook').click(function(){

	$('#fb-share').trigger( "click" );
	
});
<html lang="en" ng-app="namoradosApp" ng-controller="namoradosController">
	<head>
	
		<!-- Facebook metas -->
		<meta property="og:url"           content="http://namorados.opopular.com.br/opopular" />
		<meta property="og:type"          content="website"/>
		<meta property="og:title"         content="{{fraseFacebook}}" />
		<meta property="og:description"   content="{{descricaoFacebook}}" />
		<meta property="og:image"         content="{{imagemFB}}"/>
		<!-- Fim -->	
	
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Bootstrap</title>
		
		<!-- Bootstrap -->
		<link href="view/css/bootstrap.min.css" rel="stylesheet">
		<link href="view/css/namorados.css" rel="stylesheet">
		<link href="view/css/namorados-header.css" rel="stylesheet">
		
		<!-- Fonts -->
		<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Bad+Script' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
		
		<script type="text/javascript" src="http://eas21.emediate.eu/EAS_tag.1.0.js"></script>
		
    	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
	
		<header class="opopular-header">
			<div class="opopular-logo"></div>
		</header>
		
		<div class="dia-namorados">
			
		<!-- Caf�s -->
		<section class="cafes" ng-controller="cafeController">				
			<!-- Titulo da section -->
			<a id="cafes"></a>
			<div class="titulo col-md-12 col-xs-12"><div class="cafe-svg"></div></div>
									
			<!-- Conteudo da section -->
			<div class="main-container cold-md-10 col-xs-12">				
				<div class="publicidade col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-md">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25743;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_cafes"></script>
					</div>
				</div>
				
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in cafe | limitTo:10:0">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
				
				<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-md hidden-xl hidden-lg">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_cafes"></script>
					</div>
				</div>
				
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in cafe | limitTo:10:10">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index+10)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
					
				<div class="img-container col-md-4 col-lg-3 col-xs-12">
					<div class="section-img"></div>					
					<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-xl hidden-xs hidden-lg">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_cafes"></script>
						</div>
					</div>					
				</div>
			</div>				
		</section>		
		<!-- Fim caf�s -->
			
		<!-- Espa�os -->
		<section class="espacos" ng-controller="espacosController">				
			<!-- Titulo da section -->
			<a id="espacos"></a>
			<div class="titulo col-md-12 col-xs-12"><div class="espacos-svg"></div></div>
											
				<!-- Conteudo da section -->
				<div class="main-container cold-md-10 col-xs-12">									
						
					<div class="list-container col-md-4 col-lg-3 col-xs-12">
						<div class="item-list col-md-12 col-xs-12" ng-repeat="item in espacos | limitTo:10:0">
							<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index)"><span class="glyphicon glyphicon-heart"></span></div>
							<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
							<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
						</div>
					</div>
						
					<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-md hidden-xl hidden-lg">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_espaco_cultura"></script>
						</div>
					</div>
				
					<div class="list-container col-md-4 col-lg-3 col-xs-12">
						<div class="item-list col-md-12 col-xs-12" ng-repeat="item in espacos | limitTo:10:10">
							<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index+10)"><span class="glyphicon glyphicon-heart"></span></div>
							<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
							<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
						</div>
					</div>
					
					<div class="img-container col-md-4 col-lg-3 col-xs-12">
						<div class="section-img"></div>					
						<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-xl hidden-xs hidden-lg">
							<h1>Publicidade</h1>
							<div class="publicidade-content">
								<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_espaco_cultura"></script>
							</div>
						</div>					
					</div>
					<div class="publicidade col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-md">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25743;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_espaco_cultura"></script>
						</div>
					</div>
				</div>				
		</section>	
		<!-- Fim espa�os -->			

		<!-- Restaurante -->
		<section class="restaurante" ng-controller="restauranteController">				
			<!-- Titulo da section -->
			<a id="restaurante"></a>
			<div class="titulo col-md-12 col-xs-12"><div class="restaurante-svg"></div></div>
									
			<!-- Conteudo da section -->
			<div class="main-container cold-md-10 col-xs-12">				
				<div class="publicidade col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-md">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25743;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_restaurante"></script>
					</div>
				</div>
				
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in restaurante | limitTo:10:0">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
						
				<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-md hidden-xl hidden-lg">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_restaurante"></script>
					</div>
				</div>
						
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in restaurante | limitTo:10:10">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index+10)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
					
				<div class="img-container col-md-4 col-lg-3 col-xs-12">
					<div class="section-img"></div>					
					<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-xl hidden-xs hidden-lg">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_restaurante"></script>
						</div>
					</div>					
				</div>
			</div>				
		</section>	
		<!-- Fim restaurante -->
		
		<!-- Bares -->
		<section class="bares" ng-controller="baresController">				
			<!-- Titulo da section -->
			<a id="bares"></a>
			<div class="titulo col-md-12 col-xs-12"><div class="bares-svg"></div></div>
									
			<!-- Conteudo da section -->
			<div class="main-container cold-md-10 col-xs-12">				
								
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in bares | limitTo:11:0">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
						
				<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-md hidden-xl hidden-lg">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_bares"></script>
					</div>
				</div>
						
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in bares | limitTo:10:11">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index+10)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
					
				<div class="img-container col-md-4 col-lg-3 col-xs-12">
					<div class="section-img"></div>					
					<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-xl hidden-xs hidden-lg">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_bares"></script>
						</div>
					</div>					
				</div>
				
				<div class="publicidade col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-md">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25743;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_bares"></script>
					</div>
				</div>
			</div>				
		</section>	
		<!-- Fim bares -->
		
		<!-- Noite -->
		<section class="noite" ng-controller="noiteController">				
			<!-- Titulo da section -->
			<a id="noite"></a>
			<div class="titulo col-md-12 col-xs-12"><div class="noite-svg"></div></div>
									
			<!-- Conteudo da section -->
			<div class="main-container cold-md-10 col-xs-12">				
				<div class="publicidade col-md-3 col-lg-3 col-xs-12 hidden-xs hidden-md">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25743;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_noite"></script>
					</div>
				</div>
				
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in noite | limitTo:10:0">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
						
				<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-md hidden-xl hidden-lg">
					<h1>Publicidade</h1>
					<div class="publicidade-content">
						<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_noite"></script>
					</div>
				</div>
						
				<div class="list-container col-md-4 col-lg-3 col-xs-12">
					<div class="item-list col-md-12 col-xs-12" ng-repeat="item in noite | limitTo:10:10">
						<div class="checkbox col-md-2 col-xs-2" ng-class="{selecionado: item.selecionado}" ng-click="selecionaItem($index+10)"><span class="glyphicon glyphicon-heart"></span></div>
						<div class="name col-md-8 col-xs-9">{{item.nome}}</div>
						<div class="info col-md-2 col-xs-2" ng-click="showCardFunction(true, item.nome)" ng-show="{{item.info}}"></div>
					</div>
				</div>
					
				<div class="img-container col-md-4 col-lg-3 col-xs-12">
					<div class="section-img"></div>					
					<div class="publicidade-arroba col-md-3 col-lg-3 col-xs-12 hidden-xl hidden-xs hidden-lg">
						<h1>Publicidade</h1>
						<div class="publicidade-content">
							<script type="text/javascript" src="http://eas21.emediate.eu/eas?cu=25744;cre=mu;js=y;pageviewid=;target=_blank;EASTwordTarget=opopular_noite"></script>
						</div>
					</div>					
				</div>
			</div>				
		</section>	
		<!-- Fim noite -->

		
		<div class="info-popup ng-hide" ng-show="showCard">
			<div class="card {{infoCardActive.classe}}">
				<span class="glyphicon glyphicon-remove close" ng-click="showCardFunction(false)"></span>
				<div class="img"><img src="{{infoCardActive.imagem}}"/></div>
				<div class="content">
					<h1 class="titulo">{{infoCardActive.titulo}}</h1>
					<span class="descricao">{{infoCardActive.descricao}}</span>
				</div>
				<div class="social-content">
					<a href="{{infoCardActive.facebook}}" target="_blank"><div class="facebook"></div></a>
					<a href="{{infoCardActive.instagram}}" target="_blank"><div class="instagram"></div></a>
					<a href="{{infoCardActive.local}}" target="_blank"><div class="local"></div></a>
					<a href="{{infoCardActive.site}}" target="_blank"><div class="site"><h1>Acesse o site</h1></div></a>
				</div>
			</div>		
		</div>
		
		<div class="compatilhar-popup ng-hide" ng-show="showCompartilhar">
			<div class="compartilhar-card">
				<span class="glyphicon glyphicon-remove close" ng-click="hideCompartilhar()"></span>
				<div class="frase col-md-12"><h1>{{fraseTipoCasal}}</h1><h2>{{fraseDica}}</h2></div>
				<div class="left-column col-md-3 col-xs-12">
					<div class="frase-resultado col-xs-8 col-md-12"><span>Esses <strong>{{qntdSelecionada}}</strong> programas imperd�veis de Goi�nia para se curtir juntinho.</span></div>
					<div class="legenda">
						<div class="cafe col-md-12 col-xs-12"><div class="circle"></div><h1>Caf� - {{calculo[0].valor}}%</h1></div>
						<div class="espacos col-md-12 col-xs-12"><div class="circle"></div><h1>Espa�os & Cultura - {{calculo[1].valor}}%</h1></div>
						<div class="restaurantes col-md-12 col-xs-12"><div class="circle"></div><h1>Restaurantes - {{calculo[2].valor}}%</h1></div>
						<div class="bares col-md-12 col-xs-12"><div class="circle"></div><h1>Bares - {{calculo[3].valor}}%</h1></div>
						<div class="noite col-md-12 col-xs-12"><div class="circle"></div><h1>Noite - {{calculo[4].valor}}%</h1></div>
					</div>
					<button class="btn voltar-btn hidden-xs" ng-click="hideCompartilhar()">Voltar</button>
				</div>
				<div class="middle-column col-md-5 col-xs-12"><div class="donut"><svg id="svg"></svg></div></div>
				<div class="right-column col-md-4 col-xs-12">
					<div class="patrocinio"></div>
					<h1>Conte para<br class="hidden-xs"> seus amigos!</h1>
					<button id="compartilhar-facebook" class="btn compartilhar-btn col-xs-12">Compartilhar</button>	
					<button class="btn voltar-btn col-xs-12 hidden-xs-up" ng-click="hideCompartilhar()">Voltar</button>
					<div class="fb-share-button" data-href="http://www.opopular.com.br/" data-layout="button" data-mobile-iframe="true"></div>
	</div>
				</div>		
			</div>			
		</div>
		
		<canvas id="canvas" class="facebook-img ng-hide" width="1000px" height="600px" style="left: 10px; bottom: 10px;"></canvas>

		
		<div class="footer col-md-12 col-xs-12" ng-class="{expandido: footExpandido}">
			<div class="instrucao col-md-2" ng-click="footExpandido = !footExpandido">
				<h1 class="titulo-desktop hidden-xs">Clique na categoria</h1>
				<h1 class="hidden-md hidden-lg">Veja os resultados <span class="glyphicon" ng-class="{'glyphicon-chevron-up' : !footExpandido, 'glyphicon-chevron-down' : footExpandido}"></span></h1>
			</div>
			<div class="contagem col-md-8">
				<div class="categoria-calculo {{cal.classe}}" ng-repeat="cal in calculo" ng-click="goTo($index)">
					<h2 class="nome col-xs-6">{{cal.nome}}</h2>
					<h1 class="valor col-xs-1">{{cal.valor | number:0}}</h1>
					<h2 class="simbolo col-xs-1">%</h2>
				</div>
			</div>
			<div class="btn-container col-md-2 col-xs-12"><button class="btn myBtn" ng-click="montaGrafico()">Compartilhar</button></div>
		</div>	
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js"></script>
	<script type="text/javascript" src="http://gabelerner.github.io/canvg/canvg.js"></script> 
	<script type="text/javascript" src="js/jquery.ajaxfileupload.js"></script>
	<script src="js/svg_todataurl.js"></script>
	<script src="js/emediate/EAS_fif.js"></script>
	
	<script src="js/svgs.js"></script>
	<script src="js/createsvg.js"></script>
	
	<!--AngularJS-->
	<script src="js/angular.min.js"></script>
	<!--App-->
	<script src="js/app.js"></script>
	<!--Controller-->
	<script src="js/controller/namorados.controller.js"></script>		
	<script src="js/controller/cafe.controller.js"></script>
	<script src="js/controller/restaurante.controller.js"></script>
	<script src="js/controller/espacos.controller.js"></script>
	<script src="js/controller/noite.controller.js"></script>
	<script src="js/controller/bares.controller.js"></script>		
	<!--Directives-->	
	<script src="js/directive/cafe/cafe.directive.js"></script>

	
	
	<script src="https://www.jscache.com/wejs?wtype=socialButtonBubbles&amp;uniq=183&amp;locationId=5818605&amp;color=green&amp;size=rect&amp;lang=pt&amp;display_version=2"></script>
	
	<!-- Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-2425005-2', 'auto');
	</script>
	<!-- Fim Analytics -->
	
	<!-- Facebook -->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.6&appId=286560031679524";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	<!-- Fim Facebook -->
	
	</body>
</html>
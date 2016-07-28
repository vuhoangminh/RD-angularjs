app.controller('RSCtrl', function($scope, $rootScope, DTOptionsBuilder, DTColumnBuilder) {
	$scope.sessions = [{
		"Project":"Bach Ho",
		"Well":"AA-1A",
		"Run":"VNA",
		"Depth":"3370-3917",
		"DateCreated":"10/08/2015 | 20:09",
		"LastActivity":"13/07/2016 | 21:09"
	},{
		"Project":"Rang Dong",
		"Well":"BB-5B",
		"Run":"VNB",
		"Depth":"3010-3559",
		"DateCreated":"19/11/2015 | 17:05",
		"LastActivity":"01/05/2016 | 20:09",
		"LastSetting": [{"MNEM":"GR","Curve_Type":"GammaRay","UNIT":".API","isCheck":true,"COLOR":"#3498db ","LINE_STYLE":"solid"},{"MNEM":"SP","Curve_Type":"SP","UNIT":".mv","isCheck":true,"COLOR":"#f1c40f ","LINE_STYLE":"dotted"},{"MNEM":"DT","Curve_Type":"Sonic","UNIT":".uSec/ft","isCheck":true,"COLOR":"#1abc9c ","LINE_STYLE":"solid"},{"MNEM":"LLD","Curve_Type":"DeepRes","UNIT":".ohm.m","isCheck":true,"COLOR":"#34495e ","LINE_STYLE":"solid"},{"MNEM":"RHOB","Curve_Type":"Density","UNIT":".gm/cc","isCheck":true,"COLOR":"#f1c40f ","LINE_STYLE":"solid"},{"MNEM":"NPHI","Curve_Type":"Neutron","UNIT":".dec","isCheck":true,"COLOR":"#27ae60 ","LINE_STYLE":"solid"}]
	}];
	// if(typeof $rootScope.runInfo == "undefined"){
		// $rootScope.runInfo = {};
		// $rootScope.runInfo.LastSetting = $scope.sessions[1].LastSetting;
	// } else {
		// $rootScope.runInfo.LastSetting = $scope.sessions[1].LastSetting;
	// }
	
	$scope.sessions.dtOptions = DTOptionsBuilder.newOptions()
						//.withSelect(true)
						.withPaginationType('numbers');		
	
	$scope.sessions.dtColumns = [
		DTColumnBuilder.newColumn('Project').withTitle('Project'),
		DTColumnBuilder.newColumn('Well').withTitle('Well'),
		DTColumnBuilder.newColumn('Run').withTitle('Run'),
		DTColumnBuilder.newColumn('Depth').withTitle('Depth Unit'),
		DTColumnBuilder.newColumn('DateCreated').withTitle('Date Created'),
		DTColumnBuilder.newColumn('LastActivity').withTitle('Last Activity')
	];	
});
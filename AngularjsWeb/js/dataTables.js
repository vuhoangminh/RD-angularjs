app.controller('tableCtrl', function tableCtrl($rootScope, $scope, $http, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
	
    var getPath = 'http://192.168.1.26:8080/smartdatics-sora/restapi/uploadData/all';
	$rootScope.projects = (function () {
        $rootScope.projects = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': getPath,
        'dataType': "json",
        'success': function (data) {
            $rootScope.projects = data;
			}
		});
		return $rootScope.projects;
	})(); 
	
	/*$scope.projects = [  
   {  
      "projectId":"Empty Project",
      "wells":[  
         {  
            "wellId":"abc",
            "runs":[  
               {  
                  "runId":" test all 7",
                  "lastActivity":1468997480000,
                  "createdDate":1468997501000,
                  "otherFields":{  
                     "WST":"-888",
                     "DATE_":"07.08.2017",
                     "STATE":"USA"
                  }
               }
            ]
         }
      ]
   },
   {  
      "projectId":"Empty Project 3",
      "wells":[  
         {  
            "wellId":"abc",
            "runs":[  

            ]
         }
      ]
   },
   {  
      "projectId":"Test all",
      "wells":[  
         {  
            "wellId":"M? abc",
            "runs":[  
               {  
                  "runId":"L?n test all 1",
                  "lastActivity":1468909409000,
                  "createdDate":1468909434000,
                  "otherFields":{  
                     "WST":"-999",
                     "DATE_":"07.01.2013",
                     "STATE":"VIETNAM"
                  }
               },
               {  
                  "runId":"L?n test all 2",
                  "lastActivity":1468909445000,
                  "createdDate":1468909477000,
                  "otherFields":{  
                     "WST":"-999",
                     "DATE_":"07.01.2013",
                     "STATE":"VIETNAM",
                     "RANG":"1/500",
                     "LATI":"0",
                     "RWS":"-999",
                     "STEP_M":"0.1000",
                     "FLD":"WHITEBEAR",
                     "KB":"36M",
                     "PROV":"BARIA-VUNGTAU",
                     "NULL_":"null",
                     "WELL":"GT-1X",
                     "COM1":"COMPOSITELOGS",
                     "COMP":"VIETSOVPETRO",
                     "SRVC_":"null",
                     "LONG":"0",
                     "GL":"-46M",
                     "DF":"36M",
                     "CNTY":"OFFSHORE",
                     "APDAT":"36",
                     "STRT_M":"1975.0000",
                     "STOP_M":"5000.0000"
                  }
               }
            ]
         }
      ]
   },
   {  
      "projectId":"Test all 2",
      "wells":[  
         {  
            "wellId":"abc",
            "runs":[  
               {  
                  "runId":" test all 6",
                  "lastActivity":1468915306000,
                  "createdDate":1468915313000,
                  "otherFields":{  
                     "WST":" -999",
                     "DATE_":" 07.01.2013",
                     "STATE":" VIET NAM",
                     "RANG":" 1/500",
                     "LATI":" 0",
                     "RWS":" -999",
                     "STEP_M":" 0.1000",
                     "FLD":" WHITE BEAR",
                     "KB":" 36M",
                     "PROV":" BA RIA - VUNG TAU",
                     "NULL_":"null",
                     "WELL":" GT-1X",
                     "COM1":" COMPOSITE LOGS",
                     "COMP":" VIETSOVPETRO",
                     "SRVC_":"null",
                     "LONG":" 0",
                     "GL":" -46M",
                     "DF":" 36M",
                     "CNTY":" OFFSHORE",
                     "APDAT":" 36",
                     "STRT_M":" 1975.0000",
                     "STOP_M":" 5000.0000"
                  }
               }
            ]
         },
         {  
            "wellId":"M? abc",
            "runs":[  
               {  
                  "runId":"L?n test all 1",
                  "lastActivity":1468909506000,
                  "createdDate":1468909520000,
                  "otherFields":{  
                     "WST":"-999",
                     "DATE_":"07.01.2013",
                     "NULL_":"-999.0000",
                     "WELL":"GT-4P",
                     "LATI":"0",
                     "SRVC_":"SCH",
                     "LONG":"0",
                     "RWS":"-999",
                     "STEP_M":"0.1000",
                     "STRT_M":"1500.0000",
                     "STOP_M":"3500.0000"
                  }
               },
               {  
                  "runId":"L?n test all 2",
                  "lastActivity":1468909698000,
                  "createdDate":1468909738000,
                  "otherFields":{  
                     "WST":" -999",
                     "DATE_":" 07.01.2013",
                     "NULL_":" -999.0000",
                     "WELL":" GT-4P",
                     "LATI":" 0",
                     "SRVC_":" SCH",
                     "LONG":" 0",
                     "RWS":" -999",
                     "STEP_M":" 0.1000",
                     "STRT_M":" 1500.0000",
                     "STOP_M":" 3500.0000"
                  }
               },
               {  
                  "runId":"L?n test all 3",
                  "lastActivity":1468909803000,
                  "createdDate":1468909823000,
                  "otherFields":{  
                     "WST":" -999",
                     "DATE_":" 07.01.2013",
                     "STATE":" VIET NAM",
                     "RANG":" 1/500",
                     "LATI":" 0",
                     "RWS":" -999",
                     "STEP_M":" 0.1000",
                     "FLD":" WHITE BEAR",
                     "KB":" 36M",
                     "PROV":" BA RIA - VUNG TAU",
                     "NULL_":"null",
                     "WELL":" GT-1X",
                     "COM1":" COMPOSITE LOGS",
                     "COMP":" VIETSOVPETRO",
                     "SRVC_":"null",
                     "LONG":" 0",
                     "GL":" -46M",
                     "DF":" 36M",
                     "CNTY":" OFFSHORE",
                     "APDAT":" 36",
                     "STRT_M":" 1975.0000",
                     "STOP_M":" 5000.0000"
                  }
               },
               {  
                  "runId":"L?n test all 4",
                  "lastActivity":1468911181000,
                  "createdDate":1468911196000,
                  "otherFields":null
               },
               {  
                  "runId":"L?n test all 5",
                  "lastActivity":1468911315000,
                  "createdDate":1468911399000,
                  "otherFields":null
               },
               {  
                  "runId":"L?n test all 6",
                  "lastActivity":1468911491000,
                  "createdDate":1468911514000,
                  "otherFields":{  
                     "WST":" -999",
                     "DATE_":" 07.01.2013",
                     "STATE":" VIET NAM",
                     "RANG":" 1/500",
                     "LATI":" 0",
                     "RWS":" -999",
                     "STEP_M":" 0.1000",
                     "FLD":" WHITE BEAR",
                     "KB":" 36M",
                     "PROV":" BA RIA - VUNG TAU",
                     "NULL_":"null",
                     "WELL":" GT-1X",
                     "COM1":" COMPOSITE LOGS",
                     "COMP":" VIETSOVPETRO",
                     "SRVC_":"null",
                     "LONG":" 0",
                     "GL":" -46M",
                     "DF":" 36M",
                     "CNTY":" OFFSHORE",
                     "APDAT":" 36",
                     "STRT_M":" 1975.0000",
                     "STOP_M":" 5000.0000"
                  }
               }
            ]
         }
      ]
   },
   {  
      "projectId":"Test all 3",
      "wells":[  
         {  
            "wellId":"abc",
            "runs":[  

            ]
         }
      ]
   }
];*/

    $scope.update=[];
    $scope.count = 0;
	if($rootScope.projects != 'undefined' && $rootScope.projects != null){
		for (var i = 0; i < $rootScope.projects.length; i++) {
			var projectId = $rootScope.projects[i].projectId;
			var wells = $rootScope.projects[i].wells;
			
			for (var j = 0; j < wells.length; j++) {
				
				var wellId = wells[j].wellId;
				var runs = wells[j].runs;
				
				if (runs) {
					for (var z = 0; z < runs.length; z++) {
						
						var runId = runs[z].runId;
						
						var createdDateInMilSec = runs[z].createdDate;
						var convertToDate = new Date(createdDateInMilSec);
						var dateOfCreatedDate = (convertToDate.getDate() < 10) ? ('0' + convertToDate.getDate()) : convertToDate.getDate() ;
						var monthOfCreatedDate = ((convertToDate.getMonth() + 1) < 10) ? ('0' + (convertToDate.getMonth() + 1)) : (convertToDate.getMonth() + 1);
						
						var yearOfCreatedDate = convertToDate.getFullYear();
						var minuteOfCreatedDate = ((convertToDate.getMinutes() + 1) < 10) ? ('0' + (convertToDate.getMinutes() + 1)) : (convertToDate.getMinutes() + 1);
						var hourOfCreatedDate = convertToDate.getHours() + 1;
						var createdDate = yearOfCreatedDate 
											+ "/" + monthOfCreatedDate 
											+ "/" + dateOfCreatedDate
											+ " | " + hourOfCreatedDate
											+ ":" + minuteOfCreatedDate;
											
						var lastActivityInMilSec = runs[z].lastActivity;
						var convertToDate1 = new Date(lastActivityInMilSec);
						var dateOfLastActivity = (convertToDate1.getDate() < 10) ? ('0' + convertToDate1.getDate()) : convertToDate1.getDate();;
						var monthOfLastActivity = ((convertToDate1.getMonth() + 1) < 10) ? ('0' + (convertToDate1.getMonth() + 1)) : (convertToDate1.getMonth() + 1);
						var yearOfLastActivity = convertToDate1.getFullYear();
						var minuteOfLastActivity = ((convertToDate1.getMinutes() + 1) < 10) ? ('0' + (convertToDate1.getMinutes() + 1)) : (convertToDate1.getMinutes() + 1);
						var hourOfLastActivity = convertToDate1.getHours() + 1;
						var lastActivity = yearOfLastActivity 
											+ "/" + monthOfLastActivity 
											+ "/" + dateOfLastActivity
											+ " | " + hourOfLastActivity
											+ ":" + minuteOfLastActivity;
						
						
						var otherFields = runs[z].otherFields;
						
						if (otherFields != null) {
							var STRT_M = otherFields.STRT_M;
							var STOP_M = otherFields.STOP_M;						
							if ((STRT_M && STOP_M)) {
								var dotPositionInSTRT_M = STRT_M.indexOf(".") + 2;
								var START_M = STRT_M.substr(0,dotPositionInSTRT_M);
								var dotPositionInSTOP_M = STOP_M.indexOf(".") + 2;
								var STOP_M1 = STOP_M.substr(0,dotPositionInSTOP_M);
								var depth = START_M + " - " + STOP_M1;
								$scope.update.push({projectId, wellId, runId, depth, createdDate, lastActivity});
								$scope.count++; 
							}
							else {
								$scope.update.push({projectId, wellId, runId, createdDate, lastActivity});
								$scope.count++;
							}
						}
						else {						
							$scope.update.push({projectId, wellId, runId, createdDate, lastActivity});
							$scope.count++;
						}
					}
				}
			}
		}
	}
	
	
    // alert($scope.count);
	$scope.update.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('rowCallback', rowCallback)
		.withDOM('frtp')
		.withPaginationType('numbers')
		.withDisplayLength(5)
		// .withColReorder()
		.withBootstrap()
		.withBootstrapOptions({
			TableTools: {
				classes: {
					container: 'btn-group',
					// buttons: {
						// normal: 'btn btn-danger'
					// }
				}
			},
			ColVis: {
				classes: {
					masterButton: 'btn btn-primary'
				}
			},
			pagination: {
				classes: {
					ul: 'pagination pagination-sm'
				}
			}
		})
		// .withTableTools('js/plugins/angular-datatables/vendor/table_tools_swf/copy_csv_xls_pdf.swf')
		// .withTableToolsButtons([
			// {
				// 'sExtends': 'collection',
				// 'sButtonText': 'Save',
				// 'aButtons': ['csv','xlsx', 'pdf']
			// }
		// ])
		.withButtons([
            'colvis',
            'copy',
            'print',
			'excel',
			'pdf',
		])
		.withOption('language', {
		   buttons: {
					   colvis: 'Toggle'
				   }
		})
		// .withOption('paging', false);
									
	$scope.update.dtColumns = [
		DTColumnBuilder.newColumn('projectId').withTitle('Project'),
		DTColumnBuilder.newColumn('wellId').withTitle('Well'),
		DTColumnBuilder.newColumn('runId').withTitle('Run'),
		DTColumnBuilder.newColumn('depth').withTitle('Depth'),
		DTColumnBuilder.newColumn('createdDate').withTitle('Created Date'),
		DTColumnBuilder.newColumn('lastActivity').withTitle('Last Activity'),
	];

	$scope.message = '';
	$scope.someClickHandler = someClickHandler;
	$rootScope.projectId = '';
	$rootScope.wellId = '';
	$rootScope.runId = '';
	
	function someClickHandler(info) {
	  $scope.message = info.projectId + ' - ' + info.wellId + ' - ' + info.runId + ' - ' + info.depth + ' - ' + info.createdDate + ' - ' + info.lastActivity;
	  
	}
	
	console.log($rootScope.projectId, $rootScope.wellId, $rootScope.runId);
		   
	var nRowPre = null;
	function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
	   // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
	   $('td', nRow).unbind('click');
	   $('td', nRow).bind('click', function() {
		   $scope.$apply(function() {
				$scope.someClickHandler(aData);
				if (nRowPre != null) {
                    if (nRow != nRowPre) {
                        $('td', nRow).addClass('selected');
                        $('td', nRowPre).removeClass('selected');
                        nRowPre = nRow;
                    }
                }
                else if (nRowPre == null) {
                    $('td', nRow).addClass('selected');
                    nRowPre = nRow;
                }
				$rootScope.projectId = aData.projectId;
				$rootScope.wellId = aData.wellId;
				$rootScope.runId = aData.runId;
			   	//console.log(aData.projectId);
				// console.log($rootScope.projectId, $rootScope.wellId, $rootScope.runId);
				$("#loadDatabase").prop('disabled', false);
				$("#deleteDatabase").prop('disabled', false);
		   });
	   });
	   return nRow;
   }
});

app.controller('loadCurveCtrl', function curveCtrl($rootScope, $scope, $compile, DTOptionsBuilder, DTColumnBuilder) {
	
	
	var getPath = 'http://192.168.1.26:8080/smartdatics-sora/restapi/uploadData/json?projectId=' + $rootScope.projectId + '&wellId=' + $rootScope.wellId + '&runId=' + $rootScope.runId;
	//console.log(getPath);
	$scope.lasFile = (function () {
        $scope.lasFile = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': getPath,
        'dataType': "json",
        'success': function (data) {
            $scope.lasFile = data;
			}
		});
		return $scope.lasFile;
	})(); 
	
	$scope.curveInfoDataTemp = $scope.lasFile.curveInfoData;
	$scope.data = $scope.lasFile.data;

	$scope.selected = {};
    $scope.selectAll = true;
    $scope.toggleAll = toggleAll;
    $scope.toggleOne = toggleOne;	
	$rootScope.runInfo = {
		"curveInfoData":[],
		"data":[],
		"status": true,
		"depthStatus": false
	};
	
    $scope.dtInstance = {};
	
	$scope.curveInfoData = [];
	for (var i = 0; i < $scope.curveInfoDataTemp.length; i++) {
		var MNEM = $scope.curveInfoDataTemp[i].MNEM;
		var Curve_Type = $scope.curveInfoDataTemp[i].Curve_Type;
		var UNIT = $scope.curveInfoDataTemp[i].UNIT;
		var isCheck = false;
		if (MNEM != "DEPTH") {
			$scope.curveInfoData.push({MNEM, Curve_Type, UNIT, isCheck});
		}
	}
	
	console.log("$scope.curveInfoData: ", $scope.curveInfoData);
	
	for (var i = 0; i < $scope.curveInfoDataTemp.length; i++) {
		var MNEM = $scope.curveInfoDataTemp[i].MNEM;
		var Curve_Type = $scope.curveInfoDataTemp[i].Curve_Type;
		var UNIT = $scope.curveInfoDataTemp[i].UNIT;
		var isCheck = true;
		if (MNEM == "DEPTH") {
			$rootScope.runInfo.depthStatus = true;
		}
		$rootScope.runInfo.curveInfoData.push({MNEM, Curve_Type, UNIT, isCheck});
	}
	
	$rootScope.runInfo.data = $scope.data;
	
	console.log($rootScope.runInfo);
	
	$scope.curveInfoData.dtOptions = DTOptionsBuilder.newOptions()
						//.withSelect(true)
						.withDOM('frtp')
						.withOption('createdRow', function(row, data, dataIndex) {
							$compile(angular.element(row).contents())($scope);
						})
						.withOption('headerCallback', function(header) {
							if (!$scope.headerCompiled) {
								$scope.headerCompiled = true;
								$compile(angular.element(header).contents())($scope);
							}
						})
						.withPaginationType('numbers');				
	
	$scope.curveInfoData.dtColumns = [
		DTColumnBuilder.newColumn(null)
			.withTitle('<input type="checkbox" ng-model="selectAll" ng-change="toggleAll(selectAll, selected)" icheck>').notSortable()
            .renderWith(function(data, type, full, meta) {
                $scope.selected[full.MNEM] = true;
                return '<input id="MNEM" type="checkbox" ng-model="selected.' + data.MNEM + '" ng-change="toggleOne(selected)" icheck>';
            }),
		DTColumnBuilder.newColumn('MNEM').withTitle('Name'),
		DTColumnBuilder.newColumn('Curve_Type').withTitle('Standard Name'),
		DTColumnBuilder.newColumn('UNIT').withTitle('Unit'),
		DTColumnBuilder.newColumn('UNIT').withTitle('Standard Unit')
	];
	
	
	function toggleAll (selectAll, selectedItems) {
		
		var count = 1;
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                selectedItems[id] = selectAll;
				$rootScope.runInfo.curveInfoData[count].isCheck = selectAll;
				$rootScope.runInfo.status = selectAll;
				count++;
            }
        }
	console.log($rootScope.runInfo);		
    }

    function toggleOne (selectedItems) {
		
		var count = 0;
		for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
				   var idToString = id.toString();
				   //console.log(selectedItems);
				   //console.log(id);
				   //console.log(selectedItems[id]);
                   $rootScope.runInfo.curveInfoData[count].isCheck = selectedItems[id];
				   var isChecked = $rootScope.runInfo.curveInfoData[count].isCheck | isChecked;
				   if (isChecked) {
					   $rootScope.runInfo.status = true;
				   }
				   else {
					   $rootScope.runInfo.status = false;
				   }
				   count++;
            }
        }
		
		console.log($rootScope.runInfo);
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                if(!selectedItems[id]) {
                    $scope.selectAll = false;
                    return;
                }
            }
        }
		$scope.selectAll = true;
    } 
});

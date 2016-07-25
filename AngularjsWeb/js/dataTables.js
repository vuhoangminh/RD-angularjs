app.controller('tableCtrl', function tableCtrl($scope, $http, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder) {
	
    // var getPath = 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/all';
	// $scope.projects = (function () {
        // $scope.projects = null;
    // $.ajax({
        // 'async': false,
        // 'global': false,
        // 'url': getPath,
        // 'dataType': "json",
        // 'success': function (data) {
            // $scope.projects = data;
			// }
		// });
		// return $scope.projects;
	// })(); 
	
	$scope.projects = [  
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
];

    $scope.update=[];
    $scope.count = 0;
	for (var i = 0; i < $scope.projects.length; i++) {
		
		var projectId = $scope.projects[i].projectId;
		var wells = $scope.projects[i].wells;
		
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
							console.log (projectId + " : " + wellId + " : " + runId + " : " + depth + " : " + createdDate + " : " + lastActivity);
							$scope.update.push({projectId, wellId, runId, depth, createdDate, lastActivity});
							$scope.count++; 
						}
						else {
							console.log (projectId + " : " + wellId + " : " + runId + " : " + depth + " : " + createdDate + " : " + lastActivity);
							$scope.update.push({projectId, wellId, runId, createdDate, lastActivity});
							$scope.count++;
						}
					}
					else {
						console.log (projectId + " : " + wellId + " : " + runId + " : " + depth + " : " + createdDate + " : " + lastActivity);						
						$scope.update.push({projectId, wellId, runId, createdDate, lastActivity});
						$scope.count++;
					}
				}
			}
		}
	}
	
	
    // alert($scope.count);
	console.log("update: " + JSON.stringify($scope.update));
	$scope.update.dtOptions = DTOptionsBuilder.newOptions()
		.withDOM('frtp')
		.withPaginationType('numbers')
		.withDisplayLength(10)
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

	// $scope.message = '';
	// $scope.someClickHandler = someClickHandler;

	// function someClickHandler(info) {
	  // $scope.message = info.projectId + ' - ' + info.wellId + ' - ' + info.runId + ' - ' + info.depth + ' - ' + info.createdDate + ' - ' + info.lastActivity;
	// }

	// function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
	   // // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
	   // $('td', nRow).unbind('click');
	   // $('td', nRow).bind('click', function() {
		   // $scope.$apply(function() {
			   // $scope.someClickHandler(aData);
		   // });
	   // });
	   // return nRow;
   // }


	
});
app.controller('MainCtrl', function($scope) {

});
app.controller('GraphCtrl', function($scope, $rootScope) {
	
	if(typeof $rootScope.runInfo == "undefined"){
		$scope.runName = "No run has been selected!";
		loadDefault();
	} else if($rootScope.runInfo.LastSetting != "undefined") {
		$scope.runName = "AA-1A";
		loadRun($rootScope.runInfo, $rootScope.runInfo.LastSetting);
	} else if($rootScope.runInfo.status == false) {
		$scope.runName = "No run has been selected!";
		loadDefault();
	} else{
		$scope.runName = "--";
		loadRun($rootScope.runInfo, null);
	}
	function loadDefault(){	
		// var r= $('<input type="button" value="Load test run"/>');
		// r.css("position","absolute");
		// r.click(function(){
			// r.css("visibility", "hidden");
			// loadLastInfo();
		// });
        // $("#chart").append(r);
		// function loadLastInfo(){
			// $scope.runName = "Test run";
			// $scope.$apply();
			// var runInfo;
			// $.getJSON("testInfo.json", function(json) {
				// runInfo = json;
				// loadRun(runInfo, null);
			// });
		// }
	}
	function loadRun(runInfo, lastSetting){
		var settingMenu = $("#container-graph");
		$(document).ready(function() {
			$("#container-graph").draggable({ handle: "div.setting-header" });
			$("#close").click(function() {
				$("#container-graph").css("visibility", "hidden");
			})
		});
		$scope.colors =[
			{
				"name": "TURQUOISE",
				"code": "#1abc9c "
			},
			{
				"name": "EMERALD",
				"code": "#2ecc71 "
			},
			{
				"name": "PETER RIVER",
				"code": "#3498db "
			},
			{
				"name": "AMETHYST",
				"code": "#9b59b6 "
			},
			{
				"name": "WET ASPHALT",
				"code": "#34495e "
			},
			{
				"name": "GREEN SEA",
				"code": "#16a085 "
			},
			{
				"name": "NEPHRITIS",
				"code": "#27ae60 "
			},
			{
				"name": "BELIZE HOLE",
				"code": "#2980b9 "
			},
			{
				"name": "WISTERIA",
				"code": "#8e44ad "
			},
			{
				"name": "MIDNIGHT BLUE",
				"code": "#2c3e50 "
			},
			{
				"name": "SUN FLOWER",
				"code": "#f1c40f "
			},
			{
				"name": "CARROT",
				"code": "#e67e22 "
			},
			{
				"name": "ALIZARIN",
				"code": "#e74c3c "
			},
			{
				"name": "CLOUDS",
				"code": "#ecf0f1 "
			},
			{
				"name": "CONCRETE",
				"code": "#95a5a6 "
			},
			{
				"name": "ORANGE",
				"code": "#f39c12 "
			},
			{
				"name": "PUMPKIN",
				"code": "#d35400 "
			},
			{
				"name": "POMEGRANATE",
				"code": "#c0392b "
			},
			{
				"name": "SILVER",
				"code": "#bdc3c7 "
			},
			{
				"name": "ASBESTOS",
				"code": "#7f8c8d "
			}];
		$scope.lineStyles = [
			'solid', 'dotted', 'dashed'
		];
		var runData = runInfo.data;
		stringified = JSON.stringify(runData);
		stringified = stringified.replace(/"-999.0000"/g, 'null');
		runData = JSON.parse(stringified);
		var curveInfo = runInfo.curveInfoData;
		curveInfo.splice(0, 1);
		if(lastSetting == null){
			for (var i = 0; i < curveInfo.length; i++) {
				curveInfo[i].COLOR = $scope.colors[i*2].code;
				curveInfo[i].LINE_STYLE = 'solid';
			}
		} else {
			curveInfo = lastSetting;
		}
		
		$scope.finalSetting = [];
		$scope.settingData = [];
		var listColName = [];
		var listColor = []; 
		var listLineKind = [];
		for(i in curveInfo){
			info = curveInfo[i];
			if(info.isCheck){
				listColName.push(info.MNEM);
				listColor.push(info.COLOR);
				listLineKind.push(info.LINE_STYLE);
			}
			$scope.finalSetting.push(info);
		}
		angular.copy( $scope.finalSetting, $scope.settingData);
		$scope.$apply();
		var colNum = listColName.length;	
		var step = 0.1;
		var w = 1200;
		var h = 520;
		var minDepthShow = 1;
		var drawData = [];
		var minDepth = d3.min(runData, function(d) { return +d.DEPTH;} );
		var maxDepth = d3.max(runData, function(d) { return +d.DEPTH;} );		
		var startDepth = minDepth;
		var endDepth = maxDepth - 9*(maxDepth - minDepth)/10;
		var sliderY1 = (startDepth-minDepth)/(maxDepth-minDepth)*470;
		var sliderY2 = (endDepth-minDepth)/(maxDepth-minDepth)*470;
		var ix = 0;
		var ran = 140;
		var startX = -30;
		var widthArray = [];
		var posArray = [-30,0,0,0,0,0,0];
		var graphHeight = 478;
		var graphWidth = colNum*160;
		if (graphWidth > 990) graphWidth = 990;
		for(i = 0; i < colNum; i++)
		{
			widthArray.push(graphWidth/colNum);
		}			
		updatePosArray();
		function updatePosArray(){
			posArray = [-30,0,0,0,0,0,0];
			for(i = 0; i < colNum; i++)
			{
				posArray[i+1] = posArray[i]+widthArray[i];
			}
		}
		var sliderHeight = 470;
		var drag4 = d3.behavior.drag()
			.on("dragstart", function(d) {
				tempN = d.n;
				tempPos = 0;
			})
			.on("drag", function(d) {
				mousePos = d3.mouse(this)[1] + tempPos;
				if(mousePos<((widthArray[tempN]-widthArray[tempN+1])/2)  && tempN<colNum-1){
					if(tempN == d.n) {
						tempPos += widthArray[tempN];
					}
					else tempPos += widthArray[tempN+1];
					swapCol(tempN,tempN+1);
					updateChart(startDepth,endDepth);
					tempN += 1;
				}
				if(mousePos>((widthArray[tempN]+widthArray[tempN-1])/2) && tempN>0){
					if(tempN == d.n+1) {
						tempPos -= widthArray[tempN];
					} else tempPos -= widthArray[tempN-1];
					swapCol(tempN,tempN-1);
					updateChart(startDepth,endDepth);
					tempN -= 1;
				}
			})
			.on("dragend", function (d) { 
			});
		d3.select('#reset')
			.on("click",reset);
		
		function reset(){
			var l = document.getElementById("rangeLLD");
			le = l.getComputedTextLength();
			console.log(l);
		}
		function swapCol(col1,col2){
			swapArr($scope.settingData,col1,col2);
			$scope.$apply();
			swapArr(curveInfo,col1,col2);
			swapArr(listColName,col1,col2);
			swapArr(listColor,col1,col2);
			swapArr(listLineKind,col1,col2);
			swapArr(widthArray,col1,col2);
			updatePosArray();
		}
		function swapArr(arr,col1,col2){
			var temp = arr[col1];
			arr[col1] = arr[col2];
			arr[col2] = temp;
		}
		$scope.cancelSetting = function (){
			angular.copy($scope.finalSetting, $scope.settingData);
			settingMenu.css("visibility", "hidden");
		}
		$scope.okSetting = function (){
			angular.copy($scope.settingData, $scope.finalSetting);
			curveInfo = $scope.finalSetting;
			listColName = [];
			listColor = [];
			listLineKind = [];
			for(i in curveInfo){
				info = curveInfo[i];
				if(info.isCheck){
					listColName.push(info.MNEM);
					listColor.push(info.COLOR);
					listLineKind.push(info.LINE_STYLE);
				}
			}
			updateChart(startDepth, endDepth);
			settingMenu.css("visibility", "hidden");
		}
		var coordinates = [0, 0];
		var coordinates2 = [0, 0];
		var x = coordinates[0];
		var y = coordinates[1];
		var mainx = d3.scale.linear()
				.domain(d3.extent(runData, function (d) {
				return +d.DEPTH;
			}))
				.range([0, graphHeight]);
		var drag2 = d3.behavior.drag()
			.on("dragstart", function(d) {
				coordinates = d3.mouse(this);
			})
			.on("dragend", function (d) { 
				coordinates2 = d3.mouse(this);
				var a = startDepth + coordinates[1]*(endDepth-startDepth)/graphHeight;
				var b = startDepth + coordinates2[1]*(endDepth-startDepth)/graphHeight;
				if(b-a>minDepthShow) {
					updateChart(a,b);
				}
			});
		var minWidth = 50;
		var drag5 = d3.behavior.drag()
			.on("dragstart", function(d) { 
			
			})
			.on("drag", function(d) { 
				name = d3.select(this).attr("id");
				deltaMove = d3.event.dy;
				if( name == "midhandle"){
					if((sliderY1 + deltaMove) < 0){
						deltaMove = -sliderY1;
					}
					if((sliderY1 + deltaMove) > sliderHeight){
						deltaMove = sliderHeight - sliderY1;
					}
					if((sliderY2 + deltaMove) < 0){
						deltaMove = -sliderY2;
					}
					if((sliderY2 + deltaMove) > sliderHeight){
						deltaMove = sliderHeight-sliderY2;
					}
					sliderY1 += deltaMove;
					sliderY2 += deltaMove;
				} else if( name == "tophandle"){
					if((sliderY1 + deltaMove) < 0){
						deltaMove = -sliderY1;
					}
					if((sliderY1 + deltaMove) > sliderHeight){
						deltaMove = sliderHeight - sliderY1;
					}
					sliderY1 += deltaMove;
				} else {
					if((sliderY2 + deltaMove) < 0){
						deltaMove = -sliderY2;
					}
					if((sliderY2 + deltaMove) > sliderHeight){
						deltaMove = sliderHeight-sliderY2;
					}
					sliderY2 += deltaMove;
				}
				
				updateSlider(sliderY1, sliderY2);
				var a = minDepth + sliderY1*(maxDepth - minDepth)/sliderHeight;
				var b = minDepth + sliderY2*(maxDepth - minDepth)/sliderHeight;
				if(b-a>minDepthShow) {
					updateChart(a,b);
				} else if(a-b>minDepthShow){
					updateChart(b,a);
				}
			})
			.on("dragend", function(d) { 

			});
		var drag3 = d3.behavior.drag()
			.on("dragstart", function(d) {
				coordinates = d.xpos;
				d3.select(this)
					.attr("height", 2)
					.attr("opacity", "0.3");
			})
			.on("drag", function(d) {
				d.xpos += d3.event.dy;
				d3.select(this).attr("transform", function(d,i){
					return "translate(0," + d.xpos + ")"
				});
			})
			.on("dragend", function (d) { 
				coordinates2 = d.xpos;
				d.xpos = 0;
				if(posArray.length>2){
					var delta = coordinates - coordinates2;
					widthArray[d.n]+=delta;
					for(i=0;i<colNum;i++){
						if(widthArray[i]<minWidth) widthArray[i] = minWidth;
					}
					var sum = 0;
					for(i=0;i<colNum;i++){
						sum+=widthArray[i];
					}
					for(i=0;i<colNum;i++){
						widthArray[i] *=(graphWidth/sum);
					}
					
				} else{
					
				}
				updatePosArray(widthArray);
				updateChart(startDepth,endDepth);
				d3.select(this)
					.attr("height", 4)
					.attr("opacity", "0");
			});
		function pan() {
			dy = -d3.event.wheelDeltaY/120;
			move = (endDepth - startDepth)*dy/10;
			if((startDepth + move) >= minDepth && (endDepth + move) <= maxDepth){
				startDepth +=move;
				endDepth +=move;
				updateChart(startDepth,endDepth);
			}else if((startDepth + move) < minDepth){
				endDepth -= startDepth - minDepth;
				startDepth = minDepth;
				updateChart(startDepth,endDepth);
			} else{
				startDepth += maxDepth - endDepth;
				endDepth = maxDepth;
				updateChart(startDepth,endDepth);
			}
		}
		initSvg();
		function initSvg(){
			var chartBoder = d3.select("#chart")
				.append("svg:svg")
				.attr("width", w)
				.attr("height", h)
				.attr("id", "charts")
				.on("contextmenu", function(data, index) {
				 //handle right click

				 //stop showing browser menu
				 d3.event.preventDefault();
			}); 
			var drawDataSimple = [];
			var simpleRate = 1;
			var startIndex = (startDepth-minDepth)/step;
			var endIndex = (endDepth-minDepth)/step;
			var totalPoint = (endIndex - startIndex)*colNum;
			
			if(totalPoint>100000){
				simpleRate = 20;
			} else if(totalPoint>50000){
				simpleRate = 15;
			} else if(totalPoint>10000){
				simpleRate = 5;
			} else simpleRate = 1;
			for(i = startIndex; i < endIndex; i++)
			{
				i = i.toFixed(0);
				drawData.push(runData[i]);
				if(i%simpleRate == 0) drawDataSimple.push(runData[i]);
			}
			drawDepthAxis(drawData);
			for(i = 0; i < colNum; i++)
			{
				drawGraph(i,"graph1", drawDataSimple, listColName[i], posArray, 40);
			}
			drawSlider(runData);
			chartBoder.append("svg:rect")
					.attr("width", "100%")
					.attr("height", "100%")
					.attr("stroke", "#000")
					.attr("stroke-width", 3)
					.attr("fill", "none");
			chartBoder.append("line")
				.attr("x1",90)
				.attr("y1",0)
				.attr("x2",90)
				.attr("y2",graphHeight+40)
				.attr("stroke", "#000")
				.attr("stroke-width", 1);
			chartBoder.append("line")
				.attr("x1",0)
				.attr("y1",40)
				.attr("x2",graphWidth+90)
				.attr("y2",40)
				.attr("stroke", "#000")
				.attr("stroke-width", 1);
			
		} 
		function updateChart(depth1, depth2) {
			var allGraph = d3.selectAll("#allGraph");
			if(depth1>=minDepth && depth2 <= maxDepth && depth2>depth1){
				startDepth = depth1;
				endDepth = depth2;
			} else{
				console.log("Wrong depth, cannot draw!"+depth1+"  "+depth2)
			}
			var drawData = [];
			var drawDataSimple = [];
			var simpleRate = 1;
			var startIndex = (startDepth-minDepth)/step;
			var endIndex = (endDepth-minDepth)/step;
			var totalPoint = (endIndex - startIndex)*colNum;
			if(totalPoint>100000){
				simpleRate = 20;
			} else if(totalPoint>50000){
				simpleRate = 15;
			} else if(totalPoint>10000){
				simpleRate = 5;
			} else simpleRate = 1;
			for(i = startIndex; i < endIndex; i++)
			{
				i = i.toFixed(0);
				drawData.push(runData[i]);
				if(i%simpleRate == 0) drawDataSimple.push(runData[i]);
			}
			updateDepthAxis(drawData);
			for(i = 0; i < colNum; i++)
			{
				updateGraph(i, drawDataSimple, listColName[i]);
			}
			sliderY1 = (startDepth-minDepth)/(maxDepth-minDepth)*470;
			sliderY2 = (endDepth-minDepth)/(maxDepth-minDepth)*470;
			updateSlider(sliderY1, sliderY2);
			//drawOverview(1,"view", runData, 'GR', 1030, 40);
			
		};
		function updateGraph(n, data, keyLine){
			chartWidth = graphHeight;
			chartHeight = posArray[n+1] - posArray[n];
			var x = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			}))
				.range([0, chartWidth]);
			var y = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				if(d[keyLine]=="-999.0000") return null;
				return +d[keyLine];
			}))
				.range([chartHeight-2, 0]);
			var line = d3.svg.line()
				.x(function (d) {
				return x(d.DEPTH);
			})
				.y(function (d) {
				return y(d[keyLine]);
			}).defined(function(d) { return !isNaN(d[keyLine]); });
			var lineName = "#graphLine"+n;
			var body = d3.select(lineName)
				.attr("d", line(data))
				.attr("stroke", listColor[n]);
			if(listLineKind[n] == 'dotted'){
				body.style("stroke-dasharray", ("3, 3"))
			} else if (listLineKind[n] == 'dashed'){
				body.style("stroke-dasharray", ("6, 2"))
			}else {
				body.style("stroke-dasharray", "none")
			}
			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.ticks(0);
			d3.select("#graph"+n)
				.attr("transform", "translate(" + (posArray[n+1]) + ",40) rotate(90 60 60) ")
			d3.select("#yaxis"+n)
				.call(yAxis)
				.selectAll("text")  
					.style("text-anchor", "end")
					.style("font-size", "9px")
					.attr("dx", "-.8em")
					.attr("dy", ".15em")
					.attr("transform", "rotate(-90) translate(22,-10)" );
			d3.select("#rectAll"+n)
				.attr("height", chartHeight-2);
			d3.select("#rectHeader"+n)
				.attr("height", chartHeight-2);
			d3.select("#rectDrag"+n)
				.attr("transform","translate(0,0)");
		}
		function updateDepthAxis(data){
			mainx = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			})).range([0, graphHeight]);
			var depthAxis = d3.svg.axis()
				.scale(mainx)
				.orient("left")
				.ticks(10);
			var make_depth_axis = function () {
				return d3.svg.axis()
					.scale(mainx)
					.orient("left")
					.ticks(10);
			};
			d3.select("#depthAxisGrid")
				.call(make_depth_axis()
					.tickSize(-graphWidth-40, 0, 0)
					.tickFormat(""));
			d3.select("#depthAxisText")
				.call(depthAxis)
				.selectAll("text")  
					.style("text-anchor", "end")
					.style("font-size", "10px")
					.attr("dx", "-.8em")
					.attr("dy", ".15em")
					.attr("transform","translate(3,5)");
			for (i = 0;i<colNum;i++)
			{
				key = listColName[i];
				var minValue = d3.min(data, function(d) { return +d[key];} );
				var maxValue = d3.max(data, function(d) { return +d[key];} );
				text = minValue+key+maxValue;				
				d3.select("#range"+listColName[i])
					.attr("transform", "translate("+(posArray[i] + 50 + widthArray[i]/2)+",-20)")
					.text(key);
				resizeHeaderText(i, text);
			}
		}	
		function resizeHeaderText(n,text){
			textEle = document.getElementById("range"+listColName[i]);
			//textLength = textEle.getComputedTextLength();
			//newtext = text;
			//d3.select("#range"+listColName[i])
			//	.text(newtext);
		}
		function updateSlider(Y1, Y2){
			if(Y1>Y2){
				temp = Y1;
				Y1=Y2;
				Y2=Y1;
			}
			d3.select("#midhandle")
				.attr("y", Y1)
				.attr("height", Y2-Y1);
			d3.select("#tophandle")
				.attr("cy", Y1);
			d3.select("#bothandle")
				.attr("cy", Y2);
			d3.select("#curDepth")
				.attr("transform","translate(0,"+((Y1+Y2)/2)+")");
			d3.select("#startDepth")
				.text(startDepth.toFixed(1));
			d3.select("#endDepth")
				.text(endDepth.toFixed(1));
		}
		function addCrossHair(yCoord, x) {
			// Update vertical cross hair
			if(yCoord>=0 && yCoord<=graphHeight){
				d3.select("#line_crosshair")
					.attr("x1", 20)
					.attr("y1", yCoord)
					.attr("x2", 20+graphWidth)
					.attr("y2", yCoord)
					.style("display", "block");
				// Update text label
				var num = x.invert(yCoord);
				d3.select("#crosshair_text")
					.text(num.toFixed(1));
				var index = (num - minDepth)*10;
				var numData = runData[index.toFixed(0)];
				for (i = 0;i<colNum;i++)
				{
					key = listColName[i];
					d3.select("#"+listColName[i])
						.attr("transform", "translate("+(posArray[i] + 50 + widthArray[i]/2)+",-5)")
						.text(numData[key]);
				}
			}
		}
		function simplifyData(data, keyLine){
			var simpleData = [];
			for (i = 0;i<data.length;i++){
				var point = {};
				var currentData = data[i];
				point.x = currentData.DEPTH;
				point.y = currentData[keyLine];
				simpleData.push(point);
			}
			return simplify(simpleData, 0.1, true);
		}
		function drawGraph(n, graphName, data, keyLine, xpos, ypos){
			chartWidth = graphHeight;
			chartHeight = xpos[n+1] - xpos[n];
			var x = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			}))
				.range([0, chartWidth]);
			var y = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d[keyLine];
			}))
				.range([chartHeight-2, 0]);
			var zoomer = d3.behavior.zoom()
				.on("zoom", zoom);
			svg = d3.select("#charts")
				.append("svg:g")
				.attr("id", "graph"+n)
				.attr("class", graphName)
				.data([ {"xpos":xpos[n]+chartHeight, "ypos":ypos, "n":n} ])
				.attr("transform", "translate(" + (xpos[n]+chartHeight) + "," + ypos + ") rotate(90 60 60) ")
				.call(zoomer)
					.on("wheel.zoom",pan); 
			function zoom() {

			}
			var chartBody = svg.append("g");
			var line = d3.svg.line()
				.x(function (d) {
				return x(d.DEPTH);
			})
				.y(function (d) {
				return y(d[keyLine]);
			}).defined(function(d) { return !isNaN(d[keyLine]); });
			var lineName = "graphLine"+n;
			chartBody.append("svg:path")
				.attr("id", lineName)
				.datum(data)
				.attr("class", "line")
				.attr("stroke", listColor[n])
				.attr("d", line);
			if(listLineKind[n]!= 'solid'){
				chartBody.style("stroke-dasharray", ("3, 3"))
			}
			svg.append("svg:rect")
				.attr("x",-40)
				.attr("id", "rectHeader"+n)
				.attr("width", 40)
				.attr("height", chartHeight-2)
				.attr("class", "border")
				.attr("fill", "red")
				.attr("opacity", "0")
				.on("click",function () {
					settingMenu.css("top", "100px");
					settingMenu.css("left", "100px");
					settingMenu.css("visibility", "visible");
				});
			svg.append("svg:rect")
				.attr("id", "rectAll"+n)
				.attr("width", chartWidth)
				.attr("height", chartHeight-2)
				.attr("class", "border")
				.attr("fill", "blue")
				.attr("opacity", "0")
				.call(drag4);
			svg.append("svg:line")
				.attr("x1", -40)
				.attr("y1", -1)
				.attr("x2", chartWidth+40)
				.attr("y2", -1)
				.attr("stroke", "black")
				.attr("stroke-width", "0.4")
				.attr("opacity", "1");
			svg.append("svg:rect")
				.attr("id", "rectDrag"+n)
				.attr("width", chartWidth)
				.attr("height", 4)
				.attr("y", -2)
				.data([ {"xpos":0, "n":n} ])
				.attr("class", "dragaxis")
				.attr("fill", "black")
				.attr("opacity", "0")
				.call(drag3);
		};
		function drawSlider(data){			
			var x = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			}))
			.range([0, graphHeight]);
			svg = d3.select("#charts")
				.append("svg:g")
					.attr("id", "svgSlider")
					.attr("class", "saa")
					.attr("transform", "translate(1150,40)"); 
			var slider = svg.append("g")
				.attr("class", "slider");
			slider.append("line")
				.attr("class", "track")
				.attr("y1", 0)
				.attr("y2", graphHeight-10);
			svg.append("svg:rect")
				.attr("id", "midhandle")
				.attr("width", 6)
				.attr("height", sliderY2-sliderY1)
				.attr("x", -3)
				.attr("y", sliderY1)
				.attr("class", "border")
				.attr("fill", "red")
				.attr("opacity", "0.5")
				.call(drag5);
			svg.append("svg:circle")
				.attr("id", "tophandle")
				.attr("class", "handle")
				.attr("cy", sliderY1)
				.call(drag5);
			svg.append("svg:circle")
				.attr("id", "bothandle")
				.attr("class", "handle")
				.attr("cy", sliderY2)
				.call(drag5);
			var curDepth = svg.append("g")
				.attr("id","curDepth")
				.attr("transform","translate(0,"+((sliderY1+sliderY2)/2)+")");
			curDepth.append("line")
				.attr("x1",-10)
				.attr("y1",0)
				.attr("x2",-35)
				.attr("y2",0)
				.style("stroke", "black")
				.style("stroke-width", "0.5px");
			curDepth.append("text")
				.attr("id","startDepth")
				.attr("x",-38)
				.attr("y",-6)	
				.style("font-size", "10px")
				.text(startDepth.toFixed(1));
			curDepth.append("text")
				.attr("id","endDepth")
				.attr("x",-38)
				.attr("y",10)
				.style("font-size", "10px")
				.text(endDepth.toFixed(1));
			svg.append("text")
				.attr("x",10)
				.style("font-size", "10px")
				.text(minDepth);
			svg.append("text")
				.attr("x",10)
				.attr("y",470)
				.style("font-size", "10px")
				.text(maxDepth);
		}
		function drawOverview(n, graphName, data, keyLine, xpos, ypos){
			chartWidth = graphHeight;
			chartHeight = 50;
			var color = ["#56AE7C","#B681BE", "#C280B7", "#CE80B0", "#D76D8F", "#EAD67C"]; 
			var x = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			}))
				.range([0, chartWidth]);
			var y = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				if(d[keyLine]=="-999.0000") return null;
				return +d[keyLine];
			}))
				.range([chartHeight-2, 0]);
			svg = d3.select("#charts")
				.append("svg:g")
				.attr("id", "allGraph")
				.attr("class", graphName)
				.attr("transform", "translate(" + (xpos+chartHeight) + "," + ypos + ") rotate(90 60 60) "); 

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient("left")
				.ticks(0);
			svg.append("g")
				.attr("class", "y axis")
				.call(yAxis)
				.selectAll("text")  
					.style("text-anchor", "end")
					.style("font-size", "9px")
					.attr("dx", "-.8em")
					.attr("dy", ".15em")
					.attr("transform", "rotate(-90) translate(22,-10)" );
			var clip = svg.append("svg:clipPath")
				.attr("id", "clip")
				.append("svg:rect")
				.attr("x", 0)
				.attr("y", 0)
				.attr("class", "x brush")
				.attr("width", chartWidth)
				.attr("height", chartHeight-2);
			var chartBody = svg.append("g")
				.attr("clip-path", "url(#clip)");
			var line = d3.svg.line()
				.x(function (d) {
				return x(d.DEPTH);
			})
				.y(function (d) {
				return y(d[keyLine]);
			});	
			chartBody.append("svg:path")
				.datum(data)
				.attr("class", "line")
				.attr("stroke", color[n])
				.attr("d", line);
			svg.append("svg:rect")
				.attr("width", chartWidth)
				.attr("height", chartHeight)
				.attr("class", "border")
				.attr("fill", "white")
				.attr("opacity", "0");
		};
		function drawDepthAxis(data){
			height = graphHeight;
			var depth = d3.scale.linear()
				.domain(d3.extent(data, function (d) {
				return +d.DEPTH;
			})).range([0, height]);
			var depthAxis = d3.svg.axis()
				.scale(depth)
				.orient("left")
				.ticks(10);
			var make_depth_axis = function () {
				return d3.svg.axis()
					.scale(depth)
					.orient("left")
					.ticks(10);
			};
			svg = d3.select("#charts")
				.append("svg:g")
				.attr("id", "allGraph")
				.attr("transform","translate(70,40)");
			svg.append("g")
				.attr("id", "depthAxisText")
				.attr("class", "x axis")
				.attr("transform","translate(-20,0)")
				.call(depthAxis)
				.selectAll("text")  
					.style("text-anchor", "end")
					.style("font-size", "10px")
					.attr("dx", "-.8em")
					.attr("dy", ".15em")
					.attr("transform","translate(3,5)");
			svg.append("g")
				.attr("id", "depthAxisGrid")	
				.attr("class", "x grid")
				.attr("transform","translate(-20,0)")
				.call(make_depth_axis()
					.tickSize(-graphWidth-40, 0, 0)
					.tickFormat(""));
			svg.append("svg:rect")
				.attr("id", "showInfoRect")
				.attr("x", -70)
				.attr("y", 0)
				.attr("width", 90)
				.attr("height", height)
				.attr("fill", "red")
				.attr("opacity", "0")
				.call(drag2)
				.on("mousemove", function () {
					var yCoord = d3.mouse(this)[1];
					addCrossHair(yCoord, mainx);
				})
					.on("mouseover", function () {
					d3.selectAll(".crosshair").style("display", "block");
				})
					.on("mouseout", function () {
					d3.selectAll(".crosshair").style("display", "none");
				});
			svg.append("text")
				.attr("transform","translate(-40,-20)")
				.style("font-size", "10px")
				.text("DEPTH");
			var crossHair = svg.append("g")
				.attr("class", "crosshair");
			crossHair.append("line")
				.attr("id", "line_crosshair")
				.style("stroke", "black")
				.style("stroke-width", "0.5px")
				.style("display", "none");
			crossHair.append("text")
				.attr("id", "crosshair_text") 
				.attr("transform","translate(-40,-5)")
				.style("font-size", "10px");
			for (i = 0;i<colNum;i++)
			{
				key = listColName[i];
				var minValue = d3.min(data, function(d) { return +d[key];} );
				var maxValue = d3.max(data, function(d) { return +d[key];} );	
				text = minValue+key+maxValue;
				svg.append("text")
					.attr("id", "range"+listColName[i]) 
					.attr("text-anchor", "middle")
					.style("font-size", "10px")
					.attr("transform", "translate("+(posArray[i] + 50 + widthArray[i]/2)+",-20)")
					.text(key);
				resizeHeaderText(i,text);
			}
			for (i = 0;i<colNum;i++)
			{
				crossHair.append("text")
					.attr("id", listColName[i]) 
					.attr("text-anchor", "middle")
					.style("font-size", "10px");
			}
		}
	}

});
function wizardCtrl($scope) {
    $scope.user = {};
    $scope.processForm = function() {
        alert('information completed');
    };
}
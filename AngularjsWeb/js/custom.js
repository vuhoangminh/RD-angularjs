$(document).ready(function () {
	function fixCanvas(){
		var lineChartJs = $('.line-chart');
		var lineChartJsWidth = $(lineChartJs).width();
		var lineChartJsHeight = $(lineChartJs).height();
		$(lineChartJs).children().css({'width':lineChartJsWidth,'height':lineChartJsHeight})
	}
});
	
// $(document).ready(function() {
    // $('#table-database').DataTable( {
        // "paging":   false,
        // "info":     false,
		 // "columns": [
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "16%" },
			// { "width": "16%" }
		// ],
		// dom: 'Bfrtip',
		// buttons: {
			// buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		// },
		// // "pageLength": 10
		
		// // "scrollY": "300px",
        // // "scrollCollapse": true		
    // } );
	// // $('#myInputTextField').keyup(function(){
      // // oTable.search($(this).val()).draw() ;
// } );


// $(document).ready(function() {
    // $('#table-loaddatabase').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		 // "columns": [
			// { "width": "16%" },
			// { "width": "27%" },
			// { "width": "27%%" },
			// { "width": "15%" },
			// { "width": "15%" }
		  // ]		
    // } );
// } );


// $(document).ready(function() {
    // $('#table-parameter-3').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		 // "columns": [
			// { "width": "10%" },
			// { "width": "30%" },
			// { "width": "30%" },
			// { "width": "30%"}
		  // ]		
    // } );
// } );

// $(document).ready(function() {
    // $('#table-parameter-6').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		 // "columns": [
			// { "width": "5%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" }
		  // ]		
    // } );
// } );




// $(document).ready(function() {
	
	// $('#table-recentsession').DataTable( {
        // "paging":   false,
        // "info":     false,
		 // "columns": [
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "16%" },
			// { "width": "16%" }
		// ],
		// dom: 'Bfrtip',
		// buttons: {
			// buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		// },
		// // rowsGroup: [
			// // 'second:name',
			// // 0,
			// // 2
		// // ],
    // } );
	
    // $('#table-database').DataTable( {
        // "paging":   false,
        // "info":     false,
		 // "columns": [
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "18%" },
			// { "width": "16%" },
			// { "width": "16%" }
		// ],
		// dom: 'Bfrtip',
		// buttons: {
			// buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		// },
		// // rowsGroup: [
			// // 'second:name',
			// // 0,
			// // 2
		// // ],
    // } );



    // $('#table-loaddatabase').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		// "ordering": false,
		 // "columns": [
			// { "width": "16%" },
			// { "width": "27%" },
			// { "width": "27%%" },
			// { "width": "15%" },
			// { "width": "15%" }
		  // ]		
    // } );


    // $('#table-parameter-single').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		// "ordering": false,
		 // "columns": [
			// { "width": "5%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" }
		  // ]		
    // } );

    // $('#table-parameter-double').DataTable( {
        // "paging":   false,
        // "info":     false,
		// "bFilter": false,
		// "ordering": false,
		 // "columns": [
			// { "width": "5%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" },
			// { "width": "19%" }
		  // ]		
    // } );

// } );

$(window).resize(function () {
        var oSettings = table.fnSettings();
        oSettings.oScroll.sY = calcDataTableHeight(); 
        table.fnDraw();
});
   
// var calcDataTableHeight = function() {
	// return $(window).height()*35/100;
// };

var calcBootstrap = 

var calcDataTableHeight = function() {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    if (docHeight < winHeight) {
        return false;
    }
    else {
        if (winHeight <= 480 ) {
            return $(window).height()*0.2;
        }
        if (winHeight > 480  && winHeight <= 768 ) {
            return $(window).height()*0.33;
        }
        if (winHeight > 768  && winHeight <= 1080 ) {
            return $(window).height()*0.45;
        }
        if (winHeight > 1080  && winHeight <= 2160 ) {
            return $(window).height()*0.6;
        }
        if (winHeight > 2160  && winHeight <= 4320 ) {
            return $(window).height()*0.8;
        }
    }
};


var calcDataTablePageLength = function() {
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    if (docHeight < winHeight) {
        return false;
    }
    else {
        if (winHeight <= 480 ) {
            return 3;
        }
        if (winHeight > 480  && winHeight <= 768 ) {
            return 5;
        }
        if (winHeight > 768  && winHeight <= 1080 ) {
            return 10;
        }
        if (winHeight > 1080  && winHeight <= 2160 ) {
            return 15;
        }
        if (winHeight > 2160  && winHeight <= 4320 ) {
            return 20;
        }
    }
};


$(document).ready(function() {
	// alert(isPaging());
	// var width = document.getElementById('foo').offsetWidth;
	var table=$('#table-recentsession').DataTable( {
		
        // "paging":   isPaging(),
		"pagingType": "numbers",
        "info":     false,
		"bDestroy": true,
		// "pageLength": 10,
		"pageLength": calcDataTablePageLength(),
		 "columns": [
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "20%" },
			{ "width": "20%" }
		],
		dom: 'Bfrtip',
		buttons: {
			buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		},

		// fixedHeader: {
            // header: true,
            // footer: true
        // },
		
		// "sScrollY": calcDataTableHeight(),
		// "sScrollY": "10vh",
		scrollCollapse: true,
		
		// "sScrollY": calcDataTableHeight(),
        "iDisplayLength": 25,
        // "bJQueryUI": true,
        // "bStateSave": true
    } );
	
	$(window).bind('resize', function () {
		table.fnAdjustColumnSizing();
	} );

	$('#table-recentsession tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
	// Customize search box here
	$('#myInputTextField').keyup(function(){
      table.search($(this).val()).draw() ;
	});
	
	// var isPaging = function(){
		// if (table.data().count()/6>10){
			// return true;
		// }
		// else {
			// return false;
		// }
	// };
	
	// alert(isPaging());
	

} );


$(document).ready(function() {
    var table=$('#table-database').DataTable( {
        // "paging":   false,
		"pagingType": "numbers",
        "info":     false,
		"bDestroy": true,
		// "pageLength": 10,
		"pageLength": calcDataTablePageLength(),
		 "columns": [
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "15%" },
			{ "width": "20%" },
			{ "width": "20%" }
		],
		dom: 'Bfrtip',
		buttons: {
			buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		},
    } );
	
	$('#table-database tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );

$(document).ready(function() {
    $('#table-curve').DataTable( {
        "paging":   false,
        "info":     false,
		"bFilter": false,
		"ordering": false,
		"bDestroy": true,
		 "columns": [
			{ "width": "16%" },
			{ "width": "27%" },
			{ "width": "27%%" },
			{ "width": "15%" },
			{ "width": "15%" }
		  ],
		// dom: 'Bfrtip',
        // buttons: [
            // {
                // text: 'Save Inputs',
                // action: function ( e, dt, node, config ) {
                    // alert( 'Button activated' );
                // }
            // },
			// {
			// text: 'Load Inputs',
                // action: function ( e, dt, node, config ) {
                    // alert( 'Button activated' );
                // }
            // },
        // ]		  
    } );
} );

	


$(document).ready(function() {
	var icheckAll = $('input#icheck-all');
	var icheck = $('input.icheck');

	icheckAll.on('ifChecked ifUnchecked', function(event) {        
		if (event.type == 'ifChecked') {
			icheck.iCheck('check');
		} else {
			icheck.iCheck('uncheck');
		}
	});

	icheck.on('ifChanged', function(event){
		if(icheck.filter(':checked').length == icheck.length) {
			icheckAll.prop('checked', 'checked');
		} else {
			icheckAll.prop('checked', false);
		}
		icheckAll.iCheck('update');
	});
});

$(document).ready(function(){
   $("#newDatabaseBtn").click(function(){
       $("#newDatabasePopup").modal();
   });
});

// $(window).ready(function() {
    // var winHeight = 0;
    // var docHeight = 0;
    // winHeight = $(window).height();
    // alert("Height window: " + winHeight);
    // //var winWidth = $(window).width();
    // //var docWidth = $(document).width(); 
    // docHeight = $(document).height();
    // alert("Height doc: " + docHeight);
    // // var resolution = $(window).height()/$(document).height();
    // // alert("Resolution: " + resolution);
    // // var newDocHeight = docHeight*resolution;
    // // alert("New Height: " + newDocHeight);
    // $('html, body').css({
        // 'overflow': 'auto',
        // 'height': 'auto'
    // });    
    // if (docHeight - winHeight < 100) {
        // //alert("test");
        // $('html, body').css({
            // 'overflow': 'hidden',
            // 'height': '100%'
        // });    
    // }
// });

$(":file").filestyle({icon: false});

   
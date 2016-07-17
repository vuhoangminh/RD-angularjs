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




$(document).ready(function() {
	// var width = document.getElementById('foo').offsetWidth;
	var table=$('#table-recentsession').DataTable( {
        "paging":   false,
        "info":     false,
		"bDestroy": true,
		 "columns": [
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "16%" },
			{ "width": "16%" }
		],
		dom: 'Bfrtip',
		buttons: {
			buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		},

		// fixedHeader: {
            // header: true,
            // footer: true
        // },
		
		"sScrollY": "300px",
        // "iDisplayLength": 25,
        // "bJQueryUI": true,
        // "bStateSave": true
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
	
		
	$('#table-recentsession').DataTable().columns.adjust().draw();
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
	// Customize search box here
	$('#myInputTextField').keyup(function(){
      table.search($(this).val()).draw() ;
})
} );


$(document).ready(function() {
    var table=$('#table-database').DataTable( {
        "paging":   false,
        "info":     false,
		"bDestroy": true,
		 "columns": [
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "18%" },
			{ "width": "16%" },
			{ "width": "16%" }
		],
		dom: 'Bfrtip',
		buttons: {
			buttons: [ 'copy', 'excel', 'pdf', 'print' ]
		},
		// rowsGroup: [
			// 'second:name',
			// 0,
			// 2
		// ],
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
    $('#table-loaddatabase').DataTable( {
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
		  ]		
    } );
} );	
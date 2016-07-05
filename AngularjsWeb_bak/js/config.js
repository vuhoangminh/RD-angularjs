function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "views/index.html",
            data: {
                pageTitle: 'index'
            }
        })
        .state('ui', {
            abstract: true,
            url: "/ui",
            templateUrl: "views/common.html",
        })
        .state('ui.buttons', {
            url: "/buttons",
            templateUrl: "views/ui-buttons.html",
            data: {
                pageTitle: 'Buttons'
            }
        })
        .state('ui.sliders-progress', {
            url: "/sliders-progress",
            templateUrl: "views/ui-sliders-progress.html",
            data: {
                pageTitle: 'Sliders and Progress'
            }
        })
        .state('ui.modals-popups', {
            url: "/modals-popups",
            templateUrl: "views/ui-modals-popups.html",
            data: {
                pageTitle: 'Modals and Popups'
            }
        })
        .state('ui.tabs-accordions', {
            url: "/tabs-accordions",
            templateUrl: "views/ui-tabs-accordions.html",
            data: {
                pageTitle: 'Tabs and Accordions'
            }
        })
        .state('ui.alerts-notifications', {
            url: "/alerts-notifications",
            templateUrl: "views/ui-alerts-notifications.html",
            data: {
                pageTitle: 'Alerts and Notifications'
            }
        })
        .state('ui.nestable-lists', {
            url: "/nestable-lists",
            templateUrl: "views/ui-nestable-lists.html",
            data: {
                pageTitle: 'Nestable and Lists'
            }
        })
        .state('ui.panels', {
            url: "/panels",
            templateUrl: "views/ui-panels.html",
            data: {
                pageTitle: 'Panels'
            }
        })
        .state('ui.icons', {
            url: "/icons",
            templateUrl: "views/ui-icons.html",
            data: {
                pageTitle: 'Icons'
            }
        })
        .state('ui.typography', {
            url: "/typography",
            templateUrl: "views/ui-typography.html",
            data: {
                pageTitle: 'Typography'
            }
        })
        .state('forms', {
            abstract: true,
            url: "/forms",
            templateUrl: "views/common.html",
        })
        .state('forms.components', {
            url: "/components",
            templateUrl: "views/forms-components.html",
            data: {
                pageTitle: 'Components'
            }
        })
        .state('forms.validation', {
            url: "/validation",
            templateUrl: "views/forms-validation.html",
            data: {
                pageTitle: 'Validation'
            }
        })
        .state('forms.mask', {
            url: "/mask",
            templateUrl: "views/forms-mask.html",
            data: {
                pageTitle: 'Mask'
            }
        })
        .state('forms.wizard', {
            url: "/wizard",
            templateUrl: "views/forms-wizard.html",
            controller: wizardCtrl,
            data: {
            pageTitle: 'Wizard'
            }
        })
        .state('forms.wizard.step_one', {
            url: "/step_one",
            templateUrl: "views/wizard/step_one.html",
            data: {
                pageTitle: 'Wizard'
            }
        })
        .state('forms.wizard.step_two', {
            url: "/step_two",
            templateUrl: "views/wizard/step_two.html",
            data: {
                pageTitle: 'Wizard'
            }
        })
        .state('forms.wizard.step_three', {
            url: "/step_three",
            templateUrl: "views/wizard/step_three.html",
            data: {
                pageTitle: 'Wizard'
            }
        })
        .state('forms.multi-upload', {
            url: "/multi-upload",
            templateUrl: "views/forms-multi-upload.html",
            data: {
                pageTitle: 'Multiple File Upload'
            }
        })
        .state('forms.wysiwyg', {
            url: "/wysiwyg",
            templateUrl: "views/forms-wysiwyg.html",
            data: {
                pageTitle: 'WYSIWYG Editors'
            }
        })
        .state('tables', {
            abstract: true,
            url: "/tables",
            templateUrl: "views/common.html",
        })
        .state('tables.basic', {
            url: "/basic",
            templateUrl: "views/tables-basic.html",
            data: {
                pageTitle: 'Basic Table'
            }
        })
        .state('tables.data', {
            url: "/data",
            templateUrl: "views/tables-data.html",
            data: {
                pageTitle: 'Data Tables'
            }
        })
        .state('charts', {
            abstract: true,
            url: "/charts",
            templateUrl: "views/common.html",
        })
        .state('charts.chartjs', {
            url: "/chartjs",
            templateUrl: "views/charts-chartjs.html",
            data: {
                pageTitle: 'Chart.js'
            }
        })
        .state('charts.c3', {
            url: "/c3",
            templateUrl: "views/charts-c3.html",
            data: {
                pageTitle: 'C3 Charts'
            }
        })
        .state('charts.morris', {
            url: "/morris",
            templateUrl: "views/charts-morris.html",
            data: {
                pageTitle: 'Morris.js Charts'
            }
        })
        .state('charts.sparkline', {
            url: "/sparkline",
            templateUrl: "views/charts-sparkline.html",
            data: {
                pageTitle: 'Sparkline Charts'
            }
        })
        .state('mail', {
            abstract: true,
            url: "/mail",
            templateUrl: "views/common.html",
        })
        .state('mail.inbox', {
            url: "/inbox",
            templateUrl: "views/mail-inbox.html",
            data: {
                pageTitle: 'Mail Inbox'
            }
        })
        .state('mail.compose', {
            url: "/compose",
            templateUrl: "views/mail-compose.html",
            data: {
                pageTitle: 'Compose Mail'
            }
        })
        .state('maps', {
            abstract: true,
            url: "/maps",
            templateUrl: "views/common.html",
        })
        .state('maps.google', {
            url: "/google",
            templateUrl: "views/maps-google.html",
            data: {
                pageTitle: 'Google Maps'
            }
        })
        .state('maps.vector', {
            url: "/vector",
            templateUrl: "views/maps-vector.html",
            data: {
                pageTitle: 'Vector Maps'
            }
        })
        .state('pages', {
            abstract: true,
            url: "/pages",
            templateUrl: "views/common.html",
        })
        .state('pages.blank', {
            url: "/blank",
            templateUrl: "views/pages-blank.html",
            data: {
                pageTitle: 'Blank Page'
            }
        })
        .state('pages.profile', {
            url: "/profile",
            templateUrl: "views/pages-profile.html",
            data: {
                pageTitle: 'Profile'
            }
        })
        .state('animations', {
            url: "/animations",
            templateUrl: "views/animations.html",
            data: {
                pageTitle: 'Animations'
            }
        })
    
        //----------------------------------------------------------------
        //Customize from here
    
        //Database--------------------------------------------------------
        .state('database', {
            abstract: true,
            url: "/database",
            templateUrl: "views/common.html",
        })    
        .state('database.load', {
            url: "/load_database",
            templateUrl: "views/database-load.html",
            data: {
                pageTitle: 'Load Database'
            }
        })
        .state('database.new', {
            url: "/new_database",
            templateUrl: "views/database-new.html",
            data: {
                pageTitle: 'New Database'
            }
        })
        .state('database.location', {
            url: "/locate_database",
            templateUrl: "views/database-locate.html",
            data: {
                pageTitle: 'Set Default Location'
            }
        })
    
        //Well---------------------------------------------------------
        .state('well', {
            abstract: true,
            url: "/well",
            templateUrl: "views/common.html",
        })    
        .state('well.load', {
            url: "/load_well",
            templateUrl: "views/well-load.html",
            data: {
                pageTitle: 'Load Well'
            }
        })
        .state('well.new', {
            url: "/new_well",
            templateUrl: "views/well-new.html",
            data: {
                pageTitle: 'New Well'
            }
        })
        .state('well.select', {
            url: "/select_well",
            templateUrl: "views/well-select.html",
            data: {
                pageTitle: 'Select Well'
            }
        })    
        //Curve--------------------------------------------------------
        .state('curve', {
            abstract: true,
            url: "/curve",
            templateUrl: "views/common.html",
        })    
        .state('curve.load', {
            url: "/load_curve",
            templateUrl: "views/curve-load.html",
            data: {
                pageTitle: 'Load Curve'
            }
        })
        .state('curve.new', {
            url: "/new_curve",
            templateUrl: "views/curve-new.html",
            data: {
                pageTitle: 'New Curve'
            }
        })
        .state('curve.select', {
            url: "/select_curve",
            templateUrl: "views/curve-select.html",
            data: {
                pageTitle: 'Select Curve'
            }
        })    
        //Data---------------------------------------------------------
    
    
        //Parameter sets-----------------------------------------------
        .state('parameter', {
            abstract: true,
            url: "/parameter",
            templateUrl: "views/common.html",
        })    
        .state('parameter.clay', {
            url: "/parameter_clay",
            templateUrl: "views/parameter-clay.html",
            data: {
                pageTitle: 'Clay Volume Parameter Set'
            }
        })
        .state('parameter.porosity', {
            url: "/parameter_porosity",
            templateUrl: "views/parameter-porosity.html",
            data: {
                pageTitle: 'Porosity and Water Saturation Parameter Set'
            }
        })
        .state('parameter.cutoff', {
            url: "/parameter_cutoff",
            templateUrl: "views/parameter-cutoff.html",
            data: {
                pageTitle: 'Cutoffs and Summation Parameter Set'
            }
        })		
        .state('parameter.mineral', {
            url: "/parameter_mineral",
            templateUrl: "views/parameter-mineral.html",
            data: {
                pageTitle: 'Mineral Solver Parameter Set'
            }
        })		
        .state('parameter.basic', {
            url: "/parameter_basic",
            templateUrl: "views/parameter-basic.html",
            data: {
                pageTitle: 'Basic Log Analysis Parameter Set'
            }
        })	

        //Plot-----------------------------------------------------------		
        .state('plot', {
            abstract: true,
            url: "/plot",
            templateUrl: "views/common.html",
        })    
        .state('plot.log', {
            url: "/log_plot",
            templateUrl: "views/plot-log.html",
            data: {
                pageTitle: 'Log Plot'
            }
        })		
		.state('plot.histogram', {
            url: "/histogram_plot",
            templateUrl: "views/plot-histogram.html",
            data: {
                pageTitle: 'Histogram Plot'
            }
        })
		.state('plot.cross', {
            url: "/cross_plot",
            templateUrl: "views/plot-cross.html",
            data: {
                pageTitle: 'Cross Plot'
            }
        })		
		.state('plot.multicurve', {
            url: "/multicurve_crossplot",
            templateUrl: "views/plot-multicurve.html",
            data: {
                pageTitle: 'Multi-curve Cross Plot'
            }
        })		
		.state('plot.multiwell', {
            url: "/multiwell_correlationplot",
            templateUrl: "views/plot-multiwell.html",
            data: {
                pageTitle: 'Multi-well Correlation Plot	'
            }
        })		
}
angular
    .module('neuboard')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

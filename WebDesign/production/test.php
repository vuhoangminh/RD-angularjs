<?php
echo 
'
    <!-- sidebar menu -->
    <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
      <div class="menu_section">
        <h3 style="color:rgb(180,180,180);">Management</h3>
        <ul class="nav side-menu">
          <li><a><i class="fa fa-database"></i> Database <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="database_upload.html">New Database</a></li>
              <li><a>Load Database</a></li>
              <li><a>Set Default Location</a></li>
            </ul>
          </li>
          <li><a><i class="fa fa-bars"></i> Well <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a href="database_load.html">Load Wells from Database</a></li>
              <li><a>Select Well</a></li>
              <li><a>Create New Well</a></li>
            </ul>
          </li>

          <li><a><i class="fa fa-vine"></i> Curve <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Load Curves from Well</a></li>
              <li><a>Select Curve</a></li>    
              <li><a>Create New Curve</a></li>
            </ul>
          </li>

          <li><a><i class="fa fa-sticky-note-o"></i> Data <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Load Data</a></li>
              <li><a>Save Data</a></li>    
              <li><a>Edit Data</a></li>
            </ul>
          </li>

        </ul>
      </div>

      <div class="menu_section">
        <h3 style="color:rgb(180,180,180);">Process</h3>
        <ul class="nav side-menu">
          <li><a><i class="fa fa-pencil"></i> Parameter Sets <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Clay Volume</a></li>
              <li><a>Porosity and Water Saturation</a></li>    
              <li><a>Cutoffs and Summation</a></li>
              <li><a>Mineral Solver</a></li>
              <li><a>Basic Log Analysis</a></li>                        
            </ul>
          </li>

          <li><a><i class="fa fa-bar-chart-o"></i> Plot <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Log Plot</a></li>
              <li><a>Histogram</a></li>    
              <li><a>Crossplot</a></li>
              <li><a>Multi-curve Crossplot</a></li>
              <li><a>Multi-well Correlation Viewer</a></li>
            </ul>
          </li>

        </ul>
      </div>

      <div class="menu_section">
        <h3 style="color:rgb(180,180,180);">Computation</h3>
        <ul class="nav side-menu">

          <li><a><i class="fa fa-calculator"></i> Calculation <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>User-Defined Formula</a></li>
              <li><a>Basic Log Analysis Functions</a></li>    
              <li><a>Temperature Gradient</a></li>
              <li><a>True Vertical Depth Calculations</a></li>
              <li><a>True Vertical / Stratigraphic Thickness</a></li>
              <li><a>Curve from Zones / Parameters</a></li>      
              <li><a>Curve Integration</a></li>    
            </ul>
            </li>

          <li><a><i class="fa fa-check"></i> Correction <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Schlumberger Corrections</a></li>
              <li><a>Baker Atlas Corrections</a></li>    
              <li><a>Halliburton Corrections</a></li>
              <li><a>Baker Hughes Inteq Corrections</a></li>
            </ul>
          </li>

          <li><a><i class="fa fa-american-sign-language-interpreting"></i> Interpretation <span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <li><a>Basic Log Analysis</a></li>
              <li><a>Clay Volume</a></li>    
              <li><a>Clay Volume Parameters</a></li>
              <li><a>Porosity and Water Saturation Parameters</a></li>
              <li><a>Cutoffs and Summation</a></li>
              <li><a>Multi-well Cutoffs and Summation</a></li>                               
              <li><a>Cased Hole</a></li>          
            </ul>
          </li> 

        </ul>
      </div>     

      <div class="menu_section">
        <h3 style="color:rgb(180,180,180);">Quick Actions</h3>
        <div style="text-align:center; margin:auto;">
            <a data-toggle="tooltip" data-placement="top" title="Continue from previous section">
              <button class="button_invi" style="height: 50px; margin-top: 30px;">CONTINUE</button>
            </a>    
            <a data-toggle="tooltip" data-placement="top" title="Start new section">             
              <button class="button_invi" style="height: 50px;">START</button>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Flowchart of process">
              <button class="button_invi">Information</button>
            </a>    
        </div>
      </div>     

    </div>
    <!-- /sidebar menu -->
';
?>
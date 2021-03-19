
 
 
 <html>
	<head>

		<style>

			.dropdown {
			position: relative;
			display: inline-block;
			}

			.dropdown-content {
			display: none;
			position: absolute;
			background-color: #f9f9f9;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			padding: 12px 16px;
			z-index: 1;
			}

			.dropdown:hover .dropdown-content {
			display: block;
			}
		</style>
	
	</head>
 
 <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

			<nav class="navbar navbar-default">
				<ul>
				<li class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example 1
					</button>
					<ul class="dropdown-menu">
					<li><a href="#">HTML You can add dropdown menus to your navbar. Just add the dropdown code					
					<@liferay_util["include"] page=content_include />				
					
					</a></li>
				
					</ul>
				</li>
				<li class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example 2
					</button>
					<ul class="dropdown-menu">
					<li><a href="#">HTML 222222					
							The other product navigation menus (e.g., Product Menu, Simulation Menu)<br>
							are included in this tag, so specifying the above snippet will embed all<br>
							three menus into your theme. Embedding the User Personal Bar is slightly<br>
							different. Visit the Providing the User Personal Bar tutorial for more information.<br>

							You can reference a sample Control Menu Entry by visiting the Control Menu Entry article.<br>

							In this tutorial, you’ll learn how to create your own entries to customize the Control Menu.<br>
							Make sure to read the Adding Custom Panel Categories before beginning this tutorial.<br>
							This tutorial assumes you have knowledge on creating a panel category. You’ll begin 
							by creating an entry for the Control Menu.
												
					</a></li>
				
					</ul>
				</li>

					<li class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example 3
					</button>
					<ul class="dropdown-menu">
					<li><a href="#">HTML 333333	

												The other product navigation menus (e.g., Product Menu, Simulation Menu)<br>
							are included in this tag, so specifying the above snippet will embed all<br>
							three menus into your theme. Embedding the User Personal Bar is slightly<br>
							different. Visit the Providing the User Personal Bar tutorial for more information.<br>

							You can reference a sample Control Menu Entry by visiting the Control Menu Entry article.<br>

							In this tutorial, you’ll learn how to create your own entries to customize the Control Menu.<br>
							Make sure to read the Adding Custom Panel Categories before beginning this tutorial.<br>
							This tutorial assumes you have knowledge on creating a panel category. You’ll begin 
							by creating an entry for the Control Menu.
										
					
					
					</a></li>
				
					</ul>
				</li>
				</ul>
		</nav>

    </div>
	</html>



	





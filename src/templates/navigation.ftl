<div class="nav_login_wrapper darkbluebg">
	<div class="container-fluid navwrapper">
		  <div id="main-menu">
						<nav class="navbar navbar-default mynav">
							<!-- Collect the nav links, forms, and other content for toggling -->
							<div class="collapse navbar-collapse nopadding" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav menubar_ul_li">
								<#list nav_items as nav_item>
									<li class="current">
										<div class="main-menu-title">
											<a href="${nav_item.getURL()}" class="uppercasetext">
												<span class="icon icon-home" style="font-size: 18px;"></span>
											</a>
										</div>
									</li>
									<#if nav_item.hasChildren()>
										<#list nav_item.getChildren() as nav_child>
											<li class="parent">
												<div class="main-menu-title open-sub">
													<a href="${nav_child.getURL()}" class="uppercasetext">
														${nav_child.getName()?upper_case}
													</a>
												</div>
												<ul class="sub">
													<#if nav_child.hasChildren()>
														<#list nav_child.getChildren() as nav_child_2>
														<li><a href="${nav_child_2.getURL()}">${nav_child_2.getName()}</a></li>
														</#list>
													</#if>
												</ul>
											</li>
									</#list>
									</#if>
								</#list>
								</ul>
							</div><!-- /#bs-example-navbar-collapse-1 end-->
						</nav><!-- navbar -->
					</div>

		<div class="search-holder">
			<div class="width100percent searchbar"><@liferay.search/></div>

		</div>

	</div>
	<!-- navwrapper end -->
</div>
<!-- nav_login_wrapper end -->
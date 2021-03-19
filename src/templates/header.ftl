
  <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
			<a href="#" class="twitter"><i class="bi bi-twitter"></i></a>			
			<a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
			<a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
			<a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
		
	    </div>
      <div class="social-links d-none d-md-flex align-items-center">
			<i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
			<i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
			
      </div>
    </div>
  </section>


<div class = "mnp-portal-header">	
	<div class="logo_search_bar">      
	    <div id="stickylogomenubar">


 <div class="container-fluid container-xl d-flex align-items-center justify-content-between">



						<!--  <ul>
						   <li><span class="fa fa-facebook fontsize18 fontsize16_356px"></span></li>
						   <li><span class="fa fa-twitter fontsize18 fontsize16_356px"></span></li>
						   <li><span class="fa  fa-youtube-play fontsize18 fontsize16_356px"></span></li>
						 </ul> -->


						<!-- <ul class="fontctrl">
						  <li id="decreasefontSize">-</li>
						  <li>A</li>
						  <li id="increasefontSize">+</li>
						</ul> -->

						<ul class="fontctrl_with3A">
							<li id="decreasefontSize">A<sup class="sup">-<sup></sup></sup></li>
							<li id="normalfontSize">A</li>
							<li id="increasefontSize">A<sup class="sup">+</sup></li>
						</ul>


						<ul class="lang_select">
							<li>
								<span class="hideunder480">${theme_display.translate("mnp-language-text")}</span>
								&nbsp;
								<a href="/en${i18n_url}" class="skyblue_color">ENG</a>
									&nbsp;/&nbsp;
								<a href="/my${i18n_url}" class="dark_orange">မြန်မာ</a>								
							</li>
						</ul>						
						<#if !is_signed_in>
						<ul class="login">
							<li>
								<a href="${sign_in_url}" id="login">&nbsp;${theme_display.translate("mnp-login-text")}</a></li>
						</ul>

						<ul class="login">
							<li>
								<a href="${create_account_url}" id="register">${theme_display.translate("mnp-register-text")}</a>
							</li>
						</ul>
						<#else>
						<ul class="login">
							<li>
								<a href="${theme_display.getURLMyAccount().toString()}" id="login">&nbsp;${user_first_name}</a></li>
						</ul>

						<ul class="login">
							<li>
								<a href="${sign_out_url}" id="register">${theme_display.translate("mnp-logout-text")}</a>
							</li>
							
						</ul>
						
						<ul class="login">
							<li>
								<@liferay_portlet["runtime"]
								    instanceId="custom_navigation"
								    portletName="com_liferay_product_navigation_user_personal_bar_web_portlet_ProductNavigationUserPersonalBarPortlet"
								/>
							</li>
							
						</ul>
						
						</#if>





    </div>
           <#include "${full_templates_path}/navigation.ftl" />
    </div>   
    </div>     
</div>
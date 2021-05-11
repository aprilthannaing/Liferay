<#--
This file allows you to override and define new FreeMarker variables.
-->
<#-- Javascript Files -->
<#assign 
	js_bootstrap_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/bootstrap.js"))
	js_bootstrap_min_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/bootstrap.min.js"))
	js_jquery_min_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/jquery.min.js"))
	js_jquery_mobile_custom_min_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/jquery.mobile.custom.min.js"))
	js_slick_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/slick.js"))
	js_magnific_popup_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/jquery.magnific-popup.min.js"))
	js_jquery_marquee_min_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/jquery.marquee.min.js"))
	js_moment_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/moment.min.js"))
	js_star_rating_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/star-rating.js"))
	js_core_main_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/core_main.js"))
	js_custom_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/custom_main.js"))
	main_js_file = htmlUtil.escape(portalUtil.getStaticResourceURL(request, "${javascript_folder}/main.js"))


	
/>

<#assign
	layout = theme_display.getLayout()
	isHome = layout.isRootLayout()
	create_account_url =  portalUtil.getCreateAccountURL(request, themeDisplay) 
/>

<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title}</title>
	<meta content="initial-scale=1.0, width=device-width" name="viewport" />
	
	<#assign i = 0>
	<#list site_current_urls?split("?") as x>
		<#if i == 0>
			<meta property="og:url" content="${x}" />
	        <#assign i++>
	    </#if>
	</#list>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${the_title}" />
	
	
  <!-- Vendor CSS Files -->
  <link href="${javascript_folder}/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="${javascript_folder}/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="${javascript_folder}/aos/aos.css" rel="stylesheet">
  <link href="${javascript_folder}/remixicon/remixicon.css" rel="stylesheet">
  <link href="${javascript_folder}/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="${javascript_folder}/glightbox/css/glightbox.min.css" rel="stylesheet">
<<<<<<< Updated upstream
  <link href="${javascript_folder}/boxicons/css/boxicons.min.css" rel="stylesheet">  
  
  <!-- Template Main CSS File -->
  
=======
  <link href="${javascript_folder}/boxicons/css/boxicons.min.css" rel="stylesheet">
  

  <!-- Template Main CSS File -->
  <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

>>>>>>> Stashed changes
  <link href="${css_folder}/style.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />  
  <link href="${javascript_folder}/fontawesome-free-5.15.3-web/css/all.css" rel="stylesheet"> <!--load all styles -->

  <@liferay_util["include"] page=top_head_include />	
</head>

<body class="${css_class}">

<div class="custom-quick-access">
	<@liferay_ui["quick-access"] contentId="#main-content" />
</div>

<div class="custom-include">
	<@liferay_util["include"] page=body_top_include />
</div>

<div class="custom-control-menu">
	<@liferay.control_menu />
</div>
<div class="mnp_body">
	<div class="container-fluid container-full-width" id="wrapper">
		  <#include "${full_templates_path}/header.ftl" />

		<section id="content" >
			<h1 class="hide-accessible">${the_title}</h1>
			<#if !isHome>
				<nav id="breadcrumbs">
					<@liferay.breadcrumbs />
				</nav>
			</#if>

			
			<#if selectable>
				<@liferay_util["include"] page=content_include />
			<#else>
				${portletDisplay.recycle()}

				${portletDisplay.setTitle(the_title)}

				<@liferay_theme["wrap-portlet"] page="portlet.ftl">
						<@liferay_util["include"] page=content_include />
				</@>
			</#if>

		</section>
	</div>
</div>
<div class="mnp_body" style="background-color: #f3f3f9;">
   	<@liferay_portlet["runtime"]
          instanceId="breaking_news"
          portletProviderAction=portletProviderAction.VIEW
          portletName="com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet"
     /> 
 	<#assign VOID = freeMarkerPortletPreferences.reset()>
	<footer class="row footer_content" role="contentinfo" id="footer">
		<#include "${full_templates_path}/footer.ftl" />
	</footer>
</div>
<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<script type="text/javascript" src="${js_jquery_min_file}"></script>
<script type="text/javascript" src="${js_jquery_mobile_custom_min_file}"></script>
<script type="text/javascript" src="${js_slick_file}"></script>
<script type="text/javascript" src="${js_magnific_popup_file}"></script>
<script type="text/javascript" src="${js_jquery_marquee_min_file}"></script>
<script type="text/javascript" src="${js_moment_file}"></script>
<script type="text/javascript" src="${js_star_rating_file}"></script>
<script type="text/javascript" src="${js_core_main_file}"></script>
<script type="text/javascript" src="${js_custom_file}"></script>
<<<<<<< Updated upstream
<script type="text/javascript" src="${main_js_file}"></script>
=======
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>


>>>>>>> Stashed changes

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>

 </body>
</html>

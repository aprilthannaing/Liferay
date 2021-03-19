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
  <link href="${javascript_folder}/boxicons/css/boxicons.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="${css_folder}/style.css" rel="stylesheet">
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

		<section id="content">
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
<div class="mnp_body">
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

</body>

</html>

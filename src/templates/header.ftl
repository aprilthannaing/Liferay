
 <div id="topbar" class="d-flex align-items-center">
    <div class="container d-flex social">
	
       <div class="social-links d-none d-md-block socialLink">	
	    <a href="#" class="facebook mycontent-right mycontent-left"><i class="bi bi-facebook"></i></a>
        <a href="#" class="twitter mycontent-right"><i class="bi bi-twitter"></i></a>
        <a href="#" class="linkedin mycontent-right"><i class="bi bi-linkedin"></i></i></a>
        <a href="#" class="instagram mycontent-right"><i class="bi bi-instagram"></i></a>
      </div>
	  <div class="contact-info d-flex align-items-center">   

		<div class="dropdown lan">
		<a class="dropdown-toggle language" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    <img src="${images_folder}/my_MM.png" alt="" class="img-fluid img">မြန်မာ</a>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div class="enlang">
    	<img src="${images_folder}/en_US.png" alt="" class="img-fluid img1">
			<span>English</span>
      </div>
			
		</div>
		</div>




	    <i class="bi bi-box-arrow-in-left mycontent-left login"></i> <a class="logina" href="#">အကောင့်၀င်ရန်</a>
	    <i class="bi bi-box-arrow-in-left mycontent-left login"></i> <a href="#">မှတ်ပုံတင်ရန်</a>

	  </div>
    
    </div>
	<div style="height: 100px;">
	</div>
	

  </div>
   <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <h1><a href="index.html">Mamba</a></h1>
      </div>


    </div>
  </header><!-- End Header -->

  
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div class="hero-container">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

          <!-- Slide 1 -->
          <div class="carousel-item active" style="background-image: url('assets/img/slide/slide-1.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Mamba</span></h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

          <!-- Slide 2 -->
          <div class="carousel-item" style="background-image: url('assets/img/slide/slide-2.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

          <!-- Slide 3 -->
          <div class="carousel-item" style="background-image: url('assets/img/slide/slide-3.jpg');">
            <div class="carousel-container">
              <div class="carousel-content container">
                <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section><!-- End Hero -->

<!-- div class = "mnp-portal-header">	
	<div class="logo_search_bar">      
	    <div id="stickylogomenubar">

 <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
				

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
</div -->
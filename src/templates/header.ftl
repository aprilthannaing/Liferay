<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
>>>>>>> 0e4380a7d76cdddf18c1b905aaccb807e2b7498b
>>>>>>> 9259110b093f9a1001116086d87c14401af420f3
<div class="mnp-portal-header">
    <div class="logo_search_bar">
        <div>

<<<<<<< Updated upstream
            <div id="topbar" class="d-flex align-items-center">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-8 social-links d-none d-md-block differ">
                            <a href="#" class="facebook mycontent-right mycontent-left"><i
                                    class="bi bi-facebook"></i></a>
                            <a href="#" class="twitter mycontent-right"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="linkedin mycontent-right"><i class="bi bi-linkedin"></i></i></a>
                            <a href="#" class="instagram mycontent-right"><i class="bi bi-instagram"></i></a>
                        </div>
                        <div class="col-4 contact-info d-flex align-items-center" id="account">

                            <i class="fa fa-language large" aria-hidden="true"></i>

                            <div id="image-dropdown" class="dropdown lan mycontent-right">
                                <div data-toggle="dropdown">
                                    <a class="dropdown-toggle language" href="#" role="button" id="dropdownMenuLink"
                                        aria-haspopup="true" aria-expanded="false">

                                        <img id="nationImg" src="${images_folder}/my_MM.png" alt=""
                                            class="img-fluid img">
                                        <span id="language">မြန်မာ</span>
                                    </a>
                                </div>
                                <div id="mya" class="dropdown-menu language" aria-labelledby="dropdownMenuLink"
                                    onclick="myfuunc(this);">
                                    <div class="enlang">
                                        <a href="http://mnp.gov.mm/my">
                                            <img src="${images_folder}/my_MM.png" alt="" class="img-fluid img1">
                                            <span class="span">မြန်မာ</span></a>

                                    </div>
                                </div>
                                <div id="eng" class="dropdown-menu language" aria-labelledby="dropdownMenuLink"
                                    onclick="myfuunc(this);">
                                    <div class="enlang">
                                        <a href="http://mnp.gov.mm/en">
                                            <img src="${images_folder}/en_US.png" alt="" class="img-fluid img1">
                                            <span class="span">English</span></a>
                                    </div>
                                </div>
                            </div>

                            <#if !is_signed_in>

                                <i class="bi bi-box-arrow-in-left acc"></i>
                                <a class="logina" href="${sign_in_url}" id="login">အကောင့်၀င်ရန်</a>

                                <i class="fa fa-registered mycontent-left register" aria-hidden="true"></i>
                                <a href="${create_account_url}" id="register">မှတ်ပုံတင်ရန်</a>

                                <#else>

                                    <i class="fa fa-sign-out register" aria-hidden="true"></i>
                                    <a class="logina" href="${sign_out_url}" id="logout">အကောင့်ထွက်ရန်</a>


                                    <i class="fa fa-user mycontent-left register" aria-hidden="true"></i>
                                    <a href="${theme_display.getURLMyAccount().toString()}">&nbsp;${user_first_name}</a>
                            </#if>
                        </div>

                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


            <div class="container-fluid">
                <div class="col-12 head">
                    <div class="imgupper">
                        <a href="${company_url}"><img src="${images_folder}/State_seal_of_Myanmar.png"
                                class="floatleft logo"></a>
                        <div>
                            <span id="temprature" class="floatright temp">35</span>
                            <a href="" id="weather"><img src="${images_folder}/weather.png"
                                    class="floatright weatherImg">
                            </a>
                        </div>

                    </div>
                    <div class="titleupper">
                        <span class="titlefont">MYANMAR <span class="boldfont">NATIONAL PORTAL</span></span>

                    </div>
                    <span class="floatright address">NAY PYI TAW, MM</span><br>
                    <span class="floatright"></span><br>
                    <span id="dateTime" class="floatright date">2:33pm, Saturday, December 2020</span>
                </div>

                <nav class="navbar navbar-default mynav" style="clear: both;min-height: auto;">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar top_bar"></span>
                            <span class="icon-bar middle_bar"></span>
                            <span class="icon-bar bottom_bar"></span>
                        </button>
                    </div>
                </nav>
            </div>


            <#include "${full_templates_path}/navigation.ftl" />
        </div>


        <!-- search form -->
        <div id="main_advanced_search_wrapper" class="display_flex event_search_bar nopadding row sub">
            <div class="container-fluid">

                <div class="width50 search-holder">
                    <div class="searchbar">
                        <input type="text" placeholder="Keyword">
                        <!-- <span class="fa fa-search"></span> -->
                    </div>
                </div>

                <div class="search-holder cate_dropdown">
                    <div class="searchbar">
                        <!--  <input type="text" placeholder="Emergency Contact Number" class="whitetext"> -->
                        <select id="cate_select">
                            <option>About Myanmar</option>
                            <option>Information</option>
                            <option>Services</option>
                            <option>Government</option>
                            <option>Resources</option>
                            <option>News & Media</option>
                        </select>
                        <span class="cus_cate_select cus_select full-width">Categories</span>
                    </div>
                </div>

                <a href="#" class="subscribe_btn">ရှာဖွေရန်</a>
            </div>

        </div>
        <!-- search form end -->


    </div>
    <!-- logo_search_bar end-->
</div>
=======

=======
>>>>>>> Stashed changes
 <div id="topbar" class="d-flex align-items-center">
    <div class="container d-flex social">
	
       <div class="social-links d-none d-md-block socialLink">	
	    <a href="#" class="facebook mycontent-right mycontent-left"><i class="bi bi-facebook"></i></a>
        <a href="#" class="twitter mycontent-right"><i class="bi bi-twitter"></i></a>
        <a href="#" class="linkedin mycontent-right"><i class="bi bi-linkedin"></i></i></a>
        <a href="#" class="instagram mycontent-right"><i class="bi bi-instagram"></i></a>
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
			
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
<<<<<<< Updated upstream
>>>>>>> 0e4380a7d76cdddf18c1b905aaccb807e2b7498b
>>>>>>> 9259110b093f9a1001116086d87c14401af420f3


            <div class="container-fluid">
                <div class="col-12 head">
                    <div class="imgupper">
                        <a href="${company_url}"><img src="${images_folder}/State_seal_of_Myanmar.png"
                                class="floatleft logo"></a>
                        <div>
                            <span id="temprature" class="floatright temp">35</span>
                            <a href="" id="weather"><img src="${images_folder}/weather.png"
                                    class="floatright weatherImg">
                            </a>
                        </div>

                    </div>
                    <div class="titleupper">
                        <span class="titlefont">MYANMAR <span class="boldfont">NATIONAL PORTAL</span></span>

                    </div>
                    <span class="floatright address">NAY PYI TAW, MM</span><br>
                    <span class="floatright"></span><br>
                    <span id="dateTime" class="floatright date">2:33pm, Saturday, December 2020</span>
                </div>

                <nav class="navbar navbar-default mynav" style="clear: both;min-height: auto;">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar top_bar"></span>
                            <span class="icon-bar middle_bar"></span>
                            <span class="icon-bar bottom_bar"></span>
                        </button>
                    </div>
                </nav>
            </div>
<<<<<<< HEAD


            <#include "${full_templates_path}/navigation.ftl" />
        </div>
=======


            <#include "${full_templates_path}/navigation.ftl" />
        </div>


        <!-- search form -->
        <div id="main_advanced_search_wrapper" class="display_flex event_search_bar nopadding row sub">
            <div class="container-fluid">
>>>>>>> 9259110b093f9a1001116086d87c14401af420f3

                <div class="width50 search-holder">
                    <div class="searchbar">
                        <input type="text" placeholder="Keyword">
                        <!-- <span class="fa fa-search"></span> -->
                    </div>
                </div>

<<<<<<< HEAD
        <!-- search form -->
        <div id="main_advanced_search_wrapper" class="display_flex event_search_bar nopadding row sub">
            <div class="container-fluid">

                <div class="width50 search-holder">
                    <div class="searchbar">
                        <input type="text" placeholder="Keyword">
                        <!-- <span class="fa fa-search"></span> -->
                    </div>
                </div>

=======
>>>>>>> 9259110b093f9a1001116086d87c14401af420f3
                <div class="search-holder cate_dropdown">
                    <div class="searchbar">
                        <!--  <input type="text" placeholder="Emergency Contact Number" class="whitetext"> -->
                        <select id="cate_select">
                            <option>About Myanmar</option>
                            <option>Information</option>
                            <option>Services</option>
                            <option>Government</option>
                            <option>Resources</option>
                            <option>News & Media</option>
                        </select>
                        <span class="cus_cate_select cus_select full-width">Categories</span>
                    </div>
                </div>
<<<<<<< HEAD

                <a href="#" class="subscribe_btn">ရှာဖွေရန်</a>
            </div>
=======


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
>>>>>>> Stashed changes

=======

                <a href="#" class="subscribe_btn">ရှာဖွေရန်</a>
            </div>

>>>>>>> 9259110b093f9a1001116086d87c14401af420f3
        </div>
        <!-- search form end -->


    </div>
<<<<<<< HEAD
    <!-- logo_search_bar end-->
</div>
=======
<<<<<<< HEAD
    <!-- logo_search_bar end-->
</div>
=======
           <#include "${full_templates_path}/navigation.ftl" />
    </div>   
    </div>     
<<<<<<< Updated upstream
</div -->
>>>>>>> Stashed changes
>>>>>>> 0e4380a7d76cdddf18c1b905aaccb807e2b7498b
>>>>>>> 9259110b093f9a1001116086d87c14401af420f3
=======
</div -->
>>>>>>> Stashed changes

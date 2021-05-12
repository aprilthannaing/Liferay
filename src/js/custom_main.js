$(function () {

	console.log("onload !!!!!!!!!!!!!!!!!!!!!!!")

	var title = document.getElementById("title");
	if (title != null) {
		title.href = title.href.replace("home", "news-media/news/latest-news");
	}

	var title1 = document.getElementById("title1");	
	if (title1 != null) {
		title1.href = title1.href.replace("home", "news-media/news/latest-news");
	}	


	$('div[onload]').trigger('onload');
	var url = "http://mnp.gov.mm/my";
	var mainUrl = "http://mnp.gov.mm";

	var searchBtn = document.getElementsByClassName("fa fa-search")[0];
	var searchBtn1 = document.getElementsByClassName("fa fa-search")[1];

	formLink(mainUrl);
	getDateTime();
	changeIcon(searchBtn);
	changeIcon(searchBtn1);

	//link for mm
	var weather = document.getElementById("weather");
	weather.href = "https://www.moezala.gov.mm/my/daily-weather-forecast%20";
	link(url);

	if (window.location.href.includes("/en")) {

		//link for eng
		var weather = document.getElementById("weather");
		weather.href = "https://www.moezala.gov.mm/daily-weather-forecast%20";
		url = "http://mnp.gov.mm/en";
		link(url);
		formLink(url);
		formLinkEngText();

		var language = document.getElementById("language");
		var nationImg = document.getElementById("nationImg");
		language.innerHTML = " English";
		nationImg.src = mainUrl + "/o/mnp-theme/images/en_US.png"
		var mainDIVV = document.getElementById("image-dropdown");
		var eng = document.getElementById("eng");
		eng.parentNode.removeChild(eng);
		engLanguage();
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
});


function link(url) {

	console.log("change url !!!!!!!!!!", url);

	var discussions = document.getElementById("discussions");
	var poll = document.getElementById("poll");
	var blog = document.getElementById("blog");
	var websites = document.getElementById("websites");


	var contact = document.getElementById("contact");
	var terms = document.getElementById("terms");
	var privacy = document.getElementById("privacy");
	var site = document.getElementById("site");
	var sugesstion = document.getElementById("sugesstion");


	/*footer */
	discussions.href = url + "/discussions";
	poll.href = url + "/polls-survey";
	blog.href = url + "/blogs";
	websites.href = url + "/government-website";

	contact.href = url + "/contact-us";
	terms.href = url + "/terms-of-use";
	privacy.href = url + "/privacy-policy";
	site.href = url + "/sitemap";
	sugesstion.href = url + "/feedback";


	console.log("discussions.href !!!!!!!!!!", discussions.href)
	console.log("poll.href !!!!!!!!!!", poll.href)

}

function vacancy() {
	console.log("testing vancancy !!!!!!!!!!!!");
	var tender = document.getElementById("tender");
	tender.style.display = "none";
	var vancancy = document.getElementById("vancancy");
	vancancy.style.display = "block";

	var parentTender = document.getElementById("tender").parentElement;
	parentTender.className = "font18 bold";

}

function tender() {
	console.log("testing tender !!!!!!!!!!!!");
	var vancancy = document.getElementById("vancancy");
	vancancy.style.display = "none";
	var tender = document.getElementById("tender");
	tender.style.display = "block";

}

function formLinkEngText() {
	document.getElementById("forms").childNodes[3].innerHTML = "FORMS";
	document.getElementById("documents").childNodes[4].innerHTML = "DOCUMENTS";
	document.getElementById("holidies").childNodes[3].innerHTML = "Upcoming Public Holidays";
	document.getElementById("events").childNodes[2].innerHTML = "Upcoming Events";
	document.getElementById("emergency").childNodes[3].innerHTML = "Emergency Contacts";
}

function formLink(mainUrl) {

	var forms = document.getElementById("forms");
	var documents = document.getElementById("documents");
	var holidies = document.getElementById("holidies");
	var events = document.getElementById("events");
	var mobileservices = document.getElementById("mobileservices");

	forms.href = mainUrl + "/forms";
	documents.href = mainUrl + "/documents";
	holidies.href = mainUrl + "/upcoming-holidays";
	events.href = mainUrl + "/upcoming-events";
	mobileservices.href = mainUrl + "/mobile-services";
}

function changeIcon(searchBtn) {
	var d = document.createElement('i');
	d.className = searchBtn.className;
	searchBtn.parentNode.replaceChild(d, searchBtn);
}

function getDateTime() {


	/*date time format */
	var dateTime = new Date().toLocaleString().replace(",", "").replace(/:.. /, " ");
	var time = dateTime.split(" ")[1] + " " + dateTime.split(" ")[2];
	var customDateTime = time + ", ";
	var dates = Date().toLocaleString().split(" ");
	customDateTime = customDateTime + getFullDay(dates[0]) + ", " + getFullMonth(dates[1]) + " " + dates[3];
	/* datetime end */

	var dateTimeFormat = document.getElementById("dateTime");
	dateTimeFormat.innerHTML = customDateTime;

}


function engLanguage() {
	var account = document.getElementById("account");
	account.style.paddingLeft = "75px";

	var lan = document.getElementById("image-dropdown");
	lan.style.padding = "1% 7% 2% 2%";


	//header
	var login = document.getElementById("login");
	var register = document.getElementById("register");
	var logout = document.getElementById("logout");

	if (login != null)
		login.innerHTML = "Login";

	if (register != null)
		register.innerHTML = "Register";

	if (logout != null)
		logout.innerHTML = "Logout";

	//footer
	var users = document.getElementById("users");
	users.innerHTML = "Registered Users";

	var discussions = document.getElementById("discussions");
	var poll = document.getElementById("poll");
	var blog = document.getElementById("blog");
	var websites = document.getElementById("websites");
	var directory = document.getElementById("directory");
	var subscribe = document.getElementById("subscribe");
	var subscribe_btn = document.getElementById("subscribe_btn");
	var SubscriberEmail = document.getElementById("SubscriberEmail");
	var workdirectory = document.getElementById("workdirectory");

	discussions.innerHTML = "Discussions";
	poll.innerHTML = "Polls & Survey";
	blog.innerHTML = "Blogs";
	websites.innerHTML = "Government Websites";
	directory.innerHTML = "Government Directory";
	subscribe.innerHTML = "Subscribe to us";
	subscribe_btn.innerHTML = "Subscribe";


	SubscriberEmail.placeholder = "Email (or) Mobile Number";
	workdirectory.placeholder = "Keyword";


	var contact = document.getElementById("contact");
	var terms = document.getElementById("terms");
	var privacy = document.getElementById("privacy");
	var site = document.getElementById("site");
	var sugesstion = document.getElementById("sugesstion");
	var nation = document.getElementById("nation");

	contact.innerHTML = "Contact us";
	contact.style.padding = "0px 8px 0px 0px";
	terms.innerHTML = "Terms of use";
	privacy.innerHTML = "Privacy policy";
	site.innerHTML = "Sitemap";
	sugesstion.innerHTML = "Feedback";
	nation.innerHTML = "© 2018 Government of Republic of the Union of Myanmar.";
	nation.style.padding = "0px 60px 0px 0px";

}

function showPosition(position) {
	/*temprature*/

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/onecall?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&exclude=minutely&units=metric&appid=70e7e52fe58141f612df7bcf75741a7e",
		type: "GET",
		data: $.param({
		}),
		complete: function (result) {
			var json = JSON.parse(result.responseText);
			var temp = json.current.temp + "";
			var temprature = document.getElementById("temprature");
			var first = temp.split(".")[0];
			var second = temp.split(".")[1];
			if (parseInt(second.substring(0, 1)) > 5)
				first = parseInt(first) + 1;
			temprature.innerHTML = first;

			console.log("temperature !!!!!!!!!!", first)
		}
	});

	/*temprature end*/
}


function getFullDay(day) {
	switch (day) {
		case "Sun": return "Sunday"; break;
		case "Mon": return "Monday"; break;
		case "Tue": return "Tuesday"; break;
		case "Wed": return "Wednesday"; break;
		case "Thu": return "Thursday"; break;
		case "Fri": return "Friday"; break;
		case "Sat": return "Saturday"; break;
	}
	return "";
}

function getFullMonth(month) {
	switch (month) {
		case "Jan": return "January"; break;
		case "Feb": return "February"; break;
		case "Mar": return "March"; break;
		case "Apr": return "April"; break;
		case "May": return "May"; break;
		case "Jun": return "June"; break;
		case "Jul": return "July"; break;
		case "Aug": return "August"; break;
		case "Sep": return "September"; break;
		case "Oct": return "October"; break;
		case "Nov": return "November"; break;
		case "Dec": return "December"; break;
	}
	return "";
}




/* Address 

var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// This is making the Geocode request
var geocoder = new google.maps.Geocoder();
geocoder.geocode({ 'latLng': latlng }, (results, status) => {
	if (status !== google.maps.GeocoderStatus.OK) {
		alert(status);
	}
	// This is checking to see if the Geoeode Status is OK before proceeding
	if (status == google.maps.GeocoderStatus.OK) {
		console.log(results);
		var address = (results[0].formatted_address);
		console.log("address !!!!!!!!!", address)
	}
})
*/




//marquee js - anhbt21		
/*  function marqueeText(){
	  var i = 0,
	step = 3,
	space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	var m = document.getElementById("marquee");
		
		if(m === null || m === undefined)
			return;
		
		var t = m.innerHTML; //text
		m.innerHTML = t + space;
		m.style.position = 'absolute'; // http://stackoverflow.com/questions/2057682/determine-pixel-length-of-string-in-javascript-jquery/2057789#2057789
		var width = (m.clientWidth + 1);
		m.style.position = '';
		m.innerHTML = t + space + t + space + t + space + t + space + t + space + t + space + t + space;
		m.addEventListener('mouseenter', function () {
			step = 0;
		}, true);
		m.addEventListener('mouseleave', function () {
			step = 3;
		}, true);
		
		var myVar = setInterval(function(){
			i = i < width ? i + step : 1;
			m.style.marginLeft = -i + 'px';				
		}, 35);
  }*/
//end marquee js

(function ($) {
	"use strict"; // Start of use strict
	$(document).ready(function () {
		$('a[data-toggle="tab"]').on('click', function (e) {
			localStorage.setItem('activeTab', $(e.target).attr('href'));
		});
		var activeTab = localStorage.getItem('activeTab');

		if (activeTab) {
			console.log(activeTab);
			// $('#myTab a[href="' + activeTab + '"]').tab('show');
			document.querySelector('#myTab a[href="' + activeTab + '"]').click();
		}
		$('table').wrap('<div class="table-responsive"></div>');
		function getUrlParameter(name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			var results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		};

		$('.has-sorted .custum_pagination li a').on('click', function (event) {
			var url = window.location.href;
			var urlPaging = $(this).attr('href');
			var sortedParam = getUrlParameter('sorted');
			urlPaging += (url.indexOf("?") == -1) ? '&sorted=latest' : '&sorted=' + sortedParam;
			window.location.href = urlPaging;
		});

		$('.has-sorted #reg_select').change(function () {
			var paramName = "sorted";
			var dataValue = document.getElementById('reg_select').value;
			/*var currentLocation = window.location.pathname.indexOf("web");*/
			var url = window.location.href;
			var n = url.indexOf("?");
			if (n < 0) {
				url = url + '?' + paramName + '=' + dataValue
				window.location.href = url;
			} else {
				var a = url.substr(0, n);
				a = a + '?' + paramName + '=' + dataValue

				window.location.href = a;
			}
			/*url.searchParams.set('sorted', dataValue);*/

		});


		//listener event click toggle menu and resize navigator
		/*	  $(".control-menu-nav-category").click(function(e){
				  if($("#_com_liferay_product_navigation_product_menu_web_portlet_ProductMenuPortlet_sidenavSliderId").hasClass("open")) {
					  $("#stickylogomenubar").removeClass("closedHeader");
					}
				  
				  if($("#_com_liferay_product_navigation_product_menu_web_portlet_ProductMenuPortlet_sidenavSliderId").hasClass("closed")) {
					  $("#stickylogomenubar").addClass("closedHeader");
					}
				  
				  else {
					  $("#stickylogomenubar").removeClass("closedHeader");
				  }
			  });*/


		$("#subscribe_btn").click(function (event) {
			event.preventDefault();
			var subscriberEmail = $("#SubscriberEmail").val();
			if (subscriberEmail) {

				if (isEmailValid(subscriberEmail) || isMobileNumberValid(subscriberEmail)) {
					if (subscriberEmail.length > 100) {
						alert(Liferay.Language.get('mnp-maximum-100-characters'));
						$("#SubscriberEmail").focus();
					} else {
						$.ajax({
							url: "http://mnp.gov.mm/o/mnp.subscriber.rest/greetings/subscriber",
							type: "POST",
							dataType: "xml/html/script/json", // expected format for response
							contentType: "application/x-www-form-urlencoded", // send as JSON
							data: $.param({
								"email": isEmailValid(subscriberEmail) ? subscriberEmail : "",
								"mobileNumber": isMobileNumberValid(subscriberEmail) ? subscriberEmail : "",
								"companyId": Liferay.ThemeDisplay.getCompanyId(),
								"groupId": Liferay.ThemeDisplay.getScopeGroupId(),
								"userId": Liferay.ThemeDisplay.getUserId(),
								"hotName": Liferay.ThemeDisplay.getPortalURL(),
								"subscriptionConfirmationEmail1": Liferay.Language.get('mnp-sub-email-conf-dear'),
								"subscriptionConfirmationEmail2": Liferay.Language.get('mnp-sub-email-conf-line-1'),
								"subscriptionConfirmationEmail3": Liferay.Language.get('mnp-sub-email-conf-line-2'),
								"subscriptionConfirmationEmail4": Liferay.Language.get('mnp-sub-email-conf-line-3'),
								"subscriptionConfirmationSms1": Liferay.Language.get('mnp-sub-sms-conf-line-1'),
								"subscriptionConfirmationSms2": Liferay.Language.get('mnp-sub-sms-conf-line-2')
							}),
							complete: function (result) {
								if (result.status == 200)
									alert(Liferay.Language.get('mnp-subscription-label-successfully'));
								else
									alert(Liferay.Language.get('mnp-subscription-label-duplicated-value'));
							}
						});
					}


				} else {
					alert(Liferay.Language.get('mnp-subscription-label-invalid-email-or-phone-number'));
					$("#SubscriberEmail").focus();
				}
			}
			else {
				alert(Liferay.Language.get('mnp-subscription-label-please-enter-email-or-phone-number'));
				$("#SubscriberEmail").focus();
			}

		});


		function isEmailValid(email) {
			var patt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var res = patt.test(email);
			return res;
		};
		function isMobileNumberValid(mobileNumber) {
			var patt = new RegExp("^[0-9]*$");
			var res = patt.test(mobileNumber);
			return res;
		};
		function isEmpty(value) {
			return (value == null || value.length === 0);
		};
		//tuanlv16 validation web content

	});

	//SonDN4 Subscriber


})(jQuery);



var dropd = document.getElementById("image-dropdown");
var language = document.getElementById("language");
var nationImg = document.getElementById("nationImg");

function myfuunc(currentItem) {
	var mainDIVV = document.getElementById("image-dropdown");
	currentItem.parentNode.removeChild(currentItem);
	mainDIVV.insertBefore(currentItem, mainDIVV.childNodes[0]);

	if (currentItem.innerText == " မြန်မာ")
		nationImg.src = mainUrl + "/o/mnp-theme/images/my_MM.png"

	else if (currentItem.innerText == " English")
		nationImg.src = mainUrl + "/o/mnp-theme/images/en_US.png"


	language.innerHTML = currentItem.innerText;
	console.log("nationImg.src !!!!!!!!!", nationImg.src)
	console.log("choose language !!!!!!!", currentItem.innerText);

}
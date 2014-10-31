var main_url = undefined;

$(document).ready(function(){
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		main_url = request.greeting;
		loadResponsiveFrames(main_url);
  	});

  	$('#reload_frames').click(function(){
  		loadResponsiveFrames(main_url);
  	});

  	$('a.collapse-responsive-frame').click(collapseResponsiveFrame);

  	$('#toggle_collapse').click(function(e){
  		if(e) e.preventDefault();
  		$('a.collapse-responsive-frame').click();
  	});
});

function loadResponsiveFrames(main_url){
	$('#url_title a').attr('href', main_url).html(main_url);
	chrome.storage.sync.get({
    	iphone4_check: true,
    	iphone5_check: true,
    	iphone6_check: false,
    	iphone6p_check: false,
    	stablet_check: true,
    	ipad_check: true,
    	laptop_check: true
  	}, function(items) {
		if(!items.iphone4_check) $('#iphone4_item').hide();
		if(!items.iphone5_check) $('#iphone5_item').hide();
		if(!items.iphone6_check) $('#iphone6_item').hide();
		if(!items.iphone6p_check) $('#iphone6p_item').hide();
		if(!items.stablet_check) $('#stablet_item').hide();
		if(!items.ipad_check) $('#ipad_item').hide();
		if(!items.laptop_check) $('#laptop_item').hide();
		$('.responsive-iframe').each(function() {
			if($(this).is(":visible"))
	    		loadResponsiveFrame($(this), main_url);
		});
  	});
}

function loadResponsiveFrame(iframe, main_url){
	iframe.attr('src', main_url);
}

function collapseResponsiveFrame(e){
	if(e) e.preventDefault();
	var responsive_frame = $(this).parent().parent();
	var frame = responsive_frame.find('iframe');
	if(frame.is(':visible')){
		frame.slideUp("slow");
		$(this).find('span.glyphicon').removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
	}else{
		frame.slideDown("slow");
		$(this).find('span.glyphicon').removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
	}
}
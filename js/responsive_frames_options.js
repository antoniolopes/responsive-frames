$(document).ready(function($) {
	$('#save_options').click(saveOptions);
	restoreOptions();
});

function saveOptions(){
	var iphone4 = $('#iphone4').is(':checked');
	var iphone5 = $('#iphone5').is(':checked');
	var iphone6 = $('#iphone6').is(':checked');
	var iphone6p = $('#iphone6p').is(':checked');
	var stablet = $('#stablet').is(':checked');
	var ipad = $('#ipad').is(':checked');
	var laptop = $('#laptop').is(':checked');

	chrome.storage.sync.set({
	    iphone4_check: iphone4,
	    iphone5_check: iphone5,
	    iphone6_check: iphone6,
	    iphone6p_check: iphone6p,
	    stablet_check: stablet,
	    ipad_check: ipad,
	    laptop_check: laptop
	}, function() {
	    // Update status to let user know options were saved.
	    $('#status').show();
	    setTimeout(function() {
	    	$('#status').hide();
	    }, 2000);
	});
}

function restoreOptions() {
  	chrome.storage.sync.get({
    	iphone4_check: true,
    	iphone5_check: true,
    	iphone6_check: false,
    	iphone6p_check: false,
    	stablet_check: true,
    	ipad_check: true,
    	laptop_check: true
  	}, function(items) {
    	$('#iphone4').prop('checked', items.iphone4_check);
    	$('#iphone5').prop('checked', items.iphone5_check);
    	$('#iphone6').prop('checked', items.iphone6_check);
    	$('#iphone6p').prop('checked', items.iphone6p_check);
    	$('#stablet').prop('checked', items.stablet_check);
    	$('#ipad').prop('checked', items.ipad_check);
    	$('#laptop').prop('checked', items.laptop_check);
  	});
}

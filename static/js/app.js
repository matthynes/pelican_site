$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');

	scontacts.hide();

	contact_list.mouseenter(function(){ scontacts.fadeIn(); });

	contact_list.mouseleave(function(){ scontacts.fadeOut(); });

});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../../../../../../assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

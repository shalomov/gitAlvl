$(document).ready(function(){
//owl
	$('.owl-carousel').owlCarousel({
	    animateOut: 'slideOutDown',
	    animateIn: 'flipInX',
	    items:1,
	    margin:30,
	    loop: true,
	    autoHeight:true
	});
//owl end

//breadcrumbs
	$('.crumbs-item:last a').removeAttr('href');
//breadcrumbs end



});
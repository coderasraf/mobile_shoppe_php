$(document).ready(function(){
	// Banner owl carousel
	$('#banner-area .owl-carousel').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:true,
		nav:false
	});

	// top sale owl-carousel
	$('#top-sale .owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	})

	// New phones owl-carousel
	$('#new-phones .owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	})

	// Isotope filter
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	// Filter Item on button click
	$('.button-group').on('click','button', function(){
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({filter:filterValue});
	})
    
})
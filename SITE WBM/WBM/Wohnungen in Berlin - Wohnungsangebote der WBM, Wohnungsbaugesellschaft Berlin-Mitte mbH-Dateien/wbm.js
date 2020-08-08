if (window.innerWidth < 500) {
	document.getElementById('searchBox').setAttribute('data-status','close');
	document.getElementById('search-form-wrap').style = 'display: none;'
}


  


jQuery(function ($) {

	$(window).on('scroll', function () {
		$("#meta-desktop > .icons > .item").removeClass('open');
	});

  	$('.gallery > .imgWrap, header .slider, .gallery > .slider, #headerImage .slider').slick({
	    prevArrow: '<div class="prev"></div>',
	    nextArrow: '<div class="next"></div>',
	    dots: true
  	});

	$(document).on('click','#meta-desktop .arrow', function () {
		$(this).parent("#meta-desktop").toggleClass('active');
	});

	$(document).on('click','#meta-mobile .arrow', function () {
		if ($(this).parent("#meta-mobile").hasClass('share')) {
			$(this).parent("#meta-mobile").toggleClass('share');
		} else {
			$(this).parent("#meta-mobile").toggleClass('active');
		}
	});

	$(document).on('click','#meta-mobile .item.share .opener', function () {
		$(this).parents("#meta-mobile").toggleClass('share');
	});

	$(document).on('click','#meta-desktop .opener',function(event){
		var item = $(this).parents('.item');
		if (!item.hasClass('open')) {
			event.preventDefault();
			$("#meta-desktop > .icons > .item").removeClass('open');
			item.addClass('open');
			return false;
		}
	});

	$(document).on('click','#meta-desktop .resize-link',function(event){
		event.preventDefault();
		var targetSize = $(this).attr('data-size');
		$("#meta-desktop > .icons > .item").removeClass('open');
		$('body').attr('data-size',targetSize);
		return false;
	});

	$(document).on('click','#headerImage #searchBox .headline',function(event){
		event.preventDefault();
		var parent = $(this).parents('#searchBox');
		var status = parent.attr('data-status');
		var foldout = $(this).next();
		if (status == 'open') {
			foldout.stop(true,true).slideUp(250);
			parent.attr('data-status','close');
		} else {
			foldout.stop(true,true).slideDown(250);
			parent.attr('data-status','open');
		}
		return false;
	});

	$(document).on('click','.pagelink',function(event){
		event.preventDefault();
		var page = $(this).attr('data-pageUid');
		$('input[name="tx_openimmo_immobilie[page]"]').val(page);
		$('#openimmo-search-form input[name="tx_openimmo_immobilie[search]"]').val('paginate');
		$('#openimmo-search-form').submit();
		return false;
	});

	$(document).on('click','nav#mobileNav .hassub > a',function(event){
		event.preventDefault();
		var listElement = $(this).parent('li');
		if (listElement.hasClass('close')){
			listElement.removeClass('close');
			$(this).next('ul').stop(true,true).slideDown(250);
		} else {
			listElement.addClass('close');
			$(this).next('ul').stop(true,true).slideUp(250);
		}
		return false;
	});

	$(document).on('mouseenter mouseleave','nav#main ul.level-1 li.hassub',function(event){
		var foldout = $(this).find('> ul');
		switch (event.type) {
			case 'mouseenter':
				$(foldout).stop(true,true).slideDown(250);
				break;
			case 'mouseleave':
				$(foldout).stop(true,true).slideUp(250);
				break;
		}
	});
});
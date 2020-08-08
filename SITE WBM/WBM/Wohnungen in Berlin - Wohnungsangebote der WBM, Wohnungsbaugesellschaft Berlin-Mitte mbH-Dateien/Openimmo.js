var openImmo = openImmo || {};

openImmo.scrollToOffset = 120;

// JSON API URL
openImmo.jsonApi = '';

/**
 * Scroll to a selector position
 * @param selector
 */
openImmo.scrollTo = function(selector) {
	var element = jQuery(selector);
	if(element.length === 0) {
		element = jQuery('.tx-openimmo');
	}
	jQuery('html, body').animate({
		scrollTop: element.offset().top - openImmo.scrollToOffset
	}, 500);
};

openImmo.initialize = function() {
	// Get JSON API url
	var jsonApiContainer = jQuery('[data-openimmo-json-api]');
	if (jsonApiContainer.length > 0) {
		openImmo.jsonApi = jsonApiContainer.attr('data-openimmo-json-api');
	}
	//
	openImmo.details.initialize();
	if(typeof openImmo.bookmarks !== 'undefined') {
		openImmo.bookmarks.initialize();
	}
	if(typeof openImmo.ratingRequest !== 'undefined') {
		openImmo.ratingRequest.initialize();
	}
};

openImmo.details = {

	wrapper: null,
	
	initialize: function() {
		this.wrapper = jQuery('.tx-openimmo.show');
		if(this.wrapper.length>0) {
			openImmo.details.images.initialize();
		}
		//
		// In case of jumping back to a list with an anchor in the url:
		// Append a highlight class to the anchor-immobilie!
		var url = window.location.href;
		var hash = url.substring(url.indexOf("#")+1);
		if(hash.substring(0, 20) === 'immobilie-list-item-') {
			openImmo.scrollTo('#' + hash);
			jQuery('.immobilie-list-item').removeClass('highlight');
			jQuery('#' + hash).addClass('highlight');
		}
		//
		// Search filter: Display fields related on vermarktungsart
		var vermarktungsartSelect = jQuery('select[name=\'tx_openimmo_immobilie[vermarktungsart]\']');
		if(vermarktungsartSelect.length > 0) {
			vermarktungsartSelect.on('change', function() {
				var vermarktungsartValue = jQuery(this).val();
				//
				// Are there display conditions for this field?
				var vermarktungsartOptions = jQuery('*[data-display-on-vermarktungsart]');
				if(vermarktungsartOptions.length > 0) {
					vermarktungsartOptions.hide();
					jQuery('input', vermarktungsartOptions).attr('disabled', 'disabled');
					jQuery.each(vermarktungsartOptions, function() {
						var vermarktungsartRelated = jQuery(this);
						var vermarktungsartDisplayOn = vermarktungsartRelated.attr('data-display-on-vermarktungsart');
						var vermarktungsartDisplayOnArray = vermarktungsartDisplayOn.split(',');
						if(jQuery.inArray(vermarktungsartValue, vermarktungsartDisplayOnArray) >= 0) {
							vermarktungsartRelated.show();
							jQuery('input', vermarktungsartRelated).removeAttr('disabled');
						}
					});
				}
			});
			vermarktungsartSelect.trigger('change');
		}
		//
		// Search filter: Display fields related on ort selection
		var ortRegionalerZusatz = jQuery('*[data-display-on-ort]');
		if(ortRegionalerZusatz.length > 0) {
			jQuery.each(ortRegionalerZusatz, function() {
				var fieldsetInner = jQuery(this);
				var fieldset = fieldsetInner.closest('fieldset');
				var ortCheckbox = jQuery('legend input[type=\'checkbox\']', fieldset);
				if(!ortCheckbox.prop('checked')) {
					fieldsetInner.slideUp();
					jQuery('input[type=\'checkbox\']', fieldsetInner).prop('checked', false);
				}
				ortCheckbox.on('change', function() {
					if(!ortCheckbox.prop('checked')) {
						fieldsetInner.slideUp();
						jQuery('input[type=\'checkbox\']', fieldsetInner).prop('checked', false);
					}
					else {
						fieldsetInner.slideDown();
					}
				});
			});
		}
		//
		// Search request: Display fields related on object type
		var objectTypeSelect = jQuery('select[name=\'tx_openimmopro_searchrequest[objectType]\']');
		if(objectTypeSelect.length > 0) {
			objectTypeSelect.on('change', function() {
				var objectTypeValue = jQuery(this).val();
				//
				// Are there display conditions for this field?
				var objectTypeOptions = jQuery('*[data-display-on-object-type]');
				if(objectTypeOptions.length > 0) {
					objectTypeOptions.hide();
					jQuery('input', objectTypeOptions).attr('disabled', 'disabled');
					jQuery.each(objectTypeOptions, function() {
						var objectTypeRelated = jQuery(this);
						var objectTypeDisplayOn = objectTypeRelated.attr('data-display-on-object-type');
						var objectTypeDisplayOnArray = objectTypeDisplayOn.split(',');
						if(jQuery.inArray(objectTypeValue, objectTypeDisplayOnArray) >= 0) {
							objectTypeRelated.show();
							jQuery('input', objectTypeRelated).removeAttr('disabled');
						}
					});
				}
			});
			objectTypeSelect.trigger('change');
		}
	},

	/**
	 * Images of the detail view
	 */
	images: {
		/**
		 * The current selected image
		 */
		currentNumber: 1,

		/**
		 * Initialize the image gallery and modals
		 */
		initialize: function() {

			var previousButton = jQuery('.openimmo-details-image-previous', openImmo.details.wrapper);
			if(previousButton.length>0) {
				jQuery(previousButton).on('click', openImmo.details.images.showPrevious);
			}
			var nextButton = jQuery('.openimmo-details-image-next', openImmo.details.wrapper);
			if(nextButton.length>0) {
				jQuery(nextButton).on('click', openImmo.details.images.showNext);
			}

			var imageButtons = jQuery('.openimmo-details-image-thumbnails ul a', openImmo.details.wrapper);
			if(imageButtons.length>0) {
				jQuery(imageButtons).on('click', openImmo.details.images.showImage);
			}
			
			var modalButtons = jQuery('.openimmo-details-images .modal-footer button', openImmo.details.wrapper);
			if(modalButtons.length>0) {
				jQuery(modalButtons).on('click', openImmo.details.images.showModal);
			}

			this.refresh();
			$( window ).resize(function() {
				openImmo.details.images.refresh();
			});
			// Add a class for displaying first image
			jQuery('div.openimmo-details-images').addClass('first-image');
		},
		
		refresh: function () {
			var imagesLarge = jQuery('.openimmo-details-image-large');
			var firstHeight = jQuery(imagesLarge[openImmo.details.images.currentNumber-1]).find('img').height();
			jQuery('.openimmo-details-images-large').animate({height: firstHeight + 'px'}, 500);
		},

		/**
		 * Show the next/previous modal
		 * @returns {boolean}
		 */
		showModal: function() {
			var number = parseInt(jQuery(this).data('openimmo-details-image-modal-number'), 10);
			if (number > 0) {
				jQuery('.modal').modal('hide');
				var direction = jQuery(this).data('openimmo-details-image-modal-direction');
				if(direction === 'previous') {
					number = number-1;
				}
				else {
					number = number+1;
				}
				jQuery('#openimmo-details-image-modal-' + number).modal('show');
			}
			return false;
		},
		
		/**
		 * Detail-Event: Click on preview image
		 * @returns {boolean}
		 */
		showImage: function () {
			var number = parseInt(jQuery(this).data('openimmo-details-image-number'), 10);
			if (number > 0) {
				openImmo.details.images.showImageNumber(number);
			}
			return false;
		},
		
		showImageNumber: function (number) {
			this.currentNumber = number;
			// Get images and remove all active states
			var imagesLarge = jQuery('.openimmo-details-image-large');
			imagesLarge.removeClass('active');
			// Set some helper classes
			if(number === 1) {
				jQuery('div.openimmo-details-images').addClass('first-image');
			}
			else {
				jQuery('div.openimmo-details-images').removeClass('first-image');
			}
			if(number === (imagesLarge.length)) {
				jQuery('div.openimmo-details-images').addClass('last-image');
			}
			else {
				jQuery('div.openimmo-details-images').removeClass('last-image');
			}
			// Activate the current large image
			jQuery(imagesLarge[(number - 1)]).addClass('active').animate({
				opacity: 1.0,
				height: jQuery(imagesLarge[(number - 1)]).next('img').attr('height') + 'px'
			}, 500, function () {
				jQuery.each(jQuery('.openimmo-details-image-large'), function() {
					if(!jQuery(this).hasClass('active')) {
						jQuery(this).css('opacity', '0.0');
					}
				});
				jQuery('.openimmo-details-images-large').animate({
					height: jQuery(imagesLarge[(number - 1)]).next('img').attr('height') + 'px'
				}, 500);
			});
			// Thumbnails
			var wrapper = jQuery('.openimmo-details-image-thumbnails');
			var wrapperInner = jQuery('ul', wrapper);
			var wrapperOffset = wrapperInner.offset();
			var wrapperWidth = wrapper.width() / 2;
			jQuery.each(jQuery('.openimmo-details-image-thumbnails li'), function(index) {
				if(index === (number-1)) {
					jQuery(this).addClass('active');
					var activeOffset = jQuery(this).offset();
					var activeWidth = jQuery(this).width() / 2;
					var centerWidth = wrapperWidth - activeWidth;
					var offsetLeft = -1 * (wrapperOffset['left'] - activeOffset['left']);
					if(offsetLeft > centerWidth) {
						var targetLeft = centerWidth-offsetLeft;
						wrapperInner.animate({left: targetLeft}, 500);
					}
					else {
						wrapperInner.animate({left: 0}, 500);
					}
				}
				else {
					jQuery(this).removeClass('active');
				}
			});
			openImmo.details.images.refresh();
			return false;
		},
		
		showPrevious: function () {
			if (openImmo.details.images.currentNumber > 1) {
				openImmo.details.images.currentNumber--;
				openImmo.details.images.showImageNumber(openImmo.details.images.currentNumber);
			}
			return false;
		},
		
		showNext: function () {
			if (openImmo.details.images.currentNumber < jQuery('.openimmo-details-image-thumbnails ul li').length) {
				openImmo.details.images.currentNumber++;
				openImmo.details.images.showImageNumber(openImmo.details.images.currentNumber);
			}
			return false;
		}
	}
};
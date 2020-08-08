/**
 * Library for displaying flash messages
 *
 * Author:   Thomas Deuling <typo3@coding.ms>
 * Version:  1.0.1
 * Requires: Logger-Library
 *
 * Usage:
 * FlashMessage.push('Message text...', 'success', '#flash-message-container');
 *
 * ChangeLog:
 *
 *
 */
var FlashMessage = {

	/**
	 * Duration of displaying the message
	 */
	visibilityDuration: 5000,

	/**
	 * Duration of fading out the message
	 */
	fadingOutDuration: 2000,

	/**
	 * All pushed messages
	 */
	messages: [],

	/**
	 * Message template
	 */
	template: '<div class="alert alert-###ALERT_TYPE###" id="alert-###ALERT_COUNT###"><a class="close" data-dismiss="alert">×</a><span>###ALERT_MESSAGE###</span></div>',

	/**
	 * Push a new Message
	 * @param message
	 * @param type Type of message: success, info, warning, danger
	 * @param selector
	 */
	push: function(message, type, selector) {
		var count = this.messages.length;
		// Parse template
		var html = this.template;
		html = html.replace('###ALERT_TYPE###', type);
		html = html.replace('###ALERT_COUNT###', count.toString());
		html = html.replace('###ALERT_MESSAGE###', message);
		// Collect message data
		this.messages[count] = [];
		this.messages[count]['message'] = message;
		this.messages[count]['type'] = type;
		this.messages[count]['html'] = html;
		// Get flash message container
		var messageContainer = jQuery(selector);
		if(messageContainer.length === 0) {
			Logger.error('Please define a valid flash message container!');
		}
		else {
			// Append new Message
			messageContainer.append(html);
			// Fading out message
			setTimeout('FlashMessage.fadeOutAlert('+count+')', this.visibilityDuration);
		}
	},

	/**
	 * Fading out message
	 * @param count
	 */
	fadeOutAlert: function(count) {
		var message = jQuery('#alert-' + count);
		if(message.length > 0) {
			message.fadeOut(this.fadingOutDuration);
		}
	}
	
};

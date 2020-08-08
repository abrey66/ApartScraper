var Logger = {
	_options: {
		disabled: true
	},
	isDisabled: function() {
		return this._options.disabled;
	},
	disableLogger: function() {
		this._options.disabled = true;
	},
	enableLogger: function() {
		this._options.disabled = false;
	},
	log: function() {
		if(!this.isDisabled() && typeof console !== 'undefined') {
			console.log.apply(console, arguments);
		}
	},
	error: function() {
		if(typeof console !== 'undefined') {
			console.error.apply(console, arguments);
		}
	},
	warn: function() {
		if(typeof console !== 'undefined') {
			console.warn.apply(console, arguments);
		}
	}
};
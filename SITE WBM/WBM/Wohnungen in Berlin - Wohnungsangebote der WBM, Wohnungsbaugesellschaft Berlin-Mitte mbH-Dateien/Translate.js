/**
 * Library for getting translation labels and messages from TYPO3.lang.
 *
 * Author:   Thomas Deuling <typo3@coding.ms>
 * Version:  1.0.1
 * Requires: Logger-Library
 *
 * Usage:
 * console.log(Translate.key('some_language_label', 'points_of_interest');
 *
 * XLIFF-Translation:
 * <trans-unit id="tx_pointsofinterest_javascript.some_language_label">
 *     <source>Some language label</source>
 * </trans-unit>
 *
 * ChangeLog:
 * *   Improve if conditions
 * *	Define translation variable
 *
 *
 */
var Translate = {

	/**
	 * Get a translation
	 * @param key string Translation key
	 * @param extension string Extension key
	 */
	key: function(key, extension) {
		var translation = '';
		var translationKey = 'tx_' + extension.replace(/_/g, '') + '_javascript.' + key;
		if(typeof TYPO3 !== 'undefined') {
			if(typeof TYPO3.lang !== 'undefined') {
				if(typeof TYPO3.lang[translationKey] !== 'undefined') {
					if(typeof TYPO3.lang[translationKey][0] !== 'undefined') {
						if(typeof TYPO3.lang[translationKey][0]['target'] !== 'undefined') {
							translation = TYPO3.lang[translationKey][0]['target'];
						}
						else {
							translation = TYPO3.lang[translationKey][0]['source'];
						}
					}
					else {
						Logger.warn('Translate: TYPO3.lang[' + translationKey + '][0] is undefined!', key, extension);
					}
				}
				else {
					Logger.warn('Translate: TYPO3.lang[' + translationKey + '] is undefined!', key, extension);
				}
			}
			else {
				Logger.warn('Translate: TYPO3.lang is undefined!', key, extension);
			}
		}
		else {
			Logger.warn('Translate: TYPO3 is undefined!', key, extension);
		}
		if(translation === '') {
			Logger.warn('Translate: ' + translationKey + ' not found!');
		}
		return translation;
	}

};

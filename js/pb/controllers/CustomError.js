/*global define */
/**
 * custom Error Module
 */
define(function () {
	'use strict';

	return Marionette.Error.extend({
		urlRoot: 'http://www.pastelepub.com/docs/' + pb.value.VERSION + '/'
	})
});

/**
 * Created by KIMSEONHO on 2015-01-16.
 */

/*global define */
define([
	'marionette'
], function (Marionette) {
	'use strict';

	return Marionette.AppRouter.extend({
		// "someMethod" must exist at controller.someMethod
		/* standard routes can be mixed with appRoutes/Controllers above */
		routes: {
			'search/:page': 'searchScene',
			'*filter': 'defaultRoute'
		},

		searchScene: function(page) {
			var idx = page - 1;
			pb.type.view.sceneCompositeView.command("change:currentScene", idx);
			pb.type.view.sceneNavigator.command("change:pager", page);
		},

		defaultRoute: function() {
			this.navigate("search/" + 1, {trigger: true});
		}
	});
});

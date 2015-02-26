/**
 * Created by KIMSEONHO on 2015-02-25.
 *
 * View들을 관리하고 컨트롤 하기 위한 Array + underscore를 이용한 간단한 기능을 추가
 */
define(function () {
	'use strict';

	var ViewContainer = function () {
		this.container = [];
	};

	ViewContainer.prototype = {

		/**
		 * 중복성 검사를 하는 push
		 * @param view : Backbone.Marionette View Instance
		 * @return success : length of current viewCollection | fail : false
		 * */
		push: function (viewInstance) {
			var success = null;
			if (_.some(this.container, function (view) {
					return viewInstance.cid === view.cid;
				})) {
				success = -1;
			} else {
				success = this.container.push(viewInstance);
			}

			return success;
		},

		/**
		 * 해당 view instance를 삭제함
		 * @param view : Backbone.Marionette View Instance
		 * @return success : A new Array, containing the removed items (if any)
		 *          fail : -1
		 * */
		remove: function (viewInstance) {
			var success = null;
			var idx = _.findIndex(this.container, function (view) {
				return viewInstance.cid === view.cid;
			});

			if (idx == -1) {
				success = -1;
			} else {
				success = this.container.remove(idx);
			}

			return success;
		},

		pop: function() {
			return this.container.pop();
		},

		size: function() {
			return this.container.length;
		}
	};

	return ViewContainer;
});
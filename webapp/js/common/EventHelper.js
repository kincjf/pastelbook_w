/**
 * Event Namespace를 이용하여 String형 Event Object를 제작하고 관리
 * - 초기 실행시 output은 null 입력
 * - Event Delimiter는 ":" 사용
 * Created by KIMSEONHO on 2015-03-18.
 */
define(["underscore"], function (_) {
	var myHelper = this;

	/**
	 * event object의 key값를 이용하여
	 * String 형태의 object에 값을 기록함
	 * @param event를 선언해놓은 object - pb.event
	 * @param output - String형 Event가 저장되는 공간
	 * @param defaultEvent - outer object의 default event를 활용하여 inner Object의 event를 만듬.
	 * @return object - String형 Event
	 * */
	this.makeEvent = function (object, output, defaultEvent) {
		var copy = output;

		if (copy === null) {     // 초기 실행시 null 입력
			copy = {};
		}

		for (var key in _.keys(object)) {
			if (key === "default") {
				copy[key] = defaultEvent + ":" + key;
			} else if (_.isObject(object[key])) {
				this.makeEvent(object[key], copy[key], object["default"]);
			} else {    // 전역 이벤트
				copy[key] = key;
			}
		}

		return copy;
	}

	return myHelper;
});
package pb.rest.jaxrs.vo;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Category extends VO {
	/** IT - 1, 시사 - 2, 사진 - 3, 창작 - 4 */
	@JsonProperty("_id")
	int _id;
	
	/** 카테고리 명(Korean)*/
	String ko_name;

	public Category(){}
	public Category(int _id, String name) {
		this._id = _id;
		this.ko_name = name;
	}

	@JsonProperty("_id")
	public int getId() {
		return this._id;
	}

	@JsonProperty("_id")
	public void setId(int _id) {
		this._id = _id;
	}

	public String getName() {
		return this.ko_name;
	}

	public void setName(String name) {
		this.ko_name = name;
	}
}

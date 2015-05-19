package pb.rest.jaxrs.vo;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Category extends VO {
	@JsonProperty("_id")
	int _id;
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

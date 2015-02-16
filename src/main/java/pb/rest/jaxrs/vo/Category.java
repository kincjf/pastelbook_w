package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Category extends VO {
	int _id;
	String ko_name;

	public Category(){}
	public Category(int _id, String name) {
		this._id = _id;
		this.ko_name = name;
	}

	public int getId() {
		return _id;
	}

	public void setId(int _id) {
		this._id = _id;
	}

	public String getName() {
		return ko_name;
	}

	public void setName(String name) {
		this.ko_name = name;
	}
}

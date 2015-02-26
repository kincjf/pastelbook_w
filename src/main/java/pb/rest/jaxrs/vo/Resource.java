package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Resource extends VO {
	public int _id;
	public int accountId;
	public String path;
	public String thumbPath;
	public String name;
	public long size;
	
	Resource() {
	}
	
	public Resource(int _id, int accountId, String path, String thumbPath, String name, long size) {
		super();
		this._id = _id;
		this.accountId = accountId;
		this.path = path;
		this.thumbPath = thumbPath;
		this.name = name;
		this.size = size;
	}



	public int get_id() {
		return _id;
	}

	public void set_id(int _id) {
		this._id = _id;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getThumbPath() {
		return thumbPath;
	}

	public void setThumbPath(String thumbPath) {
		this.thumbPath = thumbPath;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}
}

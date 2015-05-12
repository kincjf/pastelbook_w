package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Resource extends VO {
	private int _id;
	private int accountId;
	private String path;
	private String thumbPath;
	private String name;
	private long size;

	Resource() {
	}
	
	public Resource(int accountId, String path, String thumbPath, String name, long size) {
		super();
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

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
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

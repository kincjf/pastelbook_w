package pb.rest.jaxrs.vo;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Resource extends VO {
	@JsonProperty("_id")
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

	@JsonProperty("_id")
	public int getId() {
		return this._id;
	}

	@JsonProperty("_id")
	public void setId(int _id) {
		this._id = _id;
	}

	public int getAccountId() {
		return this.accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getThumbPath() {
		return this.thumbPath;
	}

	public void setThumbPath(String thumbPath) {
		this.thumbPath = thumbPath;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getSize() {
		return this.size;
	}

	public void setSize(long size) {
		this.size = size;
	}
}

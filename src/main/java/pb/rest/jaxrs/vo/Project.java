package pb.rest.jaxrs.vo;

import java.util.Date;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Project extends VO {
	@JsonProperty("_id")
	private int _id;
	private int accountId;
	private String title;
	private String description;
	
//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="YYYY-MM-DD HH:mm:ss")
	private Date createDate;
	private Date modifyDate;
	
	private String sceneList;
	private String previewImage;
	
	private int width;
	private int height;
	private int category;

	public Project(){}
	
	public Project(int _id, int accountId, String title, String description,
			Date createDate, Date modifyDate, String sceneList,
			String previewImage, int width, int height, int category) {
		this._id = _id;
		this.accountId = accountId;
		this.title = title;
		this.description = description;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.sceneList = sceneList;
		this.previewImage = previewImage;
		this.width = width;
		this.height = height;
		this.category = category;
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

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return this.modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public String getSceneList() {
		return this.sceneList;
	}

	public void setSceneList(String sceneList) {
		this.sceneList = sceneList;
	}

	public String getPreviewImage() {
		return this.previewImage;
	}

	public void setPreviewImage(String previewImage) {
		this.previewImage = previewImage;
	}

	public int getWidth() {
		return this.width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return this.height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getCategory() {
		return this.category;
	}

	public void setCategory(int category) {
		this.category = category;
	}
}

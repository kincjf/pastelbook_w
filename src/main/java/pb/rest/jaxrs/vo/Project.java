package pb.rest.jaxrs.vo;

import java.util.Date;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Project extends VO {
	int _id;
	int accountId;
	String title;
	String description;
	Date createDate;
	Date modifyDate;
	String sceneList;
	String previewImage;
	int width;
	int height;
	int category;

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

	public int getId() {
		return _id;
	}

	public void setId(int _id) {
		this._id = _id;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}

	public String getSceneList() {
		return sceneList;
	}

	public void setSceneList(String sceneList) {
		this.sceneList = sceneList;
	}

	public String getPreviewImage() {
		return previewImage;
	}

	public void setPreviewImage(String previewImage) {
		this.previewImage = previewImage;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}
}

package pb.rest.jaxrs.vo;

import java.util.Date;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Document extends VO {
	@JsonProperty("_id")
	int _id;
	int accountId;
	int projectId;

	String title;
	String description;

//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="YYYY-MM-DD HH:mm:ss")
	Date postedDate;
	String sceneList;
	String previewImage;
	int category;
	int viewCount;

	public Document() {
	}

	public Document(int _id, String title, String description, int projectId,
			Date postedDate, String sceneList, String previewImage, int category, int viewCount) {
		this._id = _id;
		this.title = title;
		this.description = description;
		this.projectId = projectId;
		this.postedDate = postedDate;
		this.sceneList = sceneList;
		this.previewImage = previewImage;
		this.category = category;
		this.viewCount = viewCount;
	}
	@JsonProperty("_id")
	public int getId() {
		return _id;
	}

	@JsonProperty("_id")
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

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public Date getPostedDate() {
		return postedDate;
	}

	public void setPostedDate(Date postedDate) {
		this.postedDate = postedDate;
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

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

	public int getViewCount() {
		return viewCount;
	}

	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}
}

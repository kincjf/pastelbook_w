package com.pb.techtree;

import java.util.Date;

public class TreeNodeViewBean {
	String title;
	String content;
	int id;
	String docType;
	
	Date createDate;
	Date modifyDate;
	Date postedDate;
	
	// 이후에 뷰에 추가
	String previewImage;
	String category;
	
	public TreeNodeViewBean(String title, String content, int id, String docType,
			String thumbPath, String category) {
		this.title = title;
		this.content = content;
		this.id = id;
		this.docType = docType;
		this.previewImage = thumbPath;
		this.category = category;
	}
	
	public TreeNodeViewBean(String title, String content, int id,
			String docType, Date createDate, Date modifyDate,
			String previewImage, String category, Date postedDate) {
		this.title = title;
		this.content = content;
		this.id = id;
		this.docType = docType;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.previewImage = previewImage;
		this.category = category;
		this.postedDate = postedDate;
	}

	// set get
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
	public String getPreviewImage() {
		return previewImage;
	}
	public void setPreviewImage(String thumbPath) {
		this.previewImage = thumbPath;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
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
	public Date getPostedDate() {
		return postedDate;
	}
	public void setPostedDate(Date postedDate) {
		this.postedDate = postedDate;
	}
}

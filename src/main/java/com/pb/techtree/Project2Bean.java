package com.pb.techtree;

import java.util.Date;

public class Project2Bean {
	int id;
	String title;
	String comment;
	Date createDate;
	Date modifyDate;
	String sceneList;
	String previewImage;
	int width;
	int height;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
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
	public Project2Bean(int id, String title, String comment, Date createDate,
			Date modifyDate, String sceneList, String previewImage, int width,
			int height) {
		this.id = id;
		this.title = title;
		this.comment = comment;
		this.createDate = createDate;
		this.modifyDate = modifyDate;
		this.sceneList = sceneList;
		this.previewImage = previewImage;
		this.width = width;
		this.height = height;
	}
}

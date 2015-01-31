package com.pb.techtree;

import java.util.Date;

public class DocumentBean {
	int id;

	String title;
	String contents;

	int projectId;
	Date postedDate;
	int category;

	public DocumentBean(int id, String title, String contents, int projectId,
			Date postedDate, int category) {

		this.id = id;
		this.title = title;
		this.contents = contents;
		this.projectId = projectId;
		this.postedDate = postedDate;
		this.category = category;
	}

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

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
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

	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}

}

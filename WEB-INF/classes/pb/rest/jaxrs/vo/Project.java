package pb.rest.jaxrs.vo;

import java.sql.Date;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Project extends VO {
	String title;
	String comment;
	Date creaetDate;
	Date modifyDate;
	String sceneList;
	String previewImage;
}

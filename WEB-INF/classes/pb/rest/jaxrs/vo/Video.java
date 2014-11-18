package pb.rest.jaxrs.vo;

import java.sql.Date;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Video extends Resource {
	int width;
	int height;
	Date playTime;
}

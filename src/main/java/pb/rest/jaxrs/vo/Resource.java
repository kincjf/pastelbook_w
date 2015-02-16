package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Resource extends VO {

	public String path;
	public String thumbPath;
	public String name;
	public long size;
	
	Resource() {
	}
}

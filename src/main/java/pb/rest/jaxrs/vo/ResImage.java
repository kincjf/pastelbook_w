package pb.rest.jaxrs.vo;

import javax.xml.bind.annotation.XmlRootElement;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
@XmlRootElement
public class ResImage extends Resource {
	public int width;
	public int height;
	public String type;
}

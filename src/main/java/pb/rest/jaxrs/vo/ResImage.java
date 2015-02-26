package pb.rest.jaxrs.vo;

import javax.xml.bind.annotation.XmlRootElement;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
@XmlRootElement
public class ResImage extends Resource {
	public int width;
	public int height;
	public String type;
	
	public ResImage(){}

	
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}


	public ResImage(int _id, int accountId, String path, String thumbPath, String name, long size, int width, int height, String type) {
		super(_id, accountId, path, thumbPath, name, size);
		this.width = width;
		this.height = height;
		this.type = type;
	}
}

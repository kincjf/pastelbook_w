package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class ResImage extends Resource {
	private int width;
	private int height;
	
	/** 일반 : 100 */
	private int type;
	
	public ResImage(){}

	
	public int getWidth() {
		return this.width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return this.height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getType() {
		return this.type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public ResImage(int accountId, String path, String thumbPath, String name, long size, int width, int height, int type) {
		super(accountId, path, thumbPath, name, size);
		this.width = width;
		this.height = height;
		this.type = type;
	}
}

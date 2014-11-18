package pb.rest.jaxrs.db;

import java.util.List;

import pb.rest.jaxrs.vo.Image;

public class ImageDAO extends PastelbookDAO<Image> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "Image";
		}
	}
	
}

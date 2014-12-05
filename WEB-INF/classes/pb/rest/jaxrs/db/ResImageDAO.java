package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.ResImage;

public class ResImageDAO extends PastelbookDAO<ResImage> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "ResImage";
		}
	}
	
}

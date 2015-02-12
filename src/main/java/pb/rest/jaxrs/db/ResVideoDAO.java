package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.ResVideo;

public class ResVideoDAO extends PastelbookDAO<ResVideo> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "ResVideo";
		}
	}
}

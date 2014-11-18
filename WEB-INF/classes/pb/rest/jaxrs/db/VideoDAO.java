package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Account;

public class VideoDAO extends PastelbookDAO<Account> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "Video";
		}
	}
}

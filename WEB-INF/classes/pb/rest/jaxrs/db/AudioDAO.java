package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Account;

public class AudioDAO extends PastelbookDAO<Account> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "Audio";
		}
	}
}

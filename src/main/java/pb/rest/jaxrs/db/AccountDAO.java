package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Account;

public class AccountDAO extends PastelbookDAO<Account> {

	@Override
	protected void setObjectName() {
		objectName = "Account";
	}
}

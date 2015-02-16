package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Account;

public class AccountDAO extends PastelbookDAO<Account> {

	@Override
	protected void setObjectName() {
		objectName = "Account";
	}
	
	public Account findByNick(String query){
		Account result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectOne(objectName+"Mapper.findByNick", query);
		session.close();
		
		return result;
	}

}

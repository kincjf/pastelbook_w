package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Account;

public class AccountDAO extends PastelbookDAO<Account> {

	@Override
	protected void setObjectName() {
		objectName = "Account";
	}
	
	protected Account findByNick(String nickName){
		Account result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectOne(objectName+"Mapper.findByNick", nickName);
		session.close();
		
		return result;
	}
	
	public Account findByEmail(String email){
		Account result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectOne(objectName+"Mapper.findByEmail", email);
		session.close();
		
		return result;
	}
}

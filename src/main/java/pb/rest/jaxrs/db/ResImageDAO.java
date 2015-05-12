package pb.rest.jaxrs.db;

import java.util.List;

import pb.rest.jaxrs.vo.ResImage;

public class ResImageDAO extends PastelbookDAO<ResImage> {

	@Override
	protected void setObjectName() {
		objectName = "ResImage";
	}
	
	public List<ResImage> findAllByAccountId(int accountId){
		List<ResImage> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAllByAccountId", accountId);
		session.close();
		
		return result;
	}
}

package pb.rest.jaxrs.db;

import java.util.List;

import pb.rest.jaxrs.vo.ResImage;

public class ResImageDAO extends PastelbookDAO<ResImage> {

	@Override
	protected void setObjectName() {
		objectName = "ResImage";
	}
	
	/** 
	 * 계정 id에 대한 Image Resource를 조회함
	 * @param accountId(int)
	 * @return List<ResImage> by session.selectList
	 * */
	public List<ResImage> findAllByAccountId(int accountId){
		List<ResImage> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAllByAccountId", accountId);
		session.close();
		
		return result;
	}
}

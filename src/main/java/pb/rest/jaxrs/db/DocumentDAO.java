package pb.rest.jaxrs.db;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import pb.rest.jaxrs.vo.Document;

public class DocumentDAO extends PastelbookDAO<Document> {
	final Logger logger = LoggerFactory.getLogger(Document.class);
	
	@Override
	protected void setObjectName() {
		objectName = "Document";
	}


	public List<Document> findByTitleContainsAndAccountId(@Param("query") String query, @Param("accountId") int accountId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
		result = session.selectList(objectName+"Mapper.findByTitleContainsAndAccountId", map);
		session.close();
		
		return result;
	}
	public List<Document> findByDescriptionContainsAndAccountId(@Param("query") String query,@Param("accountId") int accountId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
        
		result = session.selectList(objectName+"Mapper.findByDescriptionContainsAndAccountId", map);
		session.close();
		
		return result;
	}
	
	public List<Document> findByTitleContainsNotMine(@Param("query") String query,@Param("accountId") int accountId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
        
		result = session.selectList(objectName+"Mapper.findByTitleContainsNotMine", map);
		session.close();
		
		return result;
	}
	
	public List<Document> findByDescriptionContainsNotMine(@Param("query") String query,@Param("accountId") int accountId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
        
		result = session.selectList(objectName+"Mapper.findByDescriptionContainsNotMine", map);
		session.close();
		
		return result;
	}
	
	
	/**
	 * TODO xml에 아직 추가 안됨
	 * @param docId document Id
	 * @return List<Document>
	 */
	public List<Document> findAllParentByDocID(@Param("docId") int docId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("docId", docId);
        
		result = session.selectList(objectName+"Mapper.findAllParentByDocID", map);
		session.close();
		
		return result;
	}
	
	/**
	 * TODO xml에 아직 추가 안됨, 추가하고 d_techtree.jsp에서 동작하게 + 부트스트랩,grid시스템
	 * @param docId document id
	 * @return List<Document>
	 */
	public List<Document> findAllChildByDocID(@Param("docId") int docId) {
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("docId", docId);
        
		result = session.selectList(objectName+"Mapper.findAllChildByDocID", map);
		session.close();
		
		return result;
	}


	/** 
	 * 계정 id에 대한 Document Resource를 조회함
	 * @param accountId(int)
	 * @return List<Document> by session.selectList
	 * */
	public List<Document> findAllByAccountId(@Param("accountId") int accountId){
		List<Document> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAllByAccountId", accountId);
		session.close();
		
		return result;
	}
}

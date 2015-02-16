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


	public List<Document> findByTitleContainsAndAccountId(@Param("query") String query,@Param("accountId") int accountId) {
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
}

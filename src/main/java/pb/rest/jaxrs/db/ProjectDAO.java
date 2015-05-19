package pb.rest.jaxrs.db;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import pb.rest.jaxrs.vo.Project;

public class ProjectDAO extends PastelbookDAO<Project> {
	final Logger logger = LoggerFactory.getLogger(Project.class);
	
	@Override
	protected void setObjectName() {
		objectName = "Project";
	}
	
	public List<Project> findByTitleContainsAndAccountId(@Param("query") String query,@Param("accountId") int accountId) {
		List<Project> result;
		
		init();
		session = sqlMapper.openSession();
		
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
		result = session.selectList(objectName+"Mapper.findByTitleContainsAndAccountId", map);
		session.close();
		
		return result;
	}
	
	public List<Project> findByDescriptionContainsAndAccountId(@Param("query") String query,@Param("accountId") int accountId) {
		List<Project> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
        
		result = session.selectList(objectName+"Mapper.findByDescriptionContainsAndAccountId", map);
		session.close();
		
		return result;
	}
	
	public List<Project> findAllByAccountIdAndCategoryandQueryAndDateOrder(@Param("query") String query,@Param("accountId") int accountId, @Param("category") String category, @Param("dateOrder") String dateOrder) {
		System.out.println(query);
		List<Project> result;
		
		init();
		session = sqlMapper.openSession();
		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("query", query);
        map.put("accountId", accountId);
        map.put("category", category);
        map.put("dateOrder",dateOrder);
        
		result = session.selectList(objectName+"Mapper.findAllByAccountIdAndCategoryandQueryAndDateOrder", map);
		session.close();
		
		return result;
	}

	/** 
	 * 계정 id에 대한 Project Resource를 조회함
	 * @param accountId(int)
	 * @return List<Project> by session.selectList
	 * */
	public List<Project> findAllByAccountId(int accountId){
		List<Project> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAllByAccountId", accountId);
		session.close();
		
		return result;
	}
	
}

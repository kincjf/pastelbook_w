package pb.rest.jaxrs.db;

import java.io.IOException;
import java.io.Reader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.exceptions.PersistenceException;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class PastelbookDAO<T> implements SimpleDAO<T> {
	public final static String DB_PREFIX = "pb";
	String objectName = null;
	SqlSessionFactory sqlMapper = null;
	SqlSession session = null;

	protected void init() {
		setObjectName();
		initMybatis();
	}
	
	protected void setObjectName(){
		if(objectName == null){
			objectName = "objectName";
		}
	}
	
	protected void initMybatis() {
		if (sqlMapper == null) {
			String resource = "pb/rest/mybatis/mybatisConf.xml";
			Reader reader;
			try {
				reader = Resources.getResourceAsReader(resource);
				sqlMapper = new SqlSessionFactoryBuilder().build(reader);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public List<T> findAll() {
		List<T> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAll");
		session.close();
		
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public T findById(int id) {
		T result = null;
		
		init();
		session = sqlMapper.openSession();
		result = (T) session.selectOne(objectName+"Mapper.findById", id);
		session.close();
		
		return result;
	}

	/** 
	 * Login Id를 조회함
	 * */
	@SuppressWarnings("unchecked")
	@Override
	public T findByName(String name) {
		T result = null;
		
		init();
		session = sqlMapper.openSession();
		result = (T) session.selectOne(objectName+"Mapper.findByName", name);
		session.close();
		
		return result;
	}
	
	@Override
	public T create(T data) {		
		init();
		session = sqlMapper.openSession(true);		// auto commit
			try {
				session.insert(objectName+"Mapper.create", data);		// return primary key
				// 성공할 경우 data에 저장된 값이 할당된다.
			} catch (PersistenceException e) {
				System.out.println(e);
			} finally {
				// primary key 중복 - org.apache.ibatis.exceptions.PersistenceException:
				session.close();

			}
		
		return data;
	}

	/** 
	 * - account 정보와 연계된 resource 정보를 갱신함
	 * @param picture(T) resource 정보
	 * @return 삭제 수 / 0
	 * */
	@Override
	public int update(T picture) {
		int status = 0;
		
		init();
		session = sqlMapper.openSession(true);		// auto commit
		status = session.update(objectName+"Mapper.update", picture);
		// picture._id에 0이 들어간다 왜 그런지는 모르겠지만, _id는 변동하지 않았기 때문에 변동된 값에 대해서만 값이 들어가는 것 같다.
		session.close();
		
		return status;
	}
	
	@Override
	public int delete(int _id) {
		int status = 0;
		
		init();
		session = sqlMapper.openSession(true);		// auto commit
		status = session.delete(objectName+"Mapper.delete", _id);
		session.close();
		
		return status;
	}

	/** 
	 * - account 정보와 연계된 resource 정보를 삭제함
	 * @param id(int) resource의 primary key
	 * @param accountId account key
	 * @return 삭제 수 / 0
	 * */
	public int delete(int _id, int accountId) {
		int status = 0;
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("_id", _id);
		params.put("accountId", accountId);
		
		init();
		session = sqlMapper.openSession(true);		// auto commit
		status = session.delete(objectName+"Mapper.delete", params);
		session.close();
		
		return status;
	}
}

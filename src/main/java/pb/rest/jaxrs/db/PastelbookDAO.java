package pb.rest.jaxrs.db;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class PastelbookDAO<T> implements SimpleDAO<T> {
	public final static String DB_PREFIX = "pb";
	static String objectName = null;
	static SqlSessionFactory sqlMapper = null;
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

	public List<T> findAll() {
		List<T> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAll");
		session.close();
		
		return result;
	}

	@SuppressWarnings("unchecked")
	public T findById(int parseInt) {
		T result;
		
		init();
		session = sqlMapper.openSession();
		result = (T) session.selectOne(objectName+"Mapper.findById", parseInt);
		session.close();
		
		return result;
	}

	public T create(T picture) {
		//Image result;
		
		init();
		session = sqlMapper.openSession(true);
		session.insert(objectName+"Mapper.create", picture);
		//result = (Image)session.selectOne("ImageMapper.findByNotId", picture);
		session.close();
		
		return picture;
	}

	public T update(T picture) {
		//Image result;
		
		init();
		session = sqlMapper.openSession();
		session.update(objectName+"Mapper.update", picture);
		//result = (Image)session.selectOne("ImageMapper.findByNotId", picture);
		session.close();
		
		return picture;
	}

	public void remove(int id) {
		init();
		session = sqlMapper.openSession();
		session.insert(objectName+"Mapper.remove", id);
		session.close();
	}

	public List<T> findAllByName(String query) {
		List<T> result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectList(objectName+"Mapper.findAllByName", query);
		session.close();
		
		return result;
	}
	
	public T findByName(String query){
		T result;
		
		init();
		session = sqlMapper.openSession();
		result = session.selectOne(objectName+"Mapper.findByName", query);
		session.close();
		
		return result;
	}
}

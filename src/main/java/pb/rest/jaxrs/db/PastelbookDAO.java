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

	@Override
	@SuppressWarnings("unchecked")
	public T findById(int parseInt) {
		T result;
		
		init();
		session = sqlMapper.openSession();
		result = (T) session.selectOne(objectName+"Mapper.findById", parseInt);
		session.close();
		
		return result;
	}

	/** 
	 * Login Id를 조회함
	 * */
	@SuppressWarnings("unchecked")
	@Override
	public T findByName(String name) {
		T result;
		
		init();
		session = sqlMapper.openSession();
		result = (T) session.selectOne(objectName+"Mapper.findByName", name);
		session.close();
		
		return result;
	}
	
	@Override
	public T create(T picture) {
		//Image result;
		
		init();
		session = sqlMapper.openSession(true);
		session.insert(objectName+"Mapper.create", picture);
		//result = (Image)session.selectOne("ImageMapper.findByNotId", picture);
		session.close();
		
		return picture;
	}
	
	@Override
	public T update(T picture) {
		//Image result;
		
		init();
		session = sqlMapper.openSession();
		session.update(objectName+"Mapper.update", picture);
		//result = (Image)session.selectOne("ImageMapper.findByNotId", picture);
		session.close();
		
		return picture;
	}
	
	@Override
	public void delete(int id) {
		init();
		session = sqlMapper.openSession();
		session.insert(objectName+"Mapper.delete", id);
		session.close();
	}
}

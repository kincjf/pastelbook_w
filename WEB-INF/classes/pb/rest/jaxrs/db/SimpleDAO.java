package pb.rest.jaxrs.db;

import java.util.List;

public interface SimpleDAO<T> {

	public List<T> findAll();

	public T findById(int parseInt);

	public T create(T picture);

	public T update(T picture);

	public void remove(int id);

	public List<T> findByName(String query);

}

package pb.rest.jaxrs.api;

import java.util.List;

interface BaseResource<T> {
	public List<T> findAllBySessionId(String sessionId);
	
	public T create(T data, String sessionId);

	public int update(T data, String sessionId);

	public int delete(int _id, String sessionId);
}

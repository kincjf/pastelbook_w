package pb.rest.jaxrs.api;

import java.io.Serializable;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pb.rest.jaxrs.db.DocumentDAO;
import pb.rest.jaxrs.vo.Account;
import pb.rest.jaxrs.vo.Document;

@Path("/document")
public class DocumentResource implements Serializable, BaseResource<Document> {

	private static final long serialVersionUID = 7270431233487540868L;
	
	DocumentDAO documentDao = new DocumentDAO();

	@GET
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<Document> findAll() {
		return documentDao.findAll();
	}

	@GET @Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Document findByName(@PathParam("query") String query){
		return documentDao.findByName(query);
	}

	@GET @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Document findById(@PathParam("id") String id){
		return documentDao.findById(Integer.parseInt(id));
	}
	
	/**
	 * SessionId에 대한 Document List를 조회함
	 * 
	 * @param sessionId(String) unique session identifier
	 * @return find - List<Document> / null
	 */
	@Override
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public List<Document> findAllBySessionId(
			@FormParam("sessionId") String sessionId) {
		List<Document> documentDataList = null;
		Account account = null;

		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				documentDataList = documentDao.findAllByAccountId(account.getId());
			}		// else 세션이 존재하지 않는 경우
		}		// else - parameter값(sessionId) 존재시 (client에서 처리)

		return documentDataList;
	}

	/** 
	 * 해당 세션정보에 Document 정보를 저장함
	 * @param document(Document) 프로젝트 정보
	 * @param sessionId(String) unique session identifier 
	 * @return documentData / null           
	 * */
	@Override
	@POST
	@Path("{sessionId}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Document create(Document document, 
			@PathParam("sessionId") String sessionId) {
		Document documentData = null;
		Account account = null;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				// 혹시 모르니 세션값에 대한 id를 넣어줘서 함. 프로그래머가 잘못 입력해서 엉뚱한 값이 들어갈수도 있으니
				document.setAccountId(account.getId());		
				documentData = documentDao.create(document);
			}		// else 세션이 존재하지 않는 경우
		}
		
		return documentData;
	}

	/** 
	 * 해당 세션정보의 Document 정보를 수정함
	 * @param document(Document) 프로젝트 정보
	 * @param sessionId(String) unique session identifier 
	 * @return 갱신된 row 수 / 0
	 * */
	@Override
	@PUT @Path("{sessionId}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public int update(Document document, @PathParam("sessionId") String sessionId) {
		int status = 0;
		Account account = null;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				// 혹시 모르니 세션값에 대한 id를 넣어줘서 함. 프로그래머가 잘못 입력해서 엉뚱한 값이 들어갈수도 있으니
				document.setAccountId(account.getId());
				status = documentDao.update(document);
			}		// else 세션이 존재하지 않는 경우
		}
		
		return status;
	}

	/** 
	 * 해당 세션정보의 Document 정보를 삭제함, docs에 fk 설정 때문에 Document도 함께 삭제됨
	 * @param _id(int) document primary key 
	 * @param sessionId(String) unique session identifier 
	 * @return 1(삭제 성공) / 0(삭제 이력 없음)           
	 * */
	@Override
	@DELETE @Path("{sessionId}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public int delete(@PathParam("_id") int _id, @FormParam("sessionId") String sessionId){
		Account account = null;
		int status = 0;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
			status = documentDao.delete(_id, account.getId());
			}		// else 세션이 존재하지 않는 경우
		}
		
		return status;
	}
}

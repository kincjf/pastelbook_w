package pb.rest.jaxrs.api;

import java.io.Serializable;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pb.rest.jaxrs.db.ResImageDAO;
import pb.rest.jaxrs.vo.Account;
import pb.rest.jaxrs.vo.ResImage;

@Path("/resource/image")
public class ResImageResource implements Serializable {

	private static final long serialVersionUID = 7873330816524267933L;

	private static ResImageDAO imageResourceDao = new ResImageDAO();

//	/**
//	 * search all of images list
//	 * 
//	 * @param id
//	 *            (String) primary of table
//	 */
//	@GET
//	@Produces({ MediaType.APPLICATION_JSON })
//	// MediaType.APPLICATION_XML,
//	public List<ResImage> findAll() {
//		return imageResourceDao.findAll();
//	}

//	/**
//	 * image명에 따른 정보조회
//	 * 
//	 * @param name
//	 *            (String) name of image
//	 * @return ResImage
//	 */
//	@GET
//	@Path("search/{name}")
//	@Produces({ MediaType.APPLICATION_JSON })
//	// MediaType.APPLICATION_XML,
//	public ResImage findByName(@PathParam("name") String name) {
//		return imageResourceDao.findByName(name);
//	}
//
//	/**
//	 * search image by primary key(index)
//	 * 
//	 * @param id
//	 *            (String) primary of table
//	 */
//	@GET
//	@Path("{id}")
//	@Produces({ MediaType.APPLICATION_JSON })
//	// MediaType.APPLICATION_XML,
//	public ResImage findByImageId(@PathParam("id") String id) {
//		return imageResourceDao.findById(Integer.parseInt(id));
//	}

	/**
	 * SessionId에 대한 Image List를 조회함 (내 컬렉션)
	 * 
	 * @param sessionId
	 *            (String) unique session identifier
	 * @return find - List<ResImage> / null
	 */
	@POST
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public List<ResImage> findAllBySessionId(
			@FormParam("sessionId") String sessionId) {
		List<ResImage> imageDataList = null;
		Account account = null;

		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				imageDataList = imageResourceDao.findAllByAccountId(account.getId());
			}		// else 세션이 존재하지 않는 경우
		}		// else - parameter값(sessionId) 존재시 (client에서 처리)

		return imageDataList;
	}

	/** 
	 * 해당 세션정보에 내 컬렉션 이미지 정보를 저장함
	 * @param picture(ResImage) 이미지 정보
	 * @param sessionId(String) unique session identifier 
	 * @return imageData / null           
	 * */
	@POST
	@Path("{sessionId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public ResImage create(ResImage picture,
			@PathParam("sessionId") String sessionId) {
		ResImage imageData = null;
		Account account = null;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				// 혹시 모르니 세션값에 대한 id를 넣어줘서 함. 프로그래머가 잘못 입력해서 엉뚱한 값이 들어갈수도 있으니
				picture.setAccountId(account.getId());		
				imageData = imageResourceDao.create(picture);
			}		// else 세션이 존재하지 않는 경우
		}
		
		return imageData;
	}

	/** 
	 * 해당 세션정보의 이미지 정보를 수정함
	 * @param picture(ResImage) 이미지 정보
	 * @param sessionId(String) unique session identifier 
	 * @return 갱신된 row 수 / 갱신 이력 없
	 * */
	@PUT
	@Path("{sessionId}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public int update(ResImage picture, @PathParam("sessionId") String sessionId) {
		int status = 0;
		Account account = null;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
				// 혹시 모르니 세션값에 대한 id를 넣어줘서 함. 프로그래머가 잘못 입력해서 엉뚱한 값이 들어갈수도 있으니
				picture.setAccountId(account.getId());
				status = imageResourceDao.update(picture);
			}		// else 세션이 존재하지 않는 경우
		}
		
		return status;
	}

	/** 
	 * 해당 세션정보의 이미지 정보를 수정함
	 * @param id(int) image primary key 
	 * @param sessionId(String) unique session identifier 
	 * @return 1(삭제 성공) / 0(삭제 이력 없음)           
	 * */
	@DELETE
	@Path("{_id}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public int delete(@PathParam("_id") int _id, @FormParam("sessionId") String sessionId) {
		Account account = null;
		int status = 0;
		
		if (sessionId != null) { // parameter값(sessionId)이 없는 경우 (defensive programming, client에서 처리 함)
			account = AccountResource.sessionCheck(sessionId);

			if (account != null) { // 세션이 존재하는 경우
			status = imageResourceDao.delete(_id, account.getId());
			}		// else 세션이 존재하지 않는 경우
		}
		return status;
	}
}

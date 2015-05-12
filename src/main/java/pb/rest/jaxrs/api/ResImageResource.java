package pb.rest.jaxrs.api;

import java.io.Serializable;
import java.util.ArrayList;
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

import pb.rest.jaxrs.db.ResImageDAO;
import pb.rest.jaxrs.vo.Account;
import pb.rest.jaxrs.vo.ResImage;

@Path("/resource/image")
public class ResImageResource implements Serializable {

	private static final long serialVersionUID = 7873330816524267933L;

	private static ResImageDAO imageResourceDao = new ResImageDAO();

	/**
	 * search all of images list
	 * 
	 * @param id
	 *            (String) primary of table
	 */
	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public List<ResImage> findAll() {
		return imageResourceDao.findAll();
	}

	/**
	 * image명에 따른 정보조회
	 * 
	 * @param name
	 *            (String) name of image
	 * @return ResImage
	 */
	@GET
	@Path("search/{name}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public ResImage findByName(@PathParam("name") String name) {
		return imageResourceDao.findByName(name);
	}

	/**
	 * search image by primary key(index)
	 * 
	 * @param id
	 *            (String) primary of table
	 */
	@GET
	@Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public ResImage findByImageId(@PathParam("id") String id) {
		return imageResourceDao.findById(Integer.parseInt(id));
	}

	/**
	 * SessionId에 대한 Image List를 조회함 (내 컬렉션)
	 * 
	 * @param sessionId
	 *            (String) unique session identifier
	 * @return find - List<ResImage> / null
	 */
	@POST
	@Path("user")
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

	@POST
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public ResImage create(ResImage picture) {
		return imageResourceDao.create(picture);
	}

	@PUT
	@Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public ResImage update(ResImage picture) {
		return imageResourceDao.update(picture);
	}

	@DELETE
	@Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public void delete(@PathParam("id") int id) {
		imageResourceDao.delete(id);
	}
}

package pb.rest.jaxrs.api;

import java.io.Serializable;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import pb.rest.jaxrs.db.ResVideoDAO;
import pb.rest.jaxrs.vo.ResVideo;

@Path("/resource/video")
public class ResVideoResource implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -7427796875148845006L;

	
	ResVideoDAO dao = new ResVideoDAO();

	@GET
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<ResVideo> findAll() {
		return dao.findAll();
	}

	@GET @Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<ResVideo> findByName(@PathParam("query") String query){
		return dao.findAllByName(query);
	}

	@GET @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResVideo findById(@PathParam("id") String id){
		return dao.findById(Integer.parseInt(id));
	}

	@POST
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResVideo create(ResVideo picture){
		return dao.create(picture);
	}

	@PUT @Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResVideo update(ResVideo picture) {
		return dao.update(picture);
	}

	@DELETE @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public void remove(@PathParam("id") int id){
		dao.remove(id);
	}
}

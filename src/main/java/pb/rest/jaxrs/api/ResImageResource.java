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

import pb.rest.jaxrs.db.ResImageDAO;
import pb.rest.jaxrs.vo.ResImage;

@Path("/resource/image")
public class ResImageResource implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7873330816524267933L;
	
	ResImageDAO dao = new ResImageDAO();

	@GET
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<ResImage> findAll() {
		return dao.findAll();
	}

	@GET @Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<ResImage> findByName(@PathParam("query") String query){
		return dao.findAllByName(query);
	}

	@GET @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResImage findById(@PathParam("id") String id){
		return dao.findById(Integer.parseInt(id));
	}

	@POST
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResImage create(ResImage picture){
		return dao.create(picture);
	}

	@PUT @Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public ResImage update(ResImage picture) {
		return dao.update(picture);
	}

	@DELETE @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public void remove(@PathParam("id") int id){
		dao.remove(id);
	}
}

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

import pb.rest.jaxrs.db.ProjectDAO;
import pb.rest.jaxrs.vo.Project;

@Path("/project")
public class ProjectResource implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7270431233487540868L;
	
	ProjectDAO dao = new ProjectDAO();

	@GET
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public List<Project> findAll() {
		return dao.findAll();
	}

	@GET @Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Project findByName(@PathParam("query") String query){
		return dao.findByName(query);
	}

	@GET @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Project findById(@PathParam("id") String id){
		return dao.findById(Integer.parseInt(id));
	}

	@POST
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Project create(Project picture){
		return dao.create(picture);
	}

	@PUT @Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public Project update(Project picture) {
		return dao.update(picture);
	}

	@DELETE @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON }) // MediaType.APPLICATION_XML,
	public void delete(@PathParam("id") int id){
		dao.delete(id);
	}
}

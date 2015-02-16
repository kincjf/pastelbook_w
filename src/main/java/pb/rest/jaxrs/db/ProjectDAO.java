package pb.rest.jaxrs.db;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import pb.rest.jaxrs.vo.Project;

public class ProjectDAO extends PastelbookDAO<Project> {
	final Logger logger = LoggerFactory.getLogger(Project.class);
	
	@Override
	protected void setObjectName() {
		objectName = "Project";
	}
}

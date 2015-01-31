package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Project;

public class ProjectDAO extends PastelbookDAO<Project> {

	@Override
	protected void setObjectName() {
		if(objectName == null){
			objectName = "Project";
		}
	}

}

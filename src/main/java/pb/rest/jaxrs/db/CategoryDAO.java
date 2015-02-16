package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.Category;

public class CategoryDAO extends PastelbookDAO<Category> {

	@Override
	protected void setObjectName() {
		objectName = "Category";
	}
}

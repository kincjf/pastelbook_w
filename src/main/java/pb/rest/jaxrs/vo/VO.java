package pb.rest.jaxrs.vo;

import org.pojomatic.Pojomatic;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class VO {
	@Override public String toString(){
		return Pojomatic.toString(this);
	}	
}

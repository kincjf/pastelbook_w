package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Account extends VO {
	String nick;
	String email;
	String password;
}

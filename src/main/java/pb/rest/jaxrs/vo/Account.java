package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Account extends VO {
	int _id;
	String nick;
	String email;
	String password;
	String name;

	public Account(){}
	
	public Account(String nick, String email, String password, String name) {
		this.nick = nick;
		this.email = email;
		this.password = password;
		this.name = name;
	}
	
	public Account(int id, String nick, String email, String password, String name) {
		this._id = id;
		this.nick = nick;
		this.email = email;
		this.password = password;
		this.name = name;
	}
	
	
	public int getId() {
		return _id;
	}

	public void setId(int id) {
		this._id = id;
	}

	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}

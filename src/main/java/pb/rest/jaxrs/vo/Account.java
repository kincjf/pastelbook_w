package pb.rest.jaxrs.vo;

import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Account extends VO {
	/** 상태정보를 나타냄 */
	int status;
	
	/** DB Index 순서 (Auto Increment) */
	int _id;
	
	/** Servlet의 Session id */
	String sessionId;
	
	/** User의 별칭 */
	String nick;
	
	String email;
	String password;
	
	/** 성별 - 남자 : 1 / 여자 : 2 */
	int sex;
	
	/** 로그인시 ID */
	String name;
	
	/** 계정 권한 정보 - 관리자 : 100 / 일반유저 : 200  */
	int type;

	public Account() {
	}

	public Account(String nick, String email, String password, String name,
			int type) {
		this.nick = nick;
		this.email = email;
		this.password = password;
		this.name = name;
		this.type = type;
	}

	public Account(int _id, String nick, String email, String password,
			String name, int type) {
		this._id = _id;
		this.nick = nick;
		this.email = email;
		this.password = password;
		this.name = name;
		this.type = type;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	public int getId() {
		return _id;
	}

	public void setId(int id) {
		this._id = id;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
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

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

}

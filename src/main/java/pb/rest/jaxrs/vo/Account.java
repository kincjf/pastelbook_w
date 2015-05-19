package pb.rest.jaxrs.vo;

import org.codehaus.jackson.annotate.JsonProperty;
import org.pojomatic.annotations.AutoProperty;

@AutoProperty
public class Account extends VO {
	/** 상태정보를 나타냄 */
	int status;
	
	/** DB Index 순서 (Auto Increment) */
	@JsonProperty("_id")
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
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	@JsonProperty("_id")
	public int getId() {
		return this._id;
	}

	@JsonProperty("_id")
	public void setId(int id) {
		this._id = id;
	}

	public String getSessionId() {
		return this.sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getNick() {
		return this.nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getSex() {
		return this.sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getType() {
		return this.type;
	}

	public void setType(int type) {
		this.type = type;
	}

}

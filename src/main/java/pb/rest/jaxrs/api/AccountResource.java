package pb.rest.jaxrs.api;

import java.io.Serializable;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import pb.listener.HttpSessionCollector;
import pb.rest.jaxrs.db.AccountDAO;
import pb.rest.jaxrs.vo.Account;

/**
 * 회원정보 관리 - 회원정보조회, 회원가입, 회원정보수정, 로그인, 로그아웃, 세션확인
 */
@Path("/account")
public class AccountResource implements Serializable {

	private static final long serialVersionUID = 565179257959460129L;
	// 자주 쓰는 변수들을 멤버변수로 쓸 수 있으나, 자주 바뀌는 변수들은 공유할 가능성이 있기 때문에
	// 멤버변수로는 선언하지 않는 것이 좋을 것 같음.
	AccountDAO accountDao = new AccountDAO();

	@GET
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public List<Account> findAll() {
		return accountDao.findAll();
	}

	@GET
	@Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public Account findByName(@PathParam("query") String query) {
		return accountDao.findByName(query);
	}

	@GET
	@Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public Account findById(@PathParam("id") String id) {
		return accountDao.findById(Integer.parseInt(id));
	}

	@POST
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public Account create(Account picture) {
		return accountDao.create(picture);
	}

	@PUT
	@Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public int update(Account picture) {
		return accountDao.update(picture);
	}

	/**
	 * 해당 primary key의 계정 삭제
	 * @param id - unique account id
	 * @return 삭제한 계정 수 - 1 / 0
	 */
	@DELETE
	@Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public int delete(@PathParam("id") int id) {
		return accountDao.delete(id);
	}

	/**
	 * 해당 session의 logout 수행
	 * @param sessionId - unique session id
	 * @return 1(로그아웃 성공) / -1(로그아웃 실패)
	 */
	@POST
	@Path("logout")
	@Produces({ MediaType.APPLICATION_JSON })
	public int logout(@FormParam("sessionId") String sessionId,
			@Context HttpServletRequest request) {
		HttpSession session = HttpSessionCollector.find(sessionId);
		int status = -1;
		
		if (session != null) { // 세션 삭제
			session.invalidate();
			status = 1;
		}
		
		return status;
	}
	
	/**
	 * session 존재여부 확인
	 * @param sessionId - server에서 받은 unique session id
	 * @return vaild - Account(status = 1)
	 *         invaild - null(status = -1)
	 */
	@POST
	@Path("logined")
	// session check
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	// protected는 동작하지 않는다. 왜 그러는지는 찾아봐야겠음
	public static Account sessionCheck(@FormParam("sessionId") String sessionId) {
		HttpSession session = HttpSessionCollector.find(sessionId);
		Account currentAccount = null;

		if (session == null) { // 세션 없음
			currentAccount = new Account();
			currentAccount.setStatus(-1);
		} else { // 세션 존재
			currentAccount = (Account) session.getAttribute("account");
			currentAccount.setStatus(1);
		}

		return currentAccount;
	}

	/**
	 * 로그인 확인
	 * 
	 * @return success - [object type of account data](status = 1) fail -
	 *         null(status = 1)
	 * */
	@POST
	@Path("login")
	// session check
	@Produces({ MediaType.APPLICATION_JSON })
	// MediaType.APPLICATION_XML,
	public Account login(@FormParam("account") String id,
			@FormParam("pw") String password,
			@Context HttpServletRequest request) {

		/**
		 * @link 
		 *       https://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet
		 *       /http/HttpServletRequest.html#getSession(boolean)
		 */
		HttpSession session = null;
		
		Account accountBean = new Account();
		Account accountBeanFromDB = null;

		if (id != null) {
			if (password != null) {
				// 입력한 account가 Account에서는 name이다.(햇갈리기 때문에 나중에 바꿔야함)
				accountBeanFromDB = accountDao.findByName(id);

				if (accountBeanFromDB != null) { // 아이디 존재여부 확인
					if (accountBeanFromDB.getPassword().equals(password)) {
						// password 일치시 세션에 account정보 등록
						accountBean.setStatus(1);
						accountBean.setId(accountBeanFromDB.getId());
						accountBean.setName(id);
						accountBean.setNick(accountBeanFromDB.getNick());
						accountBean.setEmail(accountBeanFromDB.getEmail());
						accountBean.setType(accountBeanFromDB.getType());  // 계정 권한을 말하는 것 같음
						// 보안을 위해서 패스워드는 세션에 저장하지 않음

						session = request.getSession(true); // make new session

						accountBean.setSessionId(session.getId());
						
						session.setAttribute("account", accountBean);
					} else { // 패스워드가 틀린경우
						accountBean.setStatus(-1);
					}
				} else { // 아이디가 없는경우 - 가입되지 않음
					accountBean.setStatus(-1);
				}
			} else { // 패스워드를 입력하지 않은 경우(defensive programming - 일반적으로 client에서
						// 처리)
				accountBean.setStatus(-1);
			}
		} else { // id를 입력하지 않은 경우(defensive programming - 일반적으로 client에서 처리)
			accountBean.setStatus(-1);
		}

		return accountBean;
	}
}

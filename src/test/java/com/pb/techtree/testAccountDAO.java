package com.pb.techtree;

import junit.framework.Assert;
import junit.framework.TestCase;

import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;

import pb.rest.jaxrs.db.AccountDAO;
import pb.rest.jaxrs.vo.Account;



@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class testAccountDAO extends TestCase {
	Account bean;
	
	
	protected void setUp() throws Exception {
		super.setUp();

//		bean = new Account("파스텔북", "mail", "hitit113112", "pb", "pb");
	}

	public void test_1_login_check() {
		AccountDAO dao = new AccountDAO();
		try {
			Account fromDB = dao.findByName(bean.getNick());
			assertEquals(bean.getPassword(), fromDB.getPassword());
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test create fail :" + e.getMessage());
		}
	}
}
package com.pb.techtree;

import java.util.Date;

import junit.framework.Assert;
import junit.framework.TestCase;

import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class testDocumentDAO extends TestCase {
	DocumentBean bean;
	
	
	protected void setUp() throws Exception {
		super.setUp();
		bean = new DocumentBean(7000000, "t", "c", 7777, new Date(System
					.currentTimeMillis()-2000000), 0);
	}

	public void test_1_create() {
		DocumentDAO dao = new DocumentDAO();
		try {
			int id = dao.create(bean);
			bean.setId(id);
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test create fail :" + e.getMessage());
		}
	}

	public void test_2_modify() {
		DocumentDAO dao = new DocumentDAO();
		
		try {
			int id = dao.create(bean);
			bean.setId(id);
			dao.modify(new DocumentBean(bean.getId(), "t", "a", bean.getProjectId(), new Date(
					System.currentTimeMillis()), 1));
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test modify fail");
		}
	}
	
	public void test_3_findById() {
		DocumentDAO dao = new DocumentDAO();
		
		try {
			int id = dao.create(bean);
			bean.setId(id);
			DocumentBean bean = dao.findById(id);
			
			assertEquals(id, bean.getId());
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test modify fail");
		}
	}


	public void test_4_findAll() {
		DocumentDAO dao = new DocumentDAO();
		try {
			dao.findAll();
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test findAll fail");
		}
	}
}

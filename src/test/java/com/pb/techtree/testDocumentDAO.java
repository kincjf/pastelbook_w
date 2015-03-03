package com.pb.techtree;

import java.util.Date;

import junit.framework.Assert;
import junit.framework.TestCase;

import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;

import pb.rest.jaxrs.db.DocumentDAO;
import pb.rest.jaxrs.vo.Document;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class testDocumentDAO extends TestCase {
	Document bean;
	
	
	protected void setUp() throws Exception {
		super.setUp();
		bean = new Document(7000000, "t", "c", 7777, new Date(System
					.currentTimeMillis()-2000000),"", "", 0, 0);
	}

	public void test_1_create() {
		DocumentDAO dao = new DocumentDAO();
		try {
			Document id = dao.create(bean);
			bean.setId(id.getId());
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test create fail :" + e.getMessage());
		}
	}

	public void test_2_modify() {
		DocumentDAO dao = new DocumentDAO();
		
		try {
			Document id = dao.create(bean);
			bean.setId(id.getId());
			dao.update(new Document(bean.getId(), "t", "a", bean.getProjectId(), new Date(
					System.currentTimeMillis()), "", "", 1, 0));
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail("test modify fail");
		}
	}
	
	public void test_3_findById() {
		DocumentDAO dao = new DocumentDAO();
		
		try {
			Document id = dao.create(bean);
			bean.setId(id.getId());
			Document bean = dao.findById(id.getId());
			
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

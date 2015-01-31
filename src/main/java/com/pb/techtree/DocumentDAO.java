package com.pb.techtree;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DocumentDAO {
	// public DocumentBean create(){	}
	// public DocumentBean modify(){	}
	// public DocumentBean remove(){	}
	// public DocumentBean findById(){	}
	// public DocumentBean findByProjectId(){	}
	
	
	public int create(DocumentBean bean) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		PreparedStatement ptmt = conn.prepareStatement("INSERT INTO pb.pb_docs "
						+ "(title, content, projectId, postedDate, category) "
						+ "VALUES ( ?, ?, ?, ?, ? );", Statement.RETURN_GENERATED_KEYS);

		ptmt.setString(1, bean.getTitle());
		ptmt.setString(2, bean.getContents());
		ptmt.setInt(3, bean.getProjectId());
		ptmt.setTimestamp(4, new java.sql.Timestamp(bean.getPostedDate().getTime()));
		ptmt.setInt(5, bean.getCategory());
		
		ptmt.executeUpdate();
		
		ResultSet rs = ptmt.getGeneratedKeys();
		
		int id = -1;
		
		if (rs.next()){
			id = rs.getInt(1);
		}
		
		return id;
	}
	
	public void modify(DocumentBean bean) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		PreparedStatement ptmt = conn.prepareStatement("UPDATE pb.pb_docs "
				+ "SET title = ?, content = ?, category = ? "
				+ "WHERE id = ?");

		ptmt.setString(1, bean.getTitle());
		ptmt.setString(2, bean.getContents());
		ptmt.setInt(3, bean.getCategory());
		ptmt.setInt(4, bean.getId());
		
		ptmt.executeUpdate();
	}
	
	
	public DocumentBean findById(int id)
			throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();

		PreparedStatement ptmt = conn
				.prepareStatement("SELECT id, title, content, projectId, postedDate, category "
						+ "FROM pb.pb_docs "
						+ "WHERE id = ?;");

		ptmt.setInt(1, id);
		
		ResultSet rs = ptmt.executeQuery();

		DocumentBean tmp = null;
		
		if (rs.next()) {
			tmp = new DocumentBean(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getDate(5), rs.getInt(6));
		}

		rs.close();
		ptmt.close();
		conn.close();

		return tmp;
	}
	
	public ArrayList<DocumentBean> findAll()
			throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();

		PreparedStatement ptmt = conn
				.prepareStatement("SELECT id, title, content, projectId, postedDate, category "
						+ "FROM pb.pb_docs;");

		ResultSet rs = ptmt.executeQuery();

		ArrayList<DocumentBean> list = new ArrayList<DocumentBean>();

		DocumentBean tmp = null;
		while (rs.next()) {
			tmp = new DocumentBean(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getDate(5), rs.getInt(6));
			list.add(tmp);
		}

		rs.close();
		ptmt.close();
		conn.close();

		return list;
	}
}

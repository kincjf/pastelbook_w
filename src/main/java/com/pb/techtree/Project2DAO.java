package com.pb.techtree;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;



public class Project2DAO {
	
	public void create(Project2Bean bean, int accountId) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		PreparedStatement ptmt = conn.prepareStatement("insert into pb_project "
				+ "(accountId, title, comment, createDate, modifyDate, sceneList, previewImage, width, height)"
				+ " values "
				+ "(?, ?, ?, ?, ?, ?, ?, ?, ?);");
		ptmt.setInt(1, accountId);
		ptmt.setString(2, bean.getTitle());
		ptmt.setString(3, bean.getComment());
		ptmt.setDate(4, new java.sql.Date(bean.getCreateDate().getTime()));
		ptmt.setDate(5, new java.sql.Date(bean.getModifyDate().getTime()));
		ptmt.setString(6, bean.getSceneList());
		ptmt.setString(7, bean.getPreviewImage());
		ptmt.setInt(8, bean.getWidth());
		ptmt.setInt(9, bean.getHeight());
		
		ptmt.executeUpdate();
	}
	
	
	public Project2Bean findById(int projectID) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		
		PreparedStatement ptmt = conn.prepareStatement("SELECT"
				+ " _id, title, comment, createDate, modifyDate,"
				+ " sceneList, previewImage, width, height"
				+ " FROM pb.pb_project where _id=?;");

		ptmt.setInt(1, projectID);
					
		ResultSet rs = ptmt.executeQuery();

		Project2Bean tmp = null;
		if(rs.next()){
			tmp = new Project2Bean(rs.getInt(1), rs.getString("title"), rs.getString("comment")
					, rs.getDate("createDate"), rs.getDate("modifyDate"), rs.getString("sceneList"), rs.getString("previewImage")
					, rs.getInt("width"), rs.getInt("height"));
		}
		
		rs.close();
		ptmt.close();
		conn.close();
	
		return tmp;
	}
	
	public ArrayList<Project2Bean> findAllByAccountId(int accountId) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		ArrayList<Project2Bean> list = new ArrayList<Project2Bean>();
		
		PreparedStatement ptmt = conn.prepareStatement("SELECT _id, title, comment, createDate, modifyDate, sceneList, previewImage, width, height " 
					+ "FROM pb.pb_project "
					+ "Where accountId = ?;");

		ptmt.setInt(1, accountId);
					
		ResultSet rs = ptmt.executeQuery();

		Project2Bean tmp = null;
		
		while(rs.next()){
			tmp = new Project2Bean(rs.getInt(1),rs.getString(2),rs.getString(3),
					rs.getDate(4), rs.getDate(5), rs.getString(6), rs.getString(7),
					rs.getInt(8), rs.getInt(9));
			list.add(tmp);
		}
		
		rs.close();
		ptmt.close();
		conn.close();
	
		return list;
	}
}

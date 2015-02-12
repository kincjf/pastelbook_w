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
				+ "(accountId, title, comment, createDate, modifyDate, sceneList, previewImage, width, height, category) "
				+ " values "
				+ "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
		ptmt.setInt(1, accountId);
		ptmt.setString(2, bean.getTitle());
		ptmt.setString(3, bean.getComment());
		ptmt.setDate(4, new java.sql.Date(bean.getCreateDate().getTime()));
		ptmt.setDate(5, new java.sql.Date(bean.getModifyDate().getTime()));
		ptmt.setString(6, bean.getSceneList());
		ptmt.setString(7, bean.getPreviewImage());
		ptmt.setInt(8, bean.getWidth());
		ptmt.setInt(9, bean.getHeight());
		ptmt.setInt(10, bean.getCategory());
		
		ptmt.executeUpdate();
	}
	
	
	public void modify(Project2Bean bean) {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		PreparedStatement ptmt = null;
		
		try {
			ptmt = conn.prepareStatement("UPDATE pb_project "
					+ "SET title = ?, comment = ?, category = ? "
					+ "WHERE _id = ?");
	
			ptmt.setString(1, bean.getTitle());
			ptmt.setString(2, bean.getComment());
			ptmt.setInt(3, bean.getCategory());
			ptmt.setInt(4, bean.getId());
			
			ptmt.executeUpdate();
		} catch (SQLException se){
			System.err.println(String.format("Project2DAO - modify : %s", se.getMessage()));
		} finally {
			try{ if(ptmt!=null) ptmt.close(); } catch (SQLException se){}
			try{ if(conn!=null) conn.close(); } catch (SQLException se){}
		}
	}
	
	
	public Project2Bean findById(int projectID) {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		PreparedStatement ptmt = null;
		Project2Bean tmp = null;
		ResultSet rs = null;
		
		try {
			ptmt = conn.prepareStatement("SELECT "
					+ " _id, title, comment, createDate, modifyDate,"
					+ " sceneList, previewImage, width, height, category "
					+ " FROM pb.pb_project where _id=?;");
	
			ptmt.setInt(1, projectID);
						
			rs = ptmt.executeQuery();
	

			if(rs.next()){
				tmp = new Project2Bean(rs.getInt(1), rs.getString("title"), rs.getString("comment")
						, rs.getDate("createDate"), rs.getDate("modifyDate"), rs.getString("sceneList"), rs.getString("previewImage")
						, rs.getInt("width"), rs.getInt("height"), rs.getInt("category"));
			}
			
			rs.close();
			ptmt.close();
			conn.close();
		} catch (SQLException se){
			
		} finally {
			try{ if(rs!=null) rs.close(); } catch (SQLException se){}
			try{ if(ptmt!=null) ptmt.close(); } catch (SQLException se){}
			try{ if(conn!=null) conn.close(); } catch (SQLException se){}
		}
	
		return tmp;
	}
	
	public ArrayList<Project2Bean> findAllByAccountId(int accountId) throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		
		ArrayList<Project2Bean> list = new ArrayList<Project2Bean>();
		
		PreparedStatement ptmt = conn.prepareStatement("SELECT _id, title, comment, createDate, modifyDate, sceneList, previewImage, width, height, category " 
					+ "FROM pb.pb_project "
					+ "Where accountId = ?;");

		ptmt.setInt(1, accountId);
					
		ResultSet rs = ptmt.executeQuery();

		Project2Bean tmp = null;
		
		while(rs.next()){
			tmp = new Project2Bean(rs.getInt(1),rs.getString(2),rs.getString(3),
					rs.getDate(4), rs.getDate(5), rs.getString(6), rs.getString(7),
					rs.getInt(8), rs.getInt(9), rs.getInt(10));
			list.add(tmp);
		}
		
		rs.close();
		ptmt.close();
		conn.close();
	
		return list;
	}
}

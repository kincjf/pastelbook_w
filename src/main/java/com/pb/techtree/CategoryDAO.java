package com.pb.techtree;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CategoryDAO {

	public ArrayList<CategoryBean> findAll() {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		PreparedStatement ptmt = null;
		ResultSet rs = null;
		CategoryBean tmp = null;
		ArrayList<CategoryBean> list = new ArrayList<CategoryBean>();
		
		try {
			ptmt = conn
					.prepareStatement("select id, ko_name "
							+ "from pb_category "
							+ "order by id");
	
			rs = ptmt.executeQuery();
	
			while (rs.next()) {
				tmp = new CategoryBean(rs.getInt(1), rs.getString(2)); // path,
																		// category,
																		// doc's.postedDate
				list.add(tmp);
			}
			rs.close();
			ptmt.close();
			conn.close();
		} catch(SQLException se){
			System.err.println(String.format("CategoryDAO - findAll : %s", se.getMessage()));
		} finally {
			try{ if(rs!=null) rs.close(); } catch (SQLException se){}
			try{ if(ptmt!=null) ptmt.close(); } catch (SQLException se){}
			try{ if(conn!=null) conn.close(); } catch (SQLException se){}
		}
		return list;
	}

	public CategoryBean findById(int projectID) {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();
		CategoryBean tmp = null;
		PreparedStatement ptmt = null;
		ResultSet rs = null;
		
		try {
			ptmt = conn.prepareStatement("SELECT "
					+ " id, ko_name "
					+ " FROM pb_category where id=?;");
	
			ptmt.setInt(1, projectID);
						
			rs = ptmt.executeQuery();
	
			
			if(rs.next()){
				tmp = new CategoryBean(rs.getInt(1),rs.getString(2));
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
}

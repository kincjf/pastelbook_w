package com.pb.techtree;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CategoryDAO {
	public ArrayList<CategoryBean> findAll()
			throws SQLException {
		TechTreeDAO dao = new TechTreeDAO();
		Connection conn = dao.getConnection();

		PreparedStatement ptmt = conn
				.prepareStatement("select id, ko_name "
						+ "from pb_category "
						+ "order by id");

		// ptmt.setInt(1, parseInt);

		ResultSet rs = ptmt.executeQuery();

		ArrayList<CategoryBean> list = new ArrayList<CategoryBean>();

		CategoryBean tmp = null;
		while (rs.next()) {
			tmp = new CategoryBean(rs.getInt(1), rs.getString(2)); // path,
																	// category,
																	// doc's.postedDate
			list.add(tmp);
		}

		rs.close();
		ptmt.close();
		conn.close();

		return list;
	}
}

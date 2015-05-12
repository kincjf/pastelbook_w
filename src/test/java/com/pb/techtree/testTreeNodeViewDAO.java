package com.pb.techtree;




public class testTreeNodeViewDAO {
	/*
	// for tree
	public ArrayList<TreeNodeViewBean> findFamillyById(int parseInt) throws SQLException {
		PbDAO dao = new PbDAO();
		Connection conn = dao.getConnection();
		
		
		PreparedStatement ptmt = conn.prepareStatement("select d.title, d.content, d.id, t.docType, p.previewImage "
				+ " from pb_docs d, pb_project p, (  select parent 'docId', 'p' as 'docType'  from pb_tree where doc = ?   union   select doc 'docId', 'c' as 'docType'  from pb_tree where parent = ?  union  select ? as 'docId', 't' as  'docType' from dual  ) t "
				+ " where d.projectId=p._id and docId = d.id order by t.docType desc");
		
		ptmt.setInt(1, parseInt);
		ptmt.setInt(2, parseInt);
		ptmt.setInt(3, parseInt);
					
		ResultSet rs = ptmt.executeQuery();

		ArrayList<TreeNodeViewBean> resultList = new ArrayList<TreeNodeViewBean>();
		TreeNodeViewBean tmp = null;
		while(rs.next()){
			tmp = new TreeNodeViewBean(rs.getString(1)
					, rs.getString(2)
					, rs.getInt(3)
					, rs.getString(4), rs.getString(5), ""); // path, category
			resultList.add(tmp);
		}

		rs.close();
		ptmt.close();
		conn.close();
	
		return resultList;
	}
	
	public TreeNodeViewBean findById(int parseInt) throws SQLException {
		PbDAO dao = new PbDAO();
		Connection conn = dao.getConnection();
		
		
		PreparedStatement ptmt = conn.prepareStatement("select d.title, d.content, d.id, p.createDate, p.modifyDate, p.previewImage, c.ko_name, d.postedDate "
				+ "from pb_docs d, pb_project p, pb_category c "
				+ "where d.category = c.id and p._id = d.projectId and d.id = ?");

		ptmt.setInt(1, parseInt);
					
		ResultSet rs = ptmt.executeQuery();

		TreeNodeViewBean tmp = null;
		if(rs.next()){
			tmp = new TreeNodeViewBean(rs.getString(1)
					, rs.getString(2)
					, rs.getInt(3)
					, "t"
					, rs.getDate(4)
					, rs.getDate(5)
					, rs.getString(6), rs.getString(7)
					, rs.getDate(8)
					); // path, category, d.postedDate
		}
		
		rs.close();
		ptmt.close();
		conn.close();
	
		return tmp;
	}
	
	// to do -> use category
	public ArrayList<TreeNodeViewBean> findRecents(int category) throws SQLException {
		PbDAO dao = new PbDAO();
		Connection conn = dao.getConnection();
		
		
		PreparedStatement ptmt = conn.prepareStatement("select d.title, d.content, d.id, p.createDate, p.modifyDate, p.previewImage, c.ko_name, d.postedDate "
				+ "from pb_docs d, pb_project p, pb_category c "
				+ "where c.id = d.category and p._id = d.id "
				+ "order by p.createDate desc");

		//ptmt.setInt(1, parseInt);
					
		ResultSet rs = ptmt.executeQuery();

		ArrayList<TreeNodeViewBean> recents = new ArrayList<TreeNodeViewBean>();
		
		TreeNodeViewBean tmp = null;
		while(rs.next()){
			tmp = new TreeNodeViewBean(rs.getString(1)
					, rs.getString(2)
					, rs.getInt(3)
					, "t"
					, rs.getDate(4)
					, rs.getDate(5)
					, rs.getString(6), rs.getString(7)
					, rs.getDate(8)
					); // path, category, doc's.postedDate
			recents.add(tmp);
		}
		
		rs.close();
		ptmt.close();
		conn.close();
	
		return recents;
	}
	*/
}

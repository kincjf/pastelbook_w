package com.pb.techtree;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.pb.db.PbDAO;


/**
 * Comment	C : 
 * 			R : 
 * 			U : findFamillyById, findById, findRecents
 * 			D : 
 * @category DAO
 * @since 15.02.06
 * @author Hong won gi
 * 
 * {@link http://}
 *
 */
public class TreeNodeViewDAO {
	
	// for tree
	public ArrayList<TreeNodeViewBean> findFamillyById(int parseInt) throws SQLException {
		PbDAO dao = new PbDAO();
		Connection conn = dao.getConnection();
		
		
		PreparedStatement ptmt = conn.prepareStatement("select d.title, d.content, d.id, t.docType, p.previewImage "
				+ " from pb_docs d, pb_project p, "
					+ "(  select parent 'docId', 'p' as 'docType'  from pb_tree where doc = ?   union   select doc 'docId', 'c' as 'docType'  from pb_tree where parent = ?  union  select ? as 'docId', 't' as  'docType' from dual  ) t "
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
	
	
}

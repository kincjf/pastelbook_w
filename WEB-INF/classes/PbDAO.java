package com.pb.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 * DB 연결을 담당하는 스태틱 클래스로 추후 Connection 을 리턴해준다. Connection Pool 기능 추가가 필요하다.
 * 
 * 발생되는 에러코드는 000번대를 사용했다.
 * 
 * @author Hong Won gi
 * @version 1.0
 * 
 */
public class PbDAO {
	// IAO
	/**
	 * mysql 커넥션을 불러오는 메소드이다. dev.hitit.kr , pb 에 연결한다. 사용인코딩은 UTF-8 null
	 * connection 이 리턴될지도 모른다
	 * 
	 * @return Connection
	 * 
	 */
	public Connection getConnection() {
		return getConnectionJDNI();
	}

	/**
	 * 데이터 베이스에 직접 연결하는 메소드이다. 파일 이동시 해당 url등을 수정해주는 것이 중요하다
	 * 
	 * @return Connection
	 */
	public Connection getConnectionDirect() {
		String url, id = "pb", passwd = "wjstks";

		url = "jdbc:mysql://localhost:3306/pb";
		String option = "?useUnicode=true&characterEncoding=UTF-8";
		url = url + option;
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
		} catch (InstantiationException e) {
			System.out.println("Error Code: 001: 드라이버 인스턴스 생성 실패 " + e.getMessage());
		} catch (IllegalAccessException e) {
			System.out.println("Error Code: 002: 잘못된 접근 " + e.getMessage());
		} catch (ClassNotFoundException e) {
			System.out.println("Error Code: 003: Mysql 드라이버 클래스를 찾을 수 없음 " + e.getMessage());
		}

		Connection conn = null;
		try {
			conn = DriverManager.getConnection(url, id, passwd);
		} catch (SQLException e) {
			System.out.println("Error Code: 004: 데이터베이스 연결 실패 (Direct) " + e.getMessage());
			e.printStackTrace();
		} 
		
		return conn;
	}

	/**
	 * JDNI 를 이용해서 커넥션풀에서 커넥션을 얻어오는 메소드이다. 서버의 컨텍스트가 해당 경로에 존재하지 않으면 커넥션을 받아오지
	 * 못한다. 어떻게 컨텍스트 파일을 인식하는지 확인해봐야할 메소드이다.
	 * 
	 * @return Connection
	 */
	public Connection getConnectionJDNI() {
		Context initCtx;
		Connection conn = null;

		try {
			initCtx = new InitialContext();
			Context envCtx = (Context) initCtx.lookup("java:comp/env");
			DataSource ds = (DataSource) envCtx.lookup("jdbc/maria_pb");
			conn = ds.getConnection();
			return conn;
		} catch (NamingException e) {
			e.printStackTrace();
			System.out.println(e);
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("DB Connect Fail: " + e);
		} 
		
		return conn;
	}
}

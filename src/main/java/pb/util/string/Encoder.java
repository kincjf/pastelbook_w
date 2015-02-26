/**
 * FileName	: Encoder.java
 * Comment	: 
 * @version	: 1.0
 * @author	: hong won gi
 * @date	: 2015. 2. 25.
 */
package pb.util.string;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * @author Administrator
 * FileZip. fileutil 로부터 복사
 */
public class Encoder {
	public static String sha1(String filePath) {
		return getMessageDigestString(readFileAsString(filePath), "SHA-1");
	}
	
	public static String string2sha1(String inputstring) {
		return getMessageDigestString(inputstring, "SHA-1");
	}
	
	// arg = [ MD2,MD5,SHA-1,SHA-256,SHA-384,SHA-512 ]
	private static String getMessageDigestString(String input, String alg) {
		String enc = new String();
		MessageDigest md;
		try {
			md = MessageDigest.getInstance(alg);
			md.update(input.getBytes());
			byte[] mb = md.digest();
			for (int i = 0; i < mb.length; i++) {
				byte temp = mb[i];
				String s = Integer.toHexString(new Byte(temp));
				while (s.length() < 2) {
					s = "0" + s;
				}
				s = s.substring(s.length() - 2);
				enc += s;
			}
		} catch (NoSuchAlgorithmException e) {
			return null;
		}
		return enc;
	}

	public static String readFileAsString(String filePath) {
		StringBuffer fileData = new StringBuffer();
		try {
			BufferedReader reader = new BufferedReader(new FileReader(filePath));
			char[] buf = new char[10240];
			int numRead = 0;
			while ((numRead = reader.read(buf)) != -1) {
				String readData = String.valueOf(buf, 0, numRead);
				fileData.append(readData);
			}
			reader.close();
		} catch (IOException ie) {
			System.out.println(ie);
			// logger.error(ie.getMessage());
		}
		return fileData.toString();
	}
}

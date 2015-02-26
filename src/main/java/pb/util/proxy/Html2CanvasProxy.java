/**
 * FileName	: Html2CanvasProxy.java
 * Comment	: 
 * @version	: 1.0
 * @author	: hong won gi
 * @date	: 2015. 2. 24.
 */
package pb.util.proxy;

/**
 * @author Administrator
 *
 * 프록시 패키지는 크로스 사이트 스트립팅 에러를 해결하기 위함임
 * 외부 리소스를 서버가 한번 받아서, 마치 우리 서버에 리소스가 있는 것처럼
 * 보이게 해줌
 */
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/proxy")
public class Html2CanvasProxy extends HttpServlet{
    private static final long serialVersionUID = -6856074403887401174L;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Process request with content.
        /*
        the url can be something like this below
        String queryUrl = "http://www.popgunchaos.com/wp-content/uploads/2011/04/Tick.jpg";
        */
    	System.out.println(request.getParameter("url"));
        String queryUrl = request.getParameter("url");
        
        File file = new File(queryUrl);
        String filename = file.getName().toString(); 
        
        URL url = new URL(queryUrl);
        URLConnection connection = url.openConnection();
        InputStream stream = connection.getInputStream();
        response.setContentType(request.getContentType());
        response.setContentType("image/"+filename.substring(filename.lastIndexOf(".")+1));
        BufferedOutputStream outputStream = new BufferedOutputStream(response.getOutputStream());
        byte[] b = new byte[2048];
        int length;
        while((length = stream.read(b)) > 0){
            outputStream.write(b, 0, length);
        }
    }
}


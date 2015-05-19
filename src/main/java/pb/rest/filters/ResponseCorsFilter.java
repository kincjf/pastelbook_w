package pb.rest.filters;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerResponse;
import com.sun.jersey.spi.container.ContainerResponseFilter;

public class ResponseCorsFilter implements ContainerResponseFilter {

	@Override
	public ContainerResponse filter(ContainerRequest req,
			ContainerResponse contResp) {

		ResponseBuilder resp = Response.fromResponse(contResp.getResponse());
		resp.header("Access-Control-Allow-Origin", "*").header(
				"Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				
		// How long the results of a request can be cached in a result cache.
        .header("Access-Control-Max-Age", "151200")
		
        // As part of the response to a request, which HTTP headers can be used during the actual request.
        .header("Access-Control-Allow-Headers", "x-requested-with,Content-Type");
		
		String reqHead = req.getHeaderValue("Access-Control-Request-Headers");

		if (null != reqHead && !reqHead.equals(null)) {
			resp.header("Access-Control-Allow-Headers", reqHead);
		}
		
		contResp.setResponse(resp.build());
		return contResp;
	}
}
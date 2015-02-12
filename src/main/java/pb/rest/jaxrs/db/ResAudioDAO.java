package pb.rest.jaxrs.db;

import pb.rest.jaxrs.vo.ResAudio;

public class ResAudioDAO extends PastelbookDAO<ResAudio> {

	@Override
	protected void setObjectName() {
		objectName = "ResAudio";
	}
}

require(['jquery', 'underscore', 'jquery_ui', 'handlebars',
		'../models/resources/ResImage'],
function ($, _, jquery_ui, handlebars, ResImage) {

	var dlg_uploadImage = pb.ui.dialog('dlg_upload_image', { isCenter : true });
	var $dlg_uploadImage = dlg_uploadImage.jquerySelector;

	$("#radioset_upload_src").buttonset();


	// 로컬로부터 파일 업로드
	$("#radio_btn_local").on('click',function(){
		$("#targetImage")[0].src = "";
		var imageModel = new ResImage();

		var source = $("#panel_local").html();
		var template = handlebars.compile(source);
		$("#layout_panel").html(template());

		$("#btnUpload").on('click',function(){
			/** expected error occured point */
			
			$("#file_upload").attr("action","fileupload.jsp").attr("method","post").attr("enctype","multipart/form-data");
			$("#file_upload").off("submit").on("submit",function(e){
			    e.preventDefault();
			    var data = new FormData();
			    data.append('type','image');
		    	data.append('uploadFile', $("#text_local_url")[0].files[0]);
		    	
			    
			    console.log($(this));
			    $.ajax({
			    	url      : $(this).attr('action'),
			    	method	 : $(this).attr('method'),
			    	dataType : "text",
			        //cache    : false,
			        data     : data,
			        processData: false,
			    	contentType: false,
			        success  : function(data, textStatus,jqXHR) {
			        	imageModel.set({
					        "path" : data,
					        //"thumbPath" : "i_"+data
					        "thumbPath" : data
				        });
				        imageModel.save();
			        	//alert("파일 "+data+"가 업로드 완료 되었습니다.");
			        	//console.log('success.');
			            //console.log(data);
			        },
			        error	 : function(data) {
			        	//console.log('error !');
			        }
			    });
			}).submit();
			
			//imageModel.save();
		});


		var input = $("#text_local_url")[0];

		// 파일 선택 다이얼로그 닫히자마자 미리보기 바로 띄우기
		input.onchange = function(e) { 
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				
				reader.onload = function (e) {
					$('#targetImage').attr('src', e.target.result);
					imageModel.set({
						"width": $('#targetImage')[0].naturalWidth,
						"height": $('#targetImage')[0].naturalHeight
					});
				}

				//console.log(e.target);
				reader.readAsDataURL(input.files[0]);
				var localFile = input.files[0];
				
				imageModel.set({
					"path" : localFile.name,
					"thumbPath" : "i_"+localFile.name,
					"name" : localFile.name,
					"size" : localFile.size,
					"type" : localFile.type
				});
				//console.log(imageModel);
				//{"_id":1,"path":"./img/content/basket.png","thumbPath":"./img/icon/i_basket.png","name":"basket","size":0,"width":0,"height":0,"type":"icon"}
			}
		};
	});

	// 인터넷으로부터 파일 업로드
	$("#radio_btn_internet").on('click',function(){
		$("#targetImage")[0].src = "";
		var imageModel = new ResImage();

		var source = $("#panel_internet").html();
		var template = handlebars.compile(source);
		$("#layout_panel").html(template());


		$("#btnUpload").on('click',function(){
			/** expected error occured point */
			console.log(imageModel);
			imageModel.save();
		});

		// 엔터시 미리보기 바로 띄우기
		$('#text_internet_url').keyup(function(e) {
			if (e.keyCode == 13) {
				$("#targetImage")[0].src = $("#text_internet_url")[0].value;
				//img.naturalHeight
				//img.naturalWidth
			}
		});

		// url 붙여넣기시 미리보기 바로 띄우기
		$("#text_internet_url").bind('paste', function(e) {
			var el = $(this);
			setTimeout(function() { 
				var text = $(el).val();
				$("#targetImage")[0].src = $("#text_internet_url")[0].value;
				var reader = new FileReader();

				// 바이너리 문자열인 경우
				var webImage = $("#targetImage")[0];

				// http://www.superkts.pe.kr/images/helper/smp_180_16.jpg
				
				if(webImage.src.lastIndexOf('base64') != -1){ 
					reader.readAsBinaryString(webImage.src);
				} else { // url인 경우
					//new File(webImage.src);
					//reader.readAsDataURL();

					imageModel.set({
						"path" : webImage.src,
						"thumbPath" : webImage.src,
						"name" : webImage.src.split('/')[webImage.src.split('/').length-1],
						"size" : 0,
						"type" : 'web',
						"width": webImage.naturalWidth,
						"height": webImage.naturalWidth
					});

					
					var loop = function(){
						if(webImage.complete){
							imageModel.set({
								"width": webImage.naturalWidth,
								"height": webImage.naturalWidth
							});
						} else {
							setTimeout(loop,50);
						}
					}; loop(); // check isCompeleteLoading > img tag
				} // base64Str check
			}, 100);
		}); 
	});

	$("#radioset_upload_src #radio_btn_local").click();
	
	// upload JPEG files
	function UploadFile(file) {
		var xhr = new XMLHttpRequest();

		// start upload
		xhr.open("POST", "admin/fileupload.jsp", true);
		xhr.setRequestHeader("X_FILENAME", file.name);
		xhr.send(file);
	}
	

}); // function()



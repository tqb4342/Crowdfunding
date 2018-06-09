$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		console.log(user);
		if(user != null){
			$("#noLogin").html("");
			 var loginHtml = "<div  class='imglogo'>"+
			 user.username+
             "</div><ul class='logoin-div'>"+
             "<li><a href='personalInfo.html?userId="+ user.uid +"'>个人信息</a></li>"+
             "<li><a href='#' id='logout'>退出登录</a></li></ul>"
			$("#login-div").html(loginHtml);
			bindLogoutEvent();
		}
	});
	

		
		showLsllxdmbdata();
		
		search();
	
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}

function show(data){
	
	//for(var i=0;i<=data.length;i++){
	for(var list in data){
		var code = data[list].code;
		var name = data[list].name;
		var defination = data[list].defination;
	//	console.log(data[list].code)
		var id = data[list].id;
			var tab = '<div class="flex-box col-table"><div class="row row-small"><a href="lybk.html?wordname='+name+'" class="a-more-info" title="1">'+id+'</a></div>'+
			'<div class="row row-normal" ><a href="lybk.html?wordname='+name+'" class="a-more-info">'+code+'</a></div>'+
			'<div class="row row-normal" ><a href="lybk.html?wordname='+name+'" class="a-more-info">'+name+'</a></div>'+
			'<div class="row row-normal"><a href="lybk.html?wordname='+name+'" class="a-more-info"></a></div>'+
			'<div class="row row-widther"><p class="detail-info">'+defination+'</p></div>';
			
			$(".table-body").append(tab);	
	}
}

function showLsllxdmbdata(){
	$(".table-body").empty();
	LsllxdmbManager.getLength(function(length){
		
		var n;
		if(length%80==0){
			n=length/80;
		}else{
			n = length/80+1;
		}
		n=n|0;
	
		console.log(n);
		var up = '<li>'+
      '<a id="up-page" href="#" aria-label="Previous">'+
        '<span aria-hidden="true">上一页</span> </a></li>';
	
     var down = '<li><a id="down-page" href="#" aria-label="Next">'+
         '<span aria-hidden="true">下一页</span></a></li>';
         
		$("#pageBox").empty();
		$("#prePage").empty();
		$("#nextPage").empty();
		$("#prePage").html(up);
		$("#nextPage").html(down);
		$("#current-page").text("当前为第1页，总共"+n+"页");
		for(var i=1;i<=n;i++){
			$("#pageBox").append('<li><a id=page-'+i+' class="get-page" href="#">'+i+'</a></li>');
		}
		var pageId=1;
		LsllxdmbManager.getADataByPage(pageId,function(data){
			show(data);
		});
		
		$(".get-page").click(function(){
			$(".table-body").empty();
			pageId= $(this).attr("id").split("-")[1];
			console.log(pageId);
			$("#current-page").text("当前为第"+pageId+"页，总共"+n+"页");
			LsllxdmbManager.getADataByPage(pageId,function(data){
				show(data);
			});
			
		});
		
		$("#up-page").click(function(){
			
			console.log(pageId);
			if(pageId>1){
				pageId = pageId-1;
			}
			$("#current-page").text("当前为第"+pageId+"页，总共"+n+"页");
				$(".table-body").empty();
				LsllxdmbManager.getADataByPage(pageId,function(data){
					show(data);
				});
			
			
		});
		$("#down-page").click(function(){
			
			console.log(pageId);
			if(pageId<n){
				pageId = Number(pageId)+1;
			}
			$("#current-page").text("当前为第"+pageId+"页，总共"+n+"页");
				$(".table-body").empty();
				LsllxdmbManager.getADataByPage(pageId,function(data){
					show(data);
				});
			
		});
		
	
		$("#current-page").text("当前为第"+pageId+"页，总共"+n+"页");
		
	});
	
	
}


function search(){
	$("#button-search").click(function(){
		var sea = $("#Search").val();
		
		
		if(sea!=""){
			sea = sea.trim();
			LsllxdmbManager.fbByname(sea,function(data){
				console.log(data);
				$(".table-body").empty();
				$("#datapage").empty();
				if(data!=null){
					show(data);
				}else{
					$(".table-body").html("<h2 style='color:#F00'>没有找到该条消息</h2>");
				}
			});
			
		}
	});
	
}
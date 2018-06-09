$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		if(user != null){
			$("#noLogin").html("");
			var adminadd = "";
			if(user.account=="admin"){
				adminadd = "<li><a href='admin.html'>系统管理</a></li>"
			}
			 var loginHtml = "<div  class='imglogo'>"+
			 user.username+
             "</div><ul class='logoin-div'>"+
             "<li><a href='personalInfo.html?userId="+ user.uid +"'>个人信息</a></li>"+adminadd+
             "<li><a href='#' id='logout'>退出登录</a></li></ul>";
			$("#login-div").html(loginHtml);
			bindLogoutEvent();
		}
		showProject();
	});
	
	
	
//	search();
	
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}


//显示众筹项目
function showProject(){
	ProjectManager.findAll(function(listProject){
		console.log(listProject);	
		for(var i=0;i<listProject.length;i++){
			var clas;
			if((i+1)%3==0){
				clas = "panel";
			}else{
				clas = "panel marRight";
			}
			var projecthtml = '<div class="'+clas+'">'+
					'<h1>'+listProject[i].title+'</h1>'+
					'<p>'+listProject[i].maincontent+'</p>'+
					'<a class="more1" href="ProjectInformation.html?projectId='+listProject[i].pid+'">More Info</a>'+
		            '<div class="panel-bottom"></div></div>';
			$("#project-abstract").append(projecthtml);
		}
		
	});
}






function search(){
	$("#button-search").click(function(){
		var sea = $("#Search").val();
		
		
		if(sea!=""){
			sea = sea.trim();
			KzblxdmbManager.fbByname(sea,function(data){
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


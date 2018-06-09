$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		console.log(user);
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
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}


function showProject(){
	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var logo = wordname.split("=")[0];  //用URL传值的属性名
	var tid = wordname.split("=")[1];  //用URL传值的属性值
	console.log(logo);
	if(logo == "tid"){
		TypesManager.getById(tid,function(Types){
			var listProject = Types.myProject;
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
	if(logo == "userId"){
		UserManager.getById(tid,function(User){
			var listProject = User.project;
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
	
	if(logo == "search"){
		var typeid;
		if(tid.trim()=="奖励众筹" || tid.trim()=="公益众筹"){
			if(tid.trim()=="奖励众筹"){
				typeid = 1;
			}
			if(tid.trim()=="公益众筹"){
				typeid = 2;
			}
			TypesManager.getById(typeid,function(Types){
				var listProject = Types.myProject;
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
		}else{
			ProjectManager.getByName(tid.trim(),function(listProject){
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
		
	}
	
}
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
			
			showProject();
			showUser();  //显示用户
			
		}
	});
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}

//显示用户
function showUser(){
	UserManager.findAll(function(listUser){
		for(var list in listUser){
			var account = listUser[list].account;
			var username = listUser[list].username;
			var password = listUser[list].password;
			var number = listUser[list].number;
			var id = listUser[list].uid;
			var flag = listUser[list].flag;
			var yanzheng;
			if(flag=="1"){
				yanzheng = "已通过验证";
			}else{
				yanzheng = '<a id="yanzheng" href="admin.html?flag='+id+'" class="a-more-info" style="color: #bd1d1d;">同意通过验证</a>';
			}
			if(account!="admin"){
				var tab = '<div class="flex-box col-table"><div class="row row-normal"><a href="personalInfo.html?userId='+id+'" class="a-more-info" title="1">'+list+'</a></div>'+
				'<div class="row row-normal" ><a href="personalInfo.html?userId='+id+'" class="a-more-info">'+account+'</a></div>'+
				'<div class="row row-normal" ><a href="personalInfo.html?userId='+id+'" class="a-more-info">'+password+'</a></div>'+
				'<div class="row row-normal"><a href="personalInfo.html?userId='+id+'" class="a-more-info">'+username+'</a></div>'+
				'<div class="row row-normal"><a href="personalInfo.html?userId='+id+'" class="a-more-info">'+number+'</a></div>'+
				'<div class="row row-normal" style="color:#0072E3;">'+yanzheng+'</a></div>'+
				'<div class="row row-normal"><a id="deleteuser" href="admin.html?userId='+id+'" class="a-more-info">删除用户</a></div>';
				$(".table-body").append(tab);
			}
				
		}
			
				var url = decodeURI(window.location.href);
				dwr.engine.setAsync(false);
				if(url.indexOf("?")!=-1){
					var wordname = url.split("?")[1];
					var uid = wordname.split("=")[1];
					var name = wordname.split("=")[0];
					$("#yanzheng").click(function(){
				    	UserManager.updataFlag(uid,function(){
				    		location.href="admin.html";
				    		return;
				    	});	 
				     });
					if(wordname=="userId"){
						UserManager.deleteUser(uid,function(){
							location.href="admin.html";
							return;
						});
					}
					
				}
			
			
		});
}

function showProject(){
	$("#zhongchouid").click(function(){
		ProjectManager.findAll(function(listProject){
			showPro(listProject);
			
			var url = decodeURI(window.location.href);
			dwr.engine.setAsync(false);
			if(url.indexOf("#")!=-1){
				var wordname = url.split("#")[1];
				var pid = wordname.split("=")[1];
				ProjectManager.deleteProject(pid,function(){
					location.href="admin.html";
					return;
				});
			}
			
		});
	});
		
}

function showPro(listProject){
	$("#showmessage").html("");
	$(".table-body").html("");
	var title = '<div class="row row-normal">编号</div>'+
			'<div class="row row-normal">标题</div>'+
			'<div class="row row-normal">众筹类型</div>'+
			'<div class="row row-normal">已筹金额</div>'+
			'<div class="row row-normal">发表日期</div>'+
			'<div class="row row-normal">操作</div>';
	$("#showmessage").html(title);
	for(var i in listProject){
		var title = listProject[i].title;
		var releasedate = listProject[i].releasedate;
		var type = listProject[i].types.name;
		var id = listProject[i].pid;
		var money = listProject[i].money;
		var datetime1 = new Date();
	    datetime1.setTime(releasedate);
	    var year1 = datetime1.getFullYear();
	    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
	    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
	    var date1 = year1+"-"+month1+"-"+day1;
	    var tab = '<div class="flex-box col-table"><div class="row row-normal"><a href="ProjectInformation.html?pid='+id+'" class="a-more-info" title="1">'+i+'</a></div>'+
		'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+title+'</a></div>'+
		'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+type+'</a></div>'+
		'<div class="row row-normal" ><a href="projectManager.html?moneypid='+id+'" class="a-more-info">'+money+'元</a></div>'+
		'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+date1+'</a></div>'+
		'<div class="row row-normal"><a id="deleteuser" href="admin.html#pid='+id+'" class="a-more-info">删除项目</a></div>';
		$(".table-body").append(tab);
	}
}

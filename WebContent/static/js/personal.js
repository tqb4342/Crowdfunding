$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		if(user != null){
			var uid = user.uid;
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
			showMessage();
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

function showMessage(){
	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var uid = wordname.split("=")[1];
	UserManager.getById(uid,function(user){
		console.log(user.number);
		var account = user.account;
		var username = user.username;
		var number = user.number;
		console.log(number);
		$("#changeHeadPic").html(username);
		$("#accountName").html(account);
		$("#nickname").html(username);
		$("#mynumber").html(number);
		
		var manager = '<li><a href="personalInfo.html?userId='+uid+'" id="personalInfoBut">个人信息</a></li>'+
		   '<li><a href="ProjectClassify.html?userId='+uid+'" id="editPersonalInfoBut">发起过的众筹项目</a></li>'+
		   '<li><a href="projectManager.html?userId='+uid+'" id="editPersonalInfoBut">赞助过的众筹项目</a></li>'+
		   '<li><a href="modifyPersonalPassword.html?userId='+uid+'" id="modPasswordBut">修改密码</a></li>';
		$("#menu").html(manager);
		
	});
}
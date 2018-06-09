$(document).ready(function(){
	
	UserManager.checkSession(function(user){
	//	console.log(user);
		if(user != null){
			$("#noLogin").html("");
			 var loginHtml = "<div  class='imglogo'>"+
			 user.username+
             "</div><ul class='logoin-div'>"+
             "<li><a href='spersonalInfo.html?userId="+ user.uid +"'>个人信息</a></li>"+
             "<li><a href='#' id='logout'>退出登录</a></li></ul>"
			$("#login-div").html(loginHtml);
			bindLogoutEvent();
		}
	});

	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var name = wordname.split("=")[1];
	console.log(name);
	
	LybkManager.getByName(name,function(lybk){
		console.log(lybk);
		if(lybk != null){
			var url = lybk.urlAddress;
			var content = lybk.content;
			var urladd = '<a href="'+url+'">【摘自】'+url+'</a>';
			$("#urlAddress").html(urladd);
			$("#lybk-text").html(content);
			
		}else{
			alert("该词条还没有被收录！");
			$("#lybk-text").html("<h1 style='color:#f00;'>该词条还没有被收录！</h1>");
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

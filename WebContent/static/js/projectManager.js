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
		
		//showPro();
		var url = decodeURI(window.location.href);
		dwr.engine.setAsync(false);
		var size = url.split("?").length;
		//alert(size);
		if(size>1){
			
			var wordname = url.split("?")[1];
			var name = wordname.split("=")[0];
			//alert(name);
			var id = wordname.split("=")[1];
			var money = wordname.split("=")[3];
			if(name=="pid"){
				showPro(id,money);
			}
			if(name=="userId"){
				showSelfproject(id)
			}
			if(name=="moneypid"){
				showadminproject(id);
			}
		}
		//
	});
})


function showPro(pid,mymoney){
	
//	var url = decodeURI(window.location.href);
//	dwr.engine.setAsync(false);
//		var wordname = url.split("?")[1];
//		var pid = wordname.split("=")[1];
		ProjectManager.getById(pid,function(Project){
			
			var title = Project.title;
			var releasedate = Project.releasedate;
			var type = Project.types.name;
			var id = Project.pid;
			var money = Project.money;
			var datetime1 = new Date();
		    datetime1.setTime(releasedate);
		    var year1 = datetime1.getFullYear();
		    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
		    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
		    var date1 = year1+"-"+month1+"-"+day1;
		    var t = '<div class="flex-box col-table"><div class="row row-normal"><a href="ProjectInformation.html?pid='+id+'" class="a-more-info" title="1">1</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+title+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+type+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+mymoney+'元</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+money+'元</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+date1+'</a></div>';
			$("#projectmanager").html(t);
		});
	
	
}

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}

function showSelfproject(uid){

		$("#projectmanager").html("");
		$("#moneyid").html("我赞助的金额");
		$("#mymoneyid").html("发起人");
		$("#timeid").html("赞助的时间");
	//	var uid = wordname.split("=")[1];
		UserManager.getById(uid,function(user){
			var fund = user.fund;
			for(f in fund){
				var title = fund[f].project.title;
				var releasedate = fund[f].date;
				var type = fund[f].project.types.name;
				var username = fund[f].project.user.username;
				var id = fund[f].project.pid;
				var money = fund[f].money;
				var datetime1 = new Date();
			    datetime1.setTime(releasedate);
			    var year1 = datetime1.getFullYear();
			    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
			    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
			    var date1 = year1+"-"+month1+"-"+day1;
			    var t = '<div class="flex-box col-table"><div class="row row-normal"><a href="ProjectInformation.html?pid='+id+'" class="a-more-info" title="1">'+f+'</a></div>'+
				'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+title+'</a></div>'+
				'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+type+'</a></div>'+
				'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+username+'</a></div>'+
				'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+money+'元</a></div>'+
				'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+date1+'</a></div>';
				$("#projectmanager").append(t);
			}
			
		});
	
}


function showadminproject(pid){
	$("#projectmanager").html("");
	$("#typeid").html("赞助人");
	$("#mymoneyid").html("项目类型");
	$("#moneyid").html("赞助金额");
	$("#timeid").html("赞助的时间");
//	var uid = wordname.split("=")[1];
	ProjectManager.getById(pid,function(project){
		var fund = project.fund;
		for(f in fund){
			var title = fund[f].project.title;
			var type = fund[f].project.types.name;
			var releasedate = fund[f].date;
			var username = fund[f].user.username;
			var id = fund[f].project.pid;
			var money = fund[f].money;
			var datetime1 = new Date();
		    datetime1.setTime(releasedate);
		    var year1 = datetime1.getFullYear();
		    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
		    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
		    var date1 = year1+"-"+month1+"-"+day1;
		    var t = '<div class="flex-box col-table"><div class="row row-normal"><a href="ProjectInformation.html?pid='+id+'" class="a-more-info" title="1">'+f+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+title+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+username+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+type+'</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+money+'元</a></div>'+
			'<div class="row row-normal" ><a href="ProjectInformation.html?pid='+id+'" class="a-more-info">'+date1+'</a></div>';
			$("#projectmanager").append(t);
		}
	});
}
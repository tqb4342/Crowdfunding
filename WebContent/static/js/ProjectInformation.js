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
		showMessage(user);
	});
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}


function showMessage(user){
	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var pid = wordname.split("=")[1];
	console.log(pid);
	ProjectManager.getById(pid,function(project){
		console.log(project);
		var title = project.title;
		var text = project.texts;
		var releasedate = project.releasedate;
		var projectUid = project.uid;
		//判断用户与发起人是否是同一个人
		if(user!=null && projectUid==user.uid){
			text = text+'<br><p><button id="changeid" type="button" class="btn btn-primary" style="margin-left:477px">修改</button></p>';
		}else{
			text = text+'<br><p><button id="sponsorid" type="button" class="btn btn-primary" style="margin-left:477px;">赞助一下</button></p>';
		}
		
		console.log(title);
		$("#project-id").html(title);
		$("#hotTableList").html(text);
		var projectUser = project.user;
		var username = projectUser.username;
		var number = projectUser.number;
		
		$("#createper").html(username);
		$("#numberid").html(number);
		var datetime = new Date();
	    datetime.setTime(releasedate);
	    var year = datetime.getFullYear();
	    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	    var day = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	    var date = year+"-"+month+"-"+day;
		$("#timeid").html(date);
		var type = project.types.name;
		$("#typeid").html(type);
		
		
		//显示评论
		var answer = project.com;
		for(an in answer){
	    	var username = answer[an].user.username;
	    	var ptext = answer[an].ptext;
	    	var pdate = answer[an].pdate;
	    	var datetime1 = new Date();
		    datetime1.setTime(pdate);
		    var year1 = datetime1.getFullYear();
		    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
		    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
		    var date1 = year1+"-"+month1+"-"+day1;
		    var addanswer =  '<li style="width:95%"><div class="cuss-head woman talk">'+      
				    '<img src="static/image/user.jpg">'+    
				    '<p class="user">  '+username+'  </p>      <p style="display: inline;width:20%">'+ptext+'</p>'+   
				    '<span class="see2" style="display: inline;width:20%">'+date1+'</span>  </div></li>';
		    $("#add-answer").append(addanswer);
	    }
		
		
		
	});
	
	
	$("#question-submit").click(function(){
		if(user==null){
			alert("您还未登录！！");
			return;
		}
		var quest = $("#reply-text").val();
		if(quest!=""){
			CommentManager.save(pid,user.uid,quest,function(){
				location.href="ProjectInformation.html?pid="+pid;
			})
		}
	});
	
	$("#changeid").click(function(){
		location.href="write.html?pid="+pid;
	});
	
	$("#sponsorid").click(function(){
		$("#admin-login-modal").modal("show");	
	});
	$("#money-submit").click(function(){
		var money = $("#money-input").val().trim();
		FundManager.save(pid,user.uid,parseFloat(money),function(){
			location.href="projectManager.html?pid="+pid+"=money="+money;
			return;
		});
	});
	
}


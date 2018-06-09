
$(document).ready(function(){
	
	//用户登录信息
	UserManager.checkSession(function(user){
		var uid;
		if(user != null){
			uid = user.uid;
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
			var url = decodeURI(window.location.href);
			dwr.engine.setAsync(false);
			if(url.indexOf("?")!=-1){
				var wordname = url.split("?")[1];
				var pid = wordname.split("=")[1];
				changeProjectInfo(pid);
				return;
			}
			
		}
		
		
		//类型下拉框
		TypesManager.QueryAll(function(btype){
			$("#type-select").empty();
		for(var i=0;i<btype.length;i++){
			var op = '<option>'+btype[i].name+'</option>';
			$("#type-select").append(op);
		}
		
		$("#submit-blog").click(function(){
			var text = $("#addquestion-content-div").html();  //内容
			var title = $("#addquestion-title-input").val();  //标题
			var maincontent = $("#addquestion-abstract-input").val();  //摘要
			var tid;
			if(text==""||title==""||maincontent==""){
				$("#submit-tishi").text("众筹标题\摘要和内容不能为空。");
				return;
			}
			
			var a = $("#type-select").val();
			for(var i=0;i<btype.length;i++){
				if(btype[i].name==a){
					tid = btype[i].tid;
				}
			}
			if(user != null){
				ProjectManager.save(uid,tid,title,text,maincontent,function(){
					console.log(uid,text,title,maincontent);
					location.href="index.html";
				});
			}else{
				alert("请先登录！！！");
			}	
			

		});
		
		
	});
	
	

});
	
	

})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}


function changeProjectInfo(pid){

	ProjectManager.getById(pid,function(project){
		console.log(project);
		var title = project.title;
		var maincontent = project.maincontent;
		var text = project.texts;
		$("#addquestion-content-div").html(text);  //内容
		$("#addquestion-title-input").val(title);  //标题
		$("#addquestion-abstract-input").val(maincontent);
		
		//类型下拉框
		TypesManager.QueryAll(function(btype){
			$("#type-select").empty();
		for(var i=0;i<btype.length;i++){
			var op = '<option>'+btype[i].name+'</option>';
			$("#type-select").append(op);
		}
			$("#submit-blog").click(function(){
				var text = $("#addquestion-content-div").html();  //内容
				var title = $("#addquestion-title-input").val();  //标题
				var maincontent = $("#addquestion-abstract-input").val();  //摘要
				var tid;
				if(text==""||title==""||maincontent==""){
					$("#submit-tishi").text("众筹标题\摘要和内容不能为空。");
					return;
				}
				
				var a = $("#type-select").val();
				for(var i=0;i<btype.length;i++){
					if(btype[i].name==a){
						tid = btype[i].tid;
					}
				}
			
					ProjectManager.updata(pid,tid,title,text,maincontent,function(){
						location.href="ProjectInformation.html?pid="+pid;
					});
				
				
	
			});
		});
		
	});
}
	
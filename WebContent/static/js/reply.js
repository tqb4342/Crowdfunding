$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		console.log(user);
		if(user != null){
			var uid = user.uid;
			$("#noLogin").html("");
			 var loginHtml = "<div  class='imglogo'>"+
			 user.username+
             "</div><ul class='logoin-div'>"+
             "<li><a href='personalInfo.html?userId="+ uid +"'>个人信息</a></li>"+
             "<li><a href='#' id='logout'>退出登录</a></li></ul>"
			$("#login-div").html(loginHtml);
			bindLogoutEvent();
			showQuestion(uid);
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

function showQuestion(uid){
	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var pid = wordname.split("=")[1];
	console.log(pid);
	QuestionManager.getById(pid,function(question){
		
		var author = question.user.username;
		var context = question.context;
		var time = question.releasedate;
		var num = question.answer.length;
		var datetime = new Date();
	    datetime.setTime(time);
	    var year = datetime.getFullYear();
	    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	    var day = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	    var date = year+"-"+month+"-"+day;
		
		
		
		var addquestion ='<div id="question" style="display: block;">'+
    	'<ul><li>'+  
        '<h4>'+context+'</h4>'+
        '<span class="see2" style="display: inline;width:20%">'+date+'</span>'+ 
        '<span class="see2" style="display: inline;width:20%">提问人：'+author+'</span><br/><br/>'+
        '<div class="col-sm-7">'+
        '<textarea id="reply-text" class="form-control" name="bz" id="disContent" cols="30" rows="10"></textarea>'+
        '<br/><p><button id="question-submit" type="button" class="btn btn-primary" style="margin-left:477px">确认提交</button></p>'
        '</ul></div></div>';
		$("#center").html(addquestion);
	});
	
	
	$("#question-submit").click(function(){
		var quest = $("#reply-text").val();
		if(quest!=""){
			AnswerManager.save(pid,uid,quest,function(){
				location.href="answer.html?pid="+pid;
			})
		}
	});

}


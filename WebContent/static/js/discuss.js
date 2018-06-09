$(document).ready(function(){
	
	UserManager.checkSession(function(user){
		console.log(user);
		var flag1;
		if(user != null){
			$("#noLogin").html("");
			 var loginHtml = "<div  class='imglogo' style='color: #ffff00;'>"+
			 user.username+
             "</div><ul class='logoin-div'>"+
             "<li><a href='personalInfo.html?userId="+ user.uid +"'>个人信息</a></li>"+
             "<li><a href='#' id='logout'>退出登录</a></li></ul>"
			$("#login-div").html(loginHtml);
			bindLogoutEvent();
			if(user.flag==1){
				$("#button-teacher").html('<button id="question-teacher" type="button" class="btn btn-primary" style="margin-left:750px">我要提问</button>');
				question(user.uid);   //弹出提问的模态框
				flag1 = 1;
			}else{
				flag1 = 0;
			}
		}else{
			flag1 = 1;
		}
		
		var url = decodeURI(window.location.href);
		dwr.engine.setAsync(false);
		var wordname = url.split("?")[1];
		if(wordname==null){
			QuestionManager.findAll(function(question){
				tiwen(flag1,question);
			});
		}else{
			var uid = wordname.split("=")[1];
			UserManager.getById(uid,function(user){
				var role = user.flag;
				if(role==1){
					var question = user.question;
					tiwen(flag1,question);
				}else{
					var answer = user.answer;
					replyAnswer(flag1,answer);
				}
			});
		}
		//var uid = wordname.split("=")[1];
		//tiwen(flag1);//提问,如果flag1==1,不显示回答问题按钮。否则显示
	});
	
})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}
////弹出提问的模态框
function question(uid){
	var id = uid;
	$("#question-teacher").click(function(){
		$("#question-modal").modal("show");	
	});
	$("#addDiscussion").click(function(){
		var quest = $("#question-text").val();
		if(quest!=""){
			QuestionManager.save(quest,id,function(){
				location.href="discuss.html";
			})
		}
	});	
}
//提问,如果flag1==1,不显示回答问题按钮。否则显示
function tiwen(flag,question){
	//QuestionManager.findAll(function(question){
	//	console.log(question);
		for(i in question){
			var id = question[i].qid;
			var author = question[i].user.username;
			var context = question[i].context;
			var time = question[i].releasedate;
			var num = question[i].answer.length;
			var datetime = new Date();
		    datetime.setTime(time);
		    var year = datetime.getFullYear();
		    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		    var day = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		    var date = year+"-"+month+"-"+day;
		    
		    var reply="回答问题";
		    if(flag==1){
		    	reply = "";
		    }
		    
		    var addquestion ='<div id="question" style="display: block;">'+
	        	'<ul><li>'+  
	            '<h4>'+context+'</h4>'+     
	            '<br/><a href="reply.html?pid='+id+'" id="currQuesId-'+id+'">'+reply+'</a>'+ 
	            '<span class="see1" style="display: block;color:#f00;"><a id="answer-show" href="answer.html?pid='+id+'">查看答案('+num+')</a></span>'+
	            '<span class="see2" style="display: inline;width:20%">'+date+'</span>'+ 
	            '<span class="see2" style="display: inline;width:20%">提问人：'+author+'</span>'+
	            '</li></ul></div>';
		    $("#center").append(addquestion);
		}
	//});
}



function replyAnswer(flag,answer){
	for(i in answer){
		var id = answer[i].question.qid;
		var author = answer[i].question.user.username;
		var context = answer[i].question.context;
		var time = answer[i].question.releasedate;
		var num = answer[i].question.answer.length;
		var datetime = new Date();
	    datetime.setTime(time);
	    var year = datetime.getFullYear();
	    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	    var day = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	    var date = year+"-"+month+"-"+day;
	    
	    var reply="回答问题";
	    if(flag==1){
	    	reply = "";
	    }
	    
	    var addquestion ='<div id="question" style="display: block;">'+
        	'<ul><li>'+  
            '<h4>'+context+'</h4>'+     
            '<br/><a href="reply.html?pid='+id+'" id="currQuesId-'+id+'">'+reply+'</a>'+ 
            '<span class="see1" style="display: block;color:#f00;"><a id="answer-show" href="answer.html?pid='+id+'">查看答案('+num+')</a></span>'+
            '<span class="see2" style="display: inline;width:20%">'+date+'</span>'+ 
            '<span class="see2" style="display: inline;width:20%">提问人：'+author+'</span>'+
            '</li></ul></div>';
	    $("#center").append(addquestion);
	}
}
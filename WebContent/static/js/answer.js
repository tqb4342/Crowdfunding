$(document).ready(function(){
	
	UserManager.checkSession(function(user){
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
		}
	});
	showanswer();

})

//绑定退出事件
function bindLogoutEvent(){
     $("#logout").click(function(){
    	UserManager.quit();	 
	    location.href="index.html";
     });
}

function showanswer(){
	var url = decodeURI(window.location.href);
	dwr.engine.setAsync(false);
	var wordname = url.split("?")[1];
	var pid = wordname.split("=")[1];
	
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
		
	    var answer = question.answer;
	   
		var addquestion ='<div id="question" style="display: block;">'+
    	'<ul><li>'+  
        '<h4>'+context+'</h4>'+
        '<span class="see2" style="display: inline;width:20%">'+date+'</span>'+ 
        '<span class="see2" style="display: inline;width:20%">提问人：'+author+'</span><br/><br/>'+
        '<div id="add-answer"></div>'+
        '</ul></div>';
		$("#center").html(addquestion);
		
		 for(an in answer){
		    	var username = answer[an].user.username;
		    	var reply = answer[an].reply;
		    	var replydata = answer[an].replydate;
		    	var datetime1 = new Date();
			    datetime1.setTime(replydata);
			    var year1 = datetime1.getFullYear();
			    var month1 = datetime1.getMonth() + 1 < 10 ? "0" + (datetime1.getMonth() + 1) : datetime1.getMonth() + 1;
			    var day1 = datetime1.getDate() < 10 ? "0" + datetime1.getDate() : datetime1.getDate();
			    var date1 = year1+"-"+month1+"-"+day1;
			    console.log(reply);
			    var addanswer =  '<li style="width:95%"><div class="cuss-head woman talk">'+      
					    '<img src="static/image/user.jpg">'+    
					    '<p class="user">  '+username+'  </p>      <p style="display: inline;width:20%">'+reply+'</p>'+   
					    '<span class="see2" style="display: inline;width:20%">'+date1+'</span>  </div></li>';
			    $("#add-answer").append(addanswer);
		    }
			
		
		
	});
	
}
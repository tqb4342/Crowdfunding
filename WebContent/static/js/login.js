$(document).ready(function(){


	$("#login_submit").click(function(){

		var accountName = $("#accountName").val().trim();
		var password = $("#password").val().trim();

		$("#login_msg").html("");
		if(accountName ==""){
		    $("#login_msg").html("用户名不能为空！");
		}

		if(password ==""){
		    $("#login_msg").html("密码不能为空！");
		}

		

		UserManager.login(accountName,password,function(flag){
			if(flag && accountName!="admin"){
				location.href="index.html";
				return;
			}
			if(flag && accountName=="admin"){
				location.href="admin.html";
				return;
			}
			$("#login_msg").html("您可能没有通过管理员的验证，也可能是用户名或密码不正确！");
			
		});
		

	});

});

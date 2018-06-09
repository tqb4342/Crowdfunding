$(document).ready(function(){
	
	$("#reg_submit").click(function(){
		var account = $("#accountName").val();
		var password = $("#password").val();
		var comfrimPassword = $("#confirm_password").val();
		var username = $("#realname").val();
		var number = $("#phone_number").val();
		
        
        if(account==""||password==""||comfrimPassword=="") {
        	 $("#login_msg").html("用户名或密码不能为空！");
        	return;
        }
        
		if(password != comfrimPassword){
			 $("#login_msg").html("前后密码不一致！");
				$("#password").val("");
				$("#confirm_password").val("");
				return;
		}
		
		if(username == ""){
			 $("#login_msg").html("真实姓名不能为空！");
			 return;
		}
		
		if(number == ""){
			 $("#login_msg").html("电话号码不能为空！");
			 return;
		}
		
		 $("#login_msg").html("");
		 
        var regData = {"account":account,
                        "password":password,
                        "username":username,
                        "number":number,
                        "flag":"0"};
		
		
        console.log(regData.account);
        
		UserManager.existUser(account,function(flag){
			if(flag){
				UserManager.insert(regData,function(){
					alert("您已经注册成功，等待管理员验证通过后便可登录。")
					location.href="login.html";
				})
			}else{
				 $("#login_msg").html("该用户已存在，请重新输入！");
				 return;
			}
		});
		
	});
})
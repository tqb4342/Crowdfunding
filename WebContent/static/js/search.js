$(document).ready(function(){
	$("#button-blog").click(function(){
		var sea = $("#Search-blog").val();
		console.log(sea);
		if(sea==""){
			return;
		}
		if(sea.trim()=="奖励众筹" || sea.trim()=="公益众筹"){
			location.href="ProjectClassify.html?search="+sea;
			return;
		}
		ProjectManager.isExist(sea,function(flag){
			 if(flag){
				 location.href="ProjectClassify.html?search="+sea;
			 }else{
				 alert("没有你要查找的内容！！！")
			 }
		});
	
	});
	
})


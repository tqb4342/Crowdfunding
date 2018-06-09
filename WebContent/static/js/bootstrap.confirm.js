//确认对话框id
var ConfirmModalID="confirm-modal";
//确认对话框html文档
/**
 * 
 */
var ConfirmModal=
'<div class="modal fade" id="'+ConfirmModalID+'" tabindex="-1">'+
	'<div class="modal-dialog">'+
		'<div class="modal-content">'+
			'<div class="modal-header ">'+
				'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
				'<h4 class="modal-title">提示</h4>'+
			'</div>'+
			'<div class="modal-body">'+
				'<h4 class="text-danger" id="confirm-modal-title"></h4>'+
			'</div>'+
			'<div class="modal-footer">'+
				'<button type="button" class="btn btn-default" data-dismiss="modal">否</button>'+
				'<button type="button" class="btn btn-danger" id="confirm-modal-yes">是</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>';

/**
 * 使用Bootstrap框架的确认对话框
 * @param title 确认框标题
 * @param action 点击确认以后的响应事件
 */
function modalComfirm(title,action)
{
	$("body").append(ConfirmModal);
	$("#confirm-modal-title").text(title);
	$("#"+ConfirmModalID).modal("show");
	$("#confirm-modal-yes").one("click",function(){
		$("#confirm-modal").modal("hide");
		if(action!=null)
			action();
	});
	$("#"+ConfirmModalID).on("hidden.bs.modal",function(e){
		$(this).remove();
	});
}
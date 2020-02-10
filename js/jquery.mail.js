$(document).ready(function () {
	
	$("form").submit(function(){
		var form = $(this),
		data = form.serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
			success: function(){
				swal("Ваша заявка принята, ожидайте звонка от менеджера");
				$("#name").val("");
				$("#email").val("");
				$("#phone").val("");
				$("#message").val("");
			},
			error: function (xhr, ajaxOptions, thrownError) {
				swal("Ошибка на сервере, попробуйте отправить заявку позже...");
			}
		});
		return false;
	});

	$("input").on("change", function() {
		$(this).attr("value", $(this).val());
	});

	$("textarea").on("change", function() {
		$(this).attr("value", $(this).val());
	});
});





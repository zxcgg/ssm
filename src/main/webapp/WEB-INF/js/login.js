$(function()
{

	$("#submit").click(function()
	{
		if ($.trim($("#username").val()) === "")
		{
			alert("用户名为空");
			return false;
		}
		if (!/^\w{5,10}$/.test($.trim($("#username").val())))
		{
			alert("用户名不得少于6位,且不能大于10位");
			return false;
		}

		if ($.trim($("#userpass").val()) === "")
		{
			alert("密码必填且不能为空");
			return false;
		}

	});

});
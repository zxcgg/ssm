$(function () {
    var t = false;
    $("#user").blur(function () {
        $("#userspan").html("");
        if ($.trim($(this).val()) === "") {
            $("#userspan").html("*用户名必填且不能为空");
            $("#userspan").css("color", "red");
            t = false;
            return false;
        }
        if (!/^\w{5,10}$/.test($.trim($(this).val()))) {
            $("#userspan").html("*用户名不得少于6位,且不能大于10位");
            $("#userspan").css("color", "red");
            t = false;
            return false;
        }
        t = true;
    });
    $("#password").blur(function () {
        $("#passspan").html("");
        if ($.trim($(this).val()) === "") {
            $("#passspan").html("*密码必填且不能为空");
            $("#passspan").css("color", "red");
            t = false;
            return false;
        }
        if (!/^\w{6,10}$/.test($.trim($(this).val()))) {
            $("#passspan").html("*用户名不得少于5位,且不能大于11位");
            $("#passspan").css("color", "red");
            t = false;
            return false;
        }
        t = true;
    });
    $("#repassword").blur(function () {
        $("#repassspan").html("");
        if ($.trim($(this).val()) != $("#password").val()) {
            $("#repassspan").html("*两次输入密码不一致");
            $("#repassspan").css("color", "red");
            t = false;
            return false;
        }
        t = true;
    });

    $("#zhuce").click(function () {
        if ((!t)) {
            alert("请仔细检查所有输入框");
            return false;
        }

    });

})
;
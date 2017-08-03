<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>欢迎登录</title>
    <meta charset="UTF-8">
    <title>Index</title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap/easyui.css">
    <link rel="stylesheet" type="text/css" href="/css/icon.css"/>
    <link rel="stylesheet" type="text/css" href="/css/my.css"/>
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="/js/common.js"></script>
</head>

<body>
<div id="loginWin" class="easyui-window" title="登录"
     style="width: 350px; height: 188px; padding: 5px;" data-options="iconCls:'icon-save',closable:false,
                collapsible:false,minimizable:false,maximizable:false">
    <div class="easyui-layout" fit="true">
        <div region="center" border="false"
             style="padding: 5px; background: #fff; border: 1px solid #ccc;">
            <form id="ff" action="/user/login" method="post">
                <div style="padding: 5px 0;">
                    <label for="login">帐号:</label> <input id="login" type="text" name="username"
                                                          style="width: 260px;" placeHolder="用户名"></input>
                </div>
                <div style="padding: 5px 0;">
                    <label for="password">密码:</label> <input id="password" type="password"
                                                             name="pass" style="width: 260px;"></input>
                </div>
            </form>
        </div>
        <div region="south" border="false"
             style="text-align: right; padding: 5px 0;">
            <a class="easyui-linkbutton" iconCls="icon-ok"
               href="javascript:void(0)" onclick="login()">登录</a> <a
                class="easyui-linkbutton" iconCls="icon-cancel"
                href=" /register">注册</a>
        </div>
    </div>
</div>
<script>
    $(function () {
        $("#login").focus();
        $('#login').validatebox({
            required: true,
            validType: 'length[5,18]',
            validateOnBlur: true,
            invalidMessage: '用户名长度5-18位',
            missingMessage: "用户名不能为空"
        });
        $('#password').focus(function () {
            $('#showMsg').html('');
        });
        $('#password').validatebox({
            required: true,
            validType: 'length[5,18]',
            validateOnBlur: true,
            invalidMessage: '密码长度5-18位',
            missingMessage: "密码不能为空"
        });

    });

    function login() {
        $('#ff').submit();

    }

    function clearData() {
        $('#login').val("");
        $('#password').val("");
    }
</script>
</body>

</html>
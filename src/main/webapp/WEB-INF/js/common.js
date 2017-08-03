$.extend($.fn.validatebox.defaults.rules, {
    upperCase: {
        validator: function (value) {
            var text = $.trim(value);
            return text.length == 1 && (value >= 'A' && value <= 'Z');
        },
        message: '输入字母应为大写且一位'
    },
    isNumber: {
        validator: function (value) {
            var text = $.trim(value);

            return /^\d{1,2}$/.test(text);
        },
        message: '输入信息应该为数字,且两位'
    },

    isDigital: {
        validator: function (value) {
            var text = $.trim(value);

            return /^\d{1,}$/.test(text);
        },
        message: '输入信息应该为数字'
    },
    isFloat: {
        validator: function (value) {
            var text = $.trim(value);

            return /^\d+(\.\d[1,2])?$/.test(text);
        },
        message: '输入信息应该为数字'
    },
    validateUserExist: {
        validator: function (value, param) {
            var b = true;
            $.ajax({
                async: false,
                url: param[0],
                data: "code=" + arguments[0],
                success: function (resp) {
                    b = resp;
                }
            })
            return b;
        },
        message: '编码已存在'
    }


});

var YINHE = {


    // 删除数据抽取
    deleteData: function (module) {
        var selects = module.table.datagrid('getSelections');
        if (selects.length == 0) {
            $.messager.alert('提示', '没有选中任何行数据！', 'info');
            return;
        }
        $.messager.confirm('确认', '确定删除吗？', function (r) {
            if (r) {
                var ids = [];
                for (var i = 0; i < selects.length; i++) {
                    ids.push(selects[i].id);
                }
                var params = {
                    "ids": ids.join(',')
                };
                $.ajax({
                    method: 'post',
                    data: params,
                    url: '/' + module.name + '/delete',
                    beforeSend: function () {
                        module.table.datagrid('loading');
                    },
                    success: function (data) {
                        if (data.status == 200) {
                            module.table.datagrid('loaded');
                            module.table.datagrid("reload");
                            module.table.datagrid("unselectAll");
                            $.messager.alert('提示', '删除成功!');
                        } else {
                            $.messager.alert('Warning', '删除失败');
                        }
                    }
                });
            }
        });
    },

    doHandle: function (module, e) {
        debugger;
        switch ($.trim(e.innerText)) {
            case "添加":
                module.obj.editRow.currentRow = 0;
                $("." + module.css1 + "").show(); // 显示撤销按钮
                $("." + module.css2 + "").linkbutton('disable');
                module.table.datagrid('insertRow', {
                    index: module.obj.editRow.currentRow,
                    row: {}
                });
                module.table.datagrid('beginEdit', module.obj.editRow.currentRow);
                break;
            case "删除":
                YINHE.deleteData(module);
                break;
            case "修改":
                var selects = module.table.datagrid('getSelections');
                if (selects.length == 1) {
                    var index = module.table.datagrid('getRowIndex', selects[0]);
                    module.table.datagrid('beginEdit', index);
                    $("." + module.css2 + "").linkbutton('disable');
                    $("." + module.css1 + "").show(); // 显示撤销按钮
                    module.obj.editRow.currentRow = index;
                    module.table.datagrid('unselectRow', index);
                } else {
                    $.messager.alert('提示', '只能选一行数据！', 'info');
                    return;
                }
                break;
            case "保存":
                module.table.datagrid('endEdit', module.obj.editRow.currentRow);
                break;
            case "取消编辑":
                module.table.datagrid('rejectChanges');
                $("." + module.css1 + "").hide();
                $("." + module.css2 + "").linkbutton('enable');
                break;
            default:
                break;
        }
    },

    // onafteredit
    onAfterEditData: function (module, row) {
        for (var o in row) {
            if (row[o] == null)
                delete row[o];
        }
        $("." + module.css1 + "").hide();
        $("." + module.css2 + "").linkbutton('enable');
        var inserted = module.table.datagrid('getChanges', 'inserted');
        var updated = module.table.datagrid('getChanges', 'updated');
        var url = info = '';

        // 新增用户
        if (inserted.length > 0) {
            url = '/' + module.name + '/insert';
            info = '新增';
        }

        // 修改用户
        if (updated.length > 0) {
            url = '/' + module.name + '/update';
            info = '修改';
        }

        $.ajax({
            method: 'post',
            data: row,
            url: url,
            beforeSend: function () {
                module.table.datagrid('loading');
            },
            success: function (data) {
                debugger;
                if (data.status == 200) {
                    module.table.datagrid('loaded');
                    module.table.datagrid("reload");
                    module.table.datagrid("unselectAll");
                    $.messager.alert('提示', info + '成功!');
                } else {
                    module.table.datagrid('loaded');
                    module.table.datagrid("unselectAll");
                    $.messager
                        .alert('Warning', info + '失败!原因为:' + data.msg);
                }
            },
            error: function (xhr) {
                module.table.datagrid('loaded');
                module.table.datagrid("reload");
                $.messager.alert('提示', '服务器异常!');
            }
        });
    }

}
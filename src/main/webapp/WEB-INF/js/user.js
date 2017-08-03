var Mymodule = null;
$(function () {
    Mymodule = {
        name: 'goods',
        table: $('#MymoduleTable'),
        initTable: function () {
            Mymodule.table.datagrid({
                width: '100%',
                title: '用户列表',
                iconCls: 'icon-man',
                singleSelect: false,
                rownumbers: true,
                fitColumns: true,
                collapsible: true,
                pagination: true,
                url: '/user/list',
                method: 'get',
                pageSize: 10,
                striped: true,
                pageList: [10, 20, 30, 40],
                toolbar: '#MymoduleToolBar',
                columns: [
                    [{
                        field: 'id',
                        hidden: true,
                    }, {
                        field: 'uname',
                        align: 'center',
                        title: '用户名',
                        width: 80
                    },
                        {
                            field: 'pass',
                            align: 'center',
                            title: '密码',
                            width: 80
                        },
                    ]
                ]
            });

        },
        obj: {
            search: function () {
                Mymodule.table.datagrid('load', {
                    fname: $('#MymoduleSearch').val(),
                    bid: $('#MymoduleCombo').combobox('getValue')
                });
            },
            edits: function () {
                var selects = Mymodule.table.datagrid('getSelections');
                if (selects.length != 1) {
                    $.messager.alert('提示', '请选择一个用户', 'info');
                    return;
                }
                var data = Mymodule.table.datagrid('getSelected');
                $("#cpass").window({
                    width: "380",
                    height: "200",
                    modal: true,
                    title: "密码修改",
                    href: '/changePass',
                    queryParams: {
                        item: data
                    },
                    onClose: function () {
                        $('#MymoduleTable').datagrid("loaded");
                        $('#MymoduleTable').datagrid("reload");
                    },
                });
            },
        }
    }
    Mymodule.initTable();
});
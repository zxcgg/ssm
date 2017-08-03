var Mymodule = null;
$(function() {
	Mymodule = {
        name: 'goods',
        table: $('#MymoduleTable'),
        initTable: function () {
            Mymodule.table.datagrid({
                width: '100%',
                title: '商品表',
                iconCls: 'icon-search',
                singleSelect: false,
                rownumbers: true,
                fitColumns: true,
                collapsible: true,
                pagination: true,
                url: '/goods/list',
                method: 'get',
                pageSize: 10,
                striped: true,
                pageList: [10, 20, 30, 40],
                toolbar: '#MymoduleToolBar',
                columns: [
                    [{
                        field: '',
                        checkbox: true
                    },
                        {
                            field: 'id',
                            hidden: true,
                        },
                        {
                            field: 'gname',
                            align: 'center',
                            title: '商品名称',
                            width: 80
                        },
                        {
                            field: 'price',
                            align: 'center',
                            title: '价格',
                            width: 80
                        },
                        {
                            field: 'amount',
                            align: 'center',
                            title: '数量',
                            width: 80
                        },
                        {
                            field: 'descs',
                            align: 'center',
                            title: 'descs',
                            width: 100
                        },
                        {
                            title: 'path',
                            field: 'path',
                            align: 'center',
                            width: 60,
                            formatter:function (value) {
                                if(value != null) {
                                    return '<img src= "'+value+'" style="width:100%;height: 30px">';
                                }
                            }
                        }
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
            add: function () {
                $("#categoryAdd").css({padding: "5px"}).window({
                    width: "380",
                    height: "300",
                    modal: true,
                    title: "添加",
                    href: '/moduleAdd',
                    onClose: function () {
                        debugger;
                        $('#MymoduleTable').datagrid("loaded");
                        $('#MymoduleTable').datagrid("reload");
                    }
                });
            },
            edits: function () {
                var selects = Mymodule.table.datagrid('getSelections');
                if (selects.length != 1) {
                    $.messager.alert('提示', '只能选一行数据！', 'info');
                    return;
                }
                var data = Mymodule.table.datagrid('getSelected');
                $("#categoryEdit").window({
                    width: "380",
                    height: "300",
                    modal: true,
                    title: "修改",
                    href: '/moduleEdit',
                    queryParams: {
                        item: data
                    },
                    onClose: function () {
                        $('#MymoduleTable').datagrid("loaded");
                        $('#MymoduleTable').datagrid("reload");
                    },
                });
            },
            remove: function () {
                YINHE.deleteData(Mymodule, Mymodule.name);
            }
        }
    }
	Mymodule.initTable();
});
Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.Video',
        'Ext.data.Store'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Modus Theme',            
                },
                {
                    html: '<strong>Check out these here buttons!</strong>',
                    margin: '0 0 15 0'
                },
                {
                    xtype: 'button',
                    cls: 'modus-button default',
                    text: 'Default Button'
                },{
                    xtype: 'button',
                    cls: 'modus-button primary',
                    text: 'Success Button'
                },{
                    xtype: 'button',
                    cls: 'modus-button info',
                    text: 'Info Button'
                },{
                    xtype: 'button',
                    cls: 'modus-button danger',
                    text: 'Danger Button'
                },{
                    xtype: 'button',
                    cls: 'modus-button default',
                    action: 'loadList',
                    text: '<i class="icon-reorder"></i> View List Styles'
                }]
            },
            {
                title: 'List',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'List'
                    },
                    {
                        xtype: 'list',
                        itemTpl: '<div>{title}</div>',
                        data: [
                            { title: 'Item 1' },
                            { title: 'Item 2' },
                            { title: 'Item 3' },
                            { title: 'Item 4' }
                        ]
                    }
                ]
            },

        ]
    }
});

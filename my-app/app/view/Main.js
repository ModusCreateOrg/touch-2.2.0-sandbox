Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
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
                    title: 'Customized Base Theme',
                },{
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
                }]
            },
            {
                title: 'Get Started',
                iconCls: 'action',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});

Ext.define('RestoSys.view.Viewport', {
	extend : 'Ext.container.Viewport',
	alias : 'widget.viewport',
	layout : {
		type : 'border',
		pading : '3 3 3 3'	
	},
	initComponent : function(){
		var me = this;
		Ext.apply(this, {
			items: [
				{
					xtype :'container',
					frame :true,
					margin :'0 0 3 0',
					region :'north',
					height : 100,
					layout :'border',
					items : [
						{
	                            xtype: 'panel',
	                            frame: false,
	                            margin: '3 3 3 3',
	                            region: 'west',
	                            width: 232,
	                            border :false,
	                            html: '<div align="left"><img width="232px" style="padding-top:3;" src="icon/logotambahrejo.png" /></div>'
	                    },
	                    {
	                    	xtype:'panel',
                            border:false,
                            margin: '3 5 3 3',
                            tabConfig: {
                            	xtype: 'tab'
                            },
                            defaults: {
                                iconAlign: 'top',
                                scale: 'large',
                                xtype: 'button',
                                minWidth: 75
                            },
                            items :
                            [
                            	{
                                    text: "Home",
                                    iconCls: 'icon-dito',
                                    screenType: 'Home',
                                    border: false
                            	},
                            	{
                                    text: "Profil",
                                    iconCls: 'icon-gasin',
                                    screenType: 'Profil',
                                    border: false
                            	}
                            ]
	                    }
					]
				}
			]
		});
		this.callParent(arguments);
	}
});
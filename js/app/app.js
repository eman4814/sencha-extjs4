Ext.Loader.setConfig({
    enabled: 'true'
});

Ext.Loader.setPath('Ext.ux', RestoSys.Config.loaderPath);

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.toolbar.Paging',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager'
]);

Ext.application({
	name : 'RestoSys',
	appFolder : RestoSys.Config.appFolder,
	requires: [
                "Ext.form.*"
    ],
    launch : function(){
    	var loadingObj = document.getElementById("content");
        document.body.removeChild(loadingObj);
        Ext.create('RestoSys.view.Viewport');
        console.log("launch js app");
    }
}
);
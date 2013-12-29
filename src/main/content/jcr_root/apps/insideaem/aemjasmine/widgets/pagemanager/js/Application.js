/**
 * Main application
 */
com.insideaem.aemjasmine.pagemanager.Application = CQ.Ext.extend(CQ.Ext.Viewport, {

    /*
     * The function opens a modal window with a form to create a page.
     */
    createPageHandler : function() {
	var createPageView = new com.insideaem.aemjasmine.pagemanager.CreatePageView();
	var createPageController = new com.insideaem.aemjasmine.pagemanager.CreatePageController();
	createPageView.on('create', function(pageConfig) {
	    createPageController.create(pageConfig, function() {
		createPageView.close();
		CQ.Ext.Msg.show({
		    buttons : CQ.Ext.MessageBox.OK,
		    title : 'Status',
		    id: 'create-page-ok',
		    msg : 'Page created.',
		    icon : CQ.Ext.MessageBox.INFO
		});
	    });
	});
	createPageView.show();
    },

    /*
     * The constructor
     */
    constructor : function(config) {
	var me = this;
	config.items = [ {
	    // Button to create a page
	    xtype : 'button',
	    id : 'create_page',
	    text : 'Create page',
	    handler : me.createPageHandler
	} ];

	// Call superclass constructor
	com.insideaem.aemjasmine.pagemanager.Application.superclass.constructor.call(this, config);
    }
});

// Register the widget
CQ.Ext.reg("pagemanager", com.insideaem.aemjasmine.pagemanager.Application);
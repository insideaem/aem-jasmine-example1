/*
 * View to enter parameters to create a new page
 */
com.insideaem.aemjasmine.pagemanager.CreatePageView = CQ.Ext.extend(CQ.Ext.Window, {

    constructor : function(config) {
	var me = this;
	var config = config || {};
	config.resizable = false;
	config.draggable = true;
	config.modal = true;
	config.constrain = true;
	config.title = 'Create page';
	config.items = new CQ.Ext.form.FormPanel({
	    ref : 'formPanel',
	    header : false,
	    labelWidth : 160,
	    items : [ {
		xtype : "textfield",
		fieldLabel : "Title",
		ref : 'title',
		allowBlank : false
	    }, {
		xtype : "textfield",
		fieldLabel : "Name",
		ref : 'name',
		allowBlank : false,
		maskRe : new RegExp('[a-zA-Z0-9_\\-\\.]'),
		regexText : 'Invalid character'
	    }, {
		xtype : "selection",
		type : "select",
		ref : 'template',
		allowBlank : false,
		fieldLabel : "Template",
		options : com.insideaem.aemjasmine.pagemanager.TEMPLATES
	    } ]

	});
	config.closeAction = 'destroy';
	config.width = 550;
	config.fbar = [ {
	    text : "Cancel",
	    ref : 'cancelBtn',
	    xtype : "button",
	    listeners : {
		click : function() {
		    me.close();
		}
	    }
	}, {
	    text : "Create",
	    ref : 'createBtn',
	    xtype : "button",
	    listeners : {
		click : function() {
		    // Trigger form validation
		    var formPanel = me.formPanel;

		    if (formPanel.form.isValid()) {
			// Get values from form since form is valid
			var template = formPanel.template.getValue();
			var title = formPanel.title.getValue();
			var name = formPanel.name.getValue();

			var pageConfig = {
			    label : name,
			    title : title,
			    template : template
			};

			me.fireEvent('create', pageConfig);
		    }
		}
	    }
	} ];
	// Call superclass constructor
	this.addEvents('create');
	com.insideaem.aemjasmine.pagemanager.CreatePageView.superclass.constructor.call(this, config);

    }
});
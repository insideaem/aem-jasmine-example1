describe("When a page is created", function() {
    var createPageView;

    function clickCreateBtn() {
	// Click create button
	var createBtn = createPageView.getFooterToolbar().createBtn;
	createBtn.fireEvent('click', createBtn);
    }
    ;

    function clickCancelBtn() {
	// Click cancel button
	var cancelBtn = createPageView.getFooterToolbar().cancelBtn;
	cancelBtn.fireEvent('click', cancelBtn);
    };

    beforeEach(function() {
	createPageView = new com.insideaem.aemjasmine.pagemanager.CreatePageView();
	createPageView.show();
    });

    afterEach(function() {
	createPageView.close();
    });

    it("then a template must be selected", function() {
	expect(createPageView.formPanel.template.allowBlank).toBe(false);
    });

    it("then a title must be entered", function() {
	expect(createPageView.formPanel.title.allowBlank).toBe(false);
    });

    it("then a name must be entered", function() {
	expect(createPageView.formPanel.name.allowBlank).toBe(false);
    });

    it("then clicking on cancel button should close the window", function() {
	expect(createPageView.isVisible()).toBe(true);
	clickCancelBtn();
	expect(createPageView.isVisible()).toBe(false);
    });

    it("then the form should be submitted when all mandatory fields have been filled, ", function() {
	var createEventFired = false;
	createPageView.on('create', function() {
	    createEventFired = true;
	});

	// Fill fields
	var formPanel = createPageView.formPanel;
	formPanel.template.setValue('/apps/insideaem/aemjasmine/templates/homepage');
	formPanel.title.setValue('My Homepage');
	formPanel.name.setValue('my_homepage');

	clickCreateBtn();
	expect(createEventFired).toBe(true);
    });

    it("then the form should not be submitted when not all mandatory fields have been filled, ", function() {
	var createEventFired = false;
	createPageView.on('create', function() {
	    createEventFired = true;
	});

	clickCreateBtn();
	expect(createEventFired).toBe(false);
    });
});
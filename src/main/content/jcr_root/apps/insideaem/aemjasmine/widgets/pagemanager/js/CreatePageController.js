com.insideaem.aemjasmine.pagemanager.CreatePageController = function() {
    return {
	create : function(pageConfig, callback) {
	    // Now call service to create a page
	    var params = pageConfig;
	    params['_charset_'] = 'UTF-8';
	    params['cmd'] = 'createPage';
	    params[':status'] = 'browser';
	    params['parentPath'] = '/content/insideaem/aemjasmine/pages';

	    CQ.shared.HTTP.post(com.insideaem.aemjasmine.pagemanager.WCM_CMD, function(options, success, xhr, response) {
		CQ.Log.info(xhr.responseText);
		if(success){
		    callback();
		}
	    }, params);
	}
    };
}
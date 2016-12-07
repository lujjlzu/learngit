(function($) {
    var printAreaCount = 0;
    $.fn.printArea = function() {
    	//alert('fn.printArea');
        var ele = $(this);
        //alert($(ele).html());
        var idPrefix = "printArea_";
        removePrintArea(idPrefix + printAreaCount);
        printAreaCount++;
        var iframeId = idPrefix + printAreaCount;
        //alert('iframeId='+iframeId);
        var iframeStyle = 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;';
        iframe = document.createElement('IFRAME');
        $(iframe).attr({
            style : iframeStyle,
            id : iframeId
        });
        //alert('iframe.id='+iframe.id);
        document.body.appendChild(iframe);
        var doc = iframe.contentWindow.document;
        //alert('doc='+doc);
        $(document).find("link").filter(function() {
            return $(this).attr("rel").toLowerCase() == "stylesheet";
        }).each(
                function() {
                    doc.write('<link type="text/css" rel="stylesheet" href="'
                            + $(this).attr("href") + '" >');
                });
        doc.write('<div class="' + $(ele).attr("class") + '">' + $(ele).html()
                + '</div>');
        doc.close();
        
        //add by feihu 20130510
        setTimeout( function() {
        	var frameWindow = iframe.contentWindow;
        	frameWindow.close();
        	frameWindow.focus();
        	frameWindow.print();
        	           }, 1000);
        //end add
        //del by feihu  20130510
        //var frameWindow = iframe.contentWindow;
        //frameWindow.close();
        //frameWindow.focus();
        //frameWindow.print();
        //end del
    }
    var removePrintArea = function(id) {
        $("iframe#" + id).remove();
    };
    
})(jQuery);

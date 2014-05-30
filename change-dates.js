var updating_time_elements = false;

var update_handler = 
   $.debounce(250, 
         function() {
	          if (!updating_time_elements) {
            	$('div.container').unbind("DOMSubtreeModified", update_handler); 
	            update_date_time_elements();
	           	$('div.container').bind("DOMSubtreeModified", update_handler);
	          }
         }
    );

$(document).ready(function () {
   update_date_time_elements()
   $('div.container').bind("DOMSubtreeModified", update_handler);
});

function update_date_time_elements() {
  updating_time_elements = true;
  var count = 0;

  //console.log("Updating elements");
  
  $("time").each(function(element) {
    $(this).text(moment($(this).attr("datetime")).fromNow());
    count = count + 1;
  });
   $("local-time").each(function(element) {
    $(this).text(moment($(this).attr("datetime")).fromNow());
  });

  
  //console.log("Updating elements completed (" + count + ")");

  updating_time_elements = false;
}
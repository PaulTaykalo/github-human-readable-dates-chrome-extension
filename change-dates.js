$(document).ready(function () {
   $("time").each(function(element) {
    $(this).text(moment($(this).attr("datetime")).fromNow());
  });
});
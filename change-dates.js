(function () {
  $("time").each(function(element) {
    $(this).text(moment($(this).attr("datetime")).fromNow());
  });
  $("local-time").each(function(element) {
    $(this).text(moment($(this).attr("datetime")).fromNow());
  });
})();

$(document).ready(function() {

  $('#songButton').click(function() {
   $('#samples').slideToggle();
 });

  function hideAll() {
    $('#bagbak_bagbak').hide();
    $('#lift').hide();
    $('#little').hide();
    $('#norf').hide();
  }

  hideAll();
 $('#samples').slideToggle();
  $('.albumCover').click(function() {

  hideAll();

  $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
  });

    switch ($(this).attr("id")) {
      case "bagbak":
        $('#bagbak_bagbak').show();
        break;
      case "fish":
        $('#lift').show();
        break;
      case "prima":
        $('#little').show();
        break;
      case "summertime":
        $('#norf').show();
        break;
    }
  });
});


$(document).ready(function() {
  $('form#transportation_survey').submit(function(event) {
  event.preventDefault();
  $('#work-responses').show();
  $('input:checkbox[name=work-transportation]:checked').each(function() {
    let workTransportationMode = $(this).val();
    $('#work-responses').append(workTransportationMode + '<br>');
  });
  $('#transportation_survey').hide();
  });
});

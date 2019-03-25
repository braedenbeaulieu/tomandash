$(document).ready( function() {

// RSVP Guests

    $('#guests').change(function(){

      let guests = $(this).children("option:selected").val();

      $('#guestname2').addClass('hidden').prop('disabled', true);
      $('#guestname3').addClass('hidden').prop('disabled', true);
      $('#guestname4').addClass('hidden').prop('disabled', true);
      $('#guestname5').addClass('hidden').prop('disabled', true);

      if (guests >= 2) { $('#guestname2').removeClass('hidden').prop('disabled', false); }
      if (guests >= 3) { $('#guestname3').removeClass('hidden').prop('disabled', false); }
      if (guests >= 4) { $('#guestname4').removeClass('hidden').prop('disabled', false); }
      if (guests >= 5) { $('#guestname5').removeClass('hidden').prop('disabled', false); }

    });

});

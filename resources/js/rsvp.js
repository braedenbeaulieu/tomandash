$(document).ready( function() {
    let p = 'CAKE';
    $('.cant-go').hide();
    $('#guestname2').hide();
    $('#guestname3').hide();
    $('#guestname4').hide();
    $('#guestname5').hide();
    let guests = 1;



    $('#guests').change(function() {

        let cant_go = $('.cant-go');
        guests = +$('#guests').val();
        let guest1 = $('#guestname01');
        let guest2 = $('#guestname2');
        let guest3 = $('#guestname3');
        let guest4 = $('#guestname4');
        let guest5 = $('#guestname5');

        $('#guestname02').val('');
        $('#guestname03').val('');
        $('#guestname04').val('');
        $('#guestname05').val('');

        switch(guests) {
            case 0:
                cant_go.show();
                guest2.hide();
                guest3.hide();
                guest4.hide();
                guest5.hide();
                break;

            case 1:
                cant_go.hide();
                guest2.hide();
                guest3.hide();
                guest4.hide();
                guest5.hide();
                break;

            case 2:
                cant_go.hide();
                guest2.show();
                guest3.hide();
                guest4.hide();
                guest5.hide();
                break;

            case 3:
                cant_go.hide();
                guest2.show();
                guest3.show();
                guest4.hide();
                guest5.hide();
                break;

            case 4:
                cant_go.hide();
                guest2.show();
                guest3.show();
                guest4.show();
                guest5.hide();
                break;

            case 5:
                cant_go.hide();
                guest2.show();
                guest3.show();
                guest4.show();
                guest5.show();
                break;

            default:
                break;
        }

    });

    // for tooltip
    $('.fa-question-circle').tooltip();

    // errors
    // error message
    let error_message = $('<p></p>').attr('class', 'error-message').hide();

    // variables to check if all fields are good
    let hasFullName = false;
    let hasGuest2 = false;
    let hasGuest3 = false;
    let hasGuest4 = false;
    let hasGuest5 = false;
    let hasPassCode = false;

    // on submit button, check if all values are true, if not do error checking

    // check if name is filled out

    if($('#guestname01').val()) {
        hasFullName = true;
        error_message.fadeOut();
    }

    $('#guestname01').on('blur', function() {
        if($(this).val()) {
            hasFullName = true;
            error_message.fadeOut();
        } else if(!$(this).val()) {
            hasFullName = false;
        }
    });
    // ---------------------------

    // check if all extra guests are filled out
    $('#guestname02').on('blur', function() {
        if($(this).val()) {
            hasGuest2 = true;
            error_message.fadeOut();
        } else if(!$(this).val()) {
            hasGuest2 = false;
        }
    });

    $('#guestname03').on('blur', function() {
        if($(this).val()) {
            hasGuest3 = true;
            error_message.fadeOut();
        } else if(!$(this).val()) {
            hasGuest3 = false;
        }
    });

    $('#guestname04').on('blur', function() {
        if($(this).val()) {
            hasGuest4 = true;
            error_message.fadeOut();
        } else if(!$(this).val() == null) {
            hasGuest4 = false;
        }
    });

    $('#guestname05').on('blur', function() {
        if($(this).val()) {
            hasGuest5 = true;
            error_message.fadeOut();
        } else if(!$(this).val() == null ) {
            hasGuest5 = false;
        }
    });

    // ---------------------------------------

    // check if passcode is filled out and correct
    $('#passcode').on('blur',function() {
        if($(this).val() === p) {
            hasPassCode = true;
            error_message.fadeOut();
        } else if($(this).val() !== p) {
            hasPassCode = false;
        }
    });
    // -------------------------------------------


    $('.send-rsvp').on('click', function() {
        if($(this).attr('type') === 'button') {

            switch(guests) {
                case 0:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                case 1:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                case 2:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasGuest2 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true && hasGuest2 === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                case 3:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasGuest3 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
                    }

                    if(hasGuest2 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                case 4:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasGuest4 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname4')).hide().fadeIn();
                    }

                    if(hasGuest3 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
                    }

                    if(hasGuest2 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true && hasGuest4 === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                case 5:
                    if(hasPassCode === false) {
                        error_message.text('You must write correct the passcode exactly as written in the invitation.').appendTo($('#passcode').parent()).hide().fadeIn();
                    }

                    if(hasGuest5 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname5')).hide().fadeIn();
                    }

                    if(hasGuest4 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname4')).hide().fadeIn();
                    }

                    if(hasGuest3 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname3')).hide().fadeIn();
                    }

                    if(hasGuest2 === false) {
                        error_message.text('You must write the guest\'s full name.').appendTo($('#guestname2')).hide().fadeIn();
                    }

                    if(hasFullName === false) {
                        error_message.text('You must write your full name.').appendTo($('#guestname1').parent()).hide().fadeIn();
                    }

                    if(hasFullName === true && hasPassCode === true && hasGuest2 === true && hasGuest3 === true && hasGuest4 === true && hasGuest5 === true) {
                        $('#rsvp-form').submit();
                    }
                    break;

                default:
                    break;
            }
        }
    });
});

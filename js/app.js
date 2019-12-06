


function passValidation(passInputId){

    var pswd = $(passInputId).val();
    //validate the length
    if ( pswd.length < 8 ) {
        $('#length').removeClass('valid').addClass('invalid');
    } else {
        $('#length').removeClass('invalid').addClass('valid');
    }

    //validate letter
    if ( pswd.match(/[a-z]/)) {
        $('#letter').removeClass('invalid').addClass('valid');
    } else {
        $('#letter').removeClass('valid').addClass('invalid');
    }
    
    //validate capital letter
    if ( pswd.match(/[A-Z]/) ) {
        $('#capital').removeClass('invalid').addClass('valid');
    } else {
        $('#capital').removeClass('valid').addClass('invalid');
    }
    // validate number
    if ( pswd.match(/\d/) ) {
        $('#number').removeClass('invalid').addClass('valid');
    } else {
        $('#number').removeClass('valid').addClass('invalid');
    }

    // Hide or show validation rule
    isValidPass(passInputId);
}

/**
* Hide or focus password field
* Return boolen according to validation
*/
function isValidPass(passInputId){

    var pswd = $(passInputId).val();
    if (pswd.length >=8 && (pswd.match(/[a-z]/) && pswd.match(/[A-Z]/)) && pswd.match(/\d/)) {
        $('#pswd_info').hide();
        return true;
    }

    $('#pswd_info').show();
    return false;
}


/**
* Hide or show confirm pass not match text
*/
function isConfirmPassMatch(passId, confirmPassId){
    var pswd = $(passId).val();
    var confirmPswd = $(confirmPassId).val();

    if (pswd == confirmPswd) {
        $('#confirm_pswd_info').hide();
        return true;
    }

    $('#confirm_pswd_info').show();
    return false;

}

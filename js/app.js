    $(document).ready(function() {

        $('input[type=password]').keyup(function() {
                // keyup code here
                var pswd = $(this).val();
            //validate the length
            if ( pswd.length < 8 ) {
                $('#length').removeClass('valid').addClass('invalid');
            } else {
                $('#length').removeClass('invalid').addClass('valid');
            }

            //validate letter
            if ( pswd.match(/[a-z]/) ) {
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

            //validate number
            if ( pswd.match(/\d/) ) {
                $('#number').removeClass('invalid').addClass('valid');
            } else {
                $('#number').removeClass('valid').addClass('invalid');
            }

            passwordValid();
            

        }).focus(function() {
            passwordValid();
        });

    }


    );

    function passwordValid(){
        var pswd = $('#password_txt').val();
        if (pswd.length >=8 && pswd.match(/[a-z]/) && pswd.match(/[A-Z]/) && pswd.match(/\d/)) {
            $('#pswd_info').hide();

            return true;
        }

        $('#pswd_info').show();
        return false;
    }

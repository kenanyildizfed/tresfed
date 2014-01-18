PF = {

    init: function() {
        PF.General.init();
    },

    General: {

        init: function(){
            PF.General.FormValidator.init();

            // Placeholder this is IE 7 and higher
            $('input, textarea').placeholder();
        },

        FormValidator: {

            init: function(){
                $('#submitBtn, .submit-span').formValidator({ scope: '#registerForm' });
            }

        }

    }

};

// When DOM Ready
$(document).ready(function(){
    PF.init();
});


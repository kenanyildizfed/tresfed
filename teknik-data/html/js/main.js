TD = {

    init: function(){
        TD.General.init();
    },

    General: {
        init: function(){
            TD.General.ModenizrElement.init();
            TD.General.CustomCheckBox.init();
        },
        ModenizrElement: {
            init: function(){                               
                if (!Modernizr.input.placeholder) {
                    $('[placeholder]').focus(function() {
                        var input = $(this);
                        if (input.val() == input.attr('placeholder')) {
                            input.val('');
                            input.removeClass('placeholder');
                        }
                    }).blur(function() {
                        var input = $(this);
                        if (input.val() == '' || input.val() == input.attr('placeholder')) {
                            input.addClass('placeholder');
                            input.val(input.attr('placeholder'));
                           }
                    }).blur();

                    $('[placeholder]').parents('form').submit(function() {
                        $(this).find('[placeholder]').each(function() {
                            var input = $(this);
                            if (input.val() == input.attr('placeholder')) {
                                input.val('');
                            }
                        })
                    });
                } 
            }
        }, 
        CustomCheckBox: {
            init: function(){
                $(document).on("click", ".custom-checkbox > input[type='checkbox']", function () { $(this).siblings('span.ck').toggleClass('active'); });
            }
        }
    }
}

$(document).ready(function(){
    TD.init();
});


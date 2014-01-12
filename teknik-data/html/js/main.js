TD = {

    init: function(){
        TD.General.init();
    },

    General: {
        init: function(){
            TD.General.GenelElement.init();
            TD.General.CustomCheckBox.init();
            TD.General.FormValidator.init();
        },
        GenelElement: {
            init: function(){
                ///Full Width Slider
                $( '#cbp-fwslider' ).cbpFWSlider();
                $('.mutlumusterilerslider').bxSlider({
                    minSlides: 5,
                    maxSlides: 5,
                    slideWidth: 300,
                    slideMargin: 10
                });
                $('.sliderde').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    slideWidth: 340,
                    slideMargin: 10
                });
                $(".trs-tab-wrapper").trsTab({ activeClass: 'active' });
            }
        },
        CustomCheckBox: {
            init: function(){
                $(document).on("click", ".custom-checkbox > input[type='checkbox']", function () { $(this).siblings('span.ck').toggleClass('active'); });
            }
        },
        FormValidator: {
            init: function(){
                $('#customerSigninFormSubmit').formValidator({scope:'#customerSigninForm'})
            }
        }
    }
}

$(document).ready(function(){
    TD.init();
});


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
                $(".trs-tab-wrappers").trsTab({ activeClass: 'active' });
                $('.trs-tab-nav .t').click(function(){
                    var item=$('.trs-tab-nav .t span');
                    $('.trs-tab-nav .t span').removeClass('aktificonu');
                    item.addClass("aktificonumv")
                });

                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.bi').click(function(){
                    $('.vpshostingsep').css( "width", "125" )
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.ii').click(function(){
                    $('.vpshostingsep').css( "width", "295" )
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.uc').click(function(){
                    $('.vpshostingsep').css( "width", "495" )
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.do').click(function(){
                    $('.vpshostingsep').css( "width", "695" )
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.be').click(function(){
                    $('.vpshostingsep').css( "width", "1000" )
                });
            }
        },
        //Deneme
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


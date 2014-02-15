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
                ///Full Width Slides
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
                $('.modulslider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    slideWidth: 463,
                    slideMargin: 10
                });
                $('.duyualanislider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    slideWidth: 223,
                    slideMargin: 10
                });
                $('.sl-slider').bxSlider({
                    mode: 'fade'
                });
                $('select#customSelect').selectmenu();
                $('.fancybox').fancybox();
                $(".trs-tab-wrapper").trsTab({ activeClass: 'active' });
                $('.dmr-tab-container .dmr-tab-content').hide().eq(0).show();
                $('.dmr-tab-nav .m').click(function(){
                    num = $('.dmr-tab-nav .m').index(this);
                    $(".dmr-tab-nav .m").removeClass("active");//tüm sekmelerdeki button-renk classını temizledik,
                    $('.dmr-tab-container .dmr-tab-content').hide().eq(num).show().fadeIn();
                    $('.da-slider').stop( false, true ) ;
                    $(".dmr-tab-nav .m").eq(num).addClass("active" );
                });
                $('.vpshosting .trs-tab-nav .t').click(function(){
                    $('.vpshosting .trs-tab-nav .t span').removeClass('normalicon');
                    $('.vpshosting .trs-tab-nav .t').removeClass('thisokey');
                    var item=$('.vpshosting .trs-tab-nav .t span');
                    $('.trs-tab-nav .t ').next().children('span').addClass('normalicon');
                    $(this).prevAll().addClass('thisokey');
                    item.addClass("aktificon")
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.bi').click(function(){
                    $('.vpshostingsep').animate({
                        width: "58"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.ii').click(function(){
                    $('.vpshostingsep').animate({
                        width: "204"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.uc').click(function(){
                    $('.vpshostingsep').animate({
                        width: "342"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.do').click(function(){
                    $('.vpshostingsep').animate({
                        width: "494"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.be').click(function(){
                    $('.vpshostingsep').animate({
                        width: "634"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.al').click(function(){
                    $('.vpshostingsep').animate({
                        width: "775"
                    })
                });
                $('.vpshosting.trs-tab-wrapper .trs-tab-nav a.ye').click(function(){
                    $('.vpshostingsep').animate({
                        width: "980"
                    })
                });
                $('.tip').tipr();
            }
        },
        //Lokasyon Testi
        CustomCheckBox: {
            init: function(){
                $(document).on("click", ".custom-checkbox > input[type='checkbox']", function () { $(this).siblings('span.ck').toggleClass('active'); $(this).parent('.custom-checkbox').toggleClass('active'); });
            }
        },
        FormValidator: {
            init: function(){
                $('#customerSigninFormSubmit').formValidator({scope:'#customerSigninForm'});
                $('#myformBtnbireysel').formValidator({ scope: '#bireyselregisterForms' });
                $('#myformBtnkurumsal').formValidator({ scope: '#kurumsalregisterForms' });
                $('#mesagesubmitBtn').formValidator({ scope: '#mesageformForm' });
            }
        }
    }
}

$(document).ready(function(){
    TD.init();
});


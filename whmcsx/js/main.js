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
(function (a) {
    a.fn.intOzellikSlider = function () {
        this.each(function () {
            var f = a(this);
            var d = (f.data("slug") ? cloudSlider[f.data("slug")] : cloudSlider);
            var e = {
                container: a(".bars", f),
                max: (f.data("max") ? f.data("max") : 7),
                width: 140,
                height: 162,
                activate: function (j) {
                    var n = a("li", this.container);
                    for (i = 0; i < e.max; i++) {
                        var g = (i * e.width * -1);
                        var l = (this.height * -1);
                        if (i >= j) {
                            l = 0
                        }
                                        
                        a(n[i]).css("background-position", g + "px " + l + "px")
                    }
                    
                    var m = d.products[j - 1];
                    $('.vpsdetay .boxone h1').html(m.islemci);
                    $('.vpsdetay .boxone span').html(m.islemci_);
                    $('.vpsdetay .boxtwo h1').html(m.bellek);
                    $('.vpsdetay .boxtwo span').html(m.bellek_);
                    $('.vpsdetay .boxthree h1').html(m.hdd);
                    $('.vpsdetay .boxthree span').html(m.hdd_);
                    $('.vpsdetay .boxfour h1').html(m.trafik);
                    $('.vpsdetay .boxfour span').html(m.trafik_);
                    $('.vpsdetay .boxfive h1').text(m.fiyat);
                    
                    
                    $(".vpsdetay .boxsix a").attr("href", "http://www.fibersunucu.com.tr/cart.php?a=add&pid="+m.uid);
                    
                    
                    a(".month .price-box", f).text(m.fiyat);
                    
                    
                    if (j==8)
                    {
                         $('.ssd').show('slow', function() {});
                    } else
                    {
                        $('.ssd').hide('slow', function() {});
                    }
                    
                    c.slider({
                        value: j
                    })
                }
            };


            for (i = 0; i < e.max; i++) {
                var b = a("<li />");
                b.css({
                    display: "none",
                    "background-position": (i * e.width * -1) + "px 0px"
                });
                b.data("value", i + 1).delay(i * 40).fadeIn(500).appendTo(e.container).click(function () {
                    e.activate(a(this).data("value"))
                })
            }
            a("li:last", e.container).addClass("last");

                
            var c = a("<div />").slider({
                range: "min",
                value: 1,
                max: e.max,
                slide: function (g, h) {
                    if (h.value == 0) {
                        return false
                    }
                    e.activate(h.value)
                }
            });
            c.prependTo(a(".slider", f));
            e.activate(1)
        })
    }
})(jQuery);


   jQuery(document).ready(function (a) {

       if ($.fn.intOzellikSlider) {
           a(".cloud-slider").intOzellikSlider();
       }
       
   });

});


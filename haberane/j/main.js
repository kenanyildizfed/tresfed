PR = {

    init: function() {
        PR.General.init();
    },

    General: {

        init: function(){

            PR.General.Popup.init();
            PR.General.Tab.init();

            $('.slider').pSlider({
                slider: $('.slider ul li'),
                pagination: $('.slider .pagination')
            });

            $('.pagination a:not(".all-slide")').click(function(){
               $(this).addClass('active').siblings().removeClass('active');
                return false;
            });

        },

        Tab: {

            init: function(){
                $('.menu-left a').on('click',PR.General.Tab.GoTab);
            },

            GoTab: function(){

                var $this_index = $(this).data('index');
                $('.menu-mid > div[data-index='+$this_index+']').addClass('active').siblings('.tab-content').removeClass('active');



               return false;
            }

        },


        Popup : {

            init: function(){

                $('.pp-btn').on('click',PR.General.Popup.open);
                $('.close-btn').on('click',PR.General.Popup.close);
            },

            open: function(){

                PR.General.Popup.close();

                var popupID = $(this).attr('data-popup-id');
                $('#mainPopup').removeClass('visuallyhidden').children('div [data-popup-rel="'+popupID+'"]').removeClass('visuallyhidden');
                $('#mainPopup').height($('body').height());
                $('html,body').animate({scrollTop: 0},600);

                return false;
            },

            close: function(){
                $('#mainPopup, .popup').addClass('visuallyhidden');
                return false;
            }

        }

    }

};



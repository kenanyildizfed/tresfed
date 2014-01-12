TD = {

    init: function(){
        TD.General.init();
    },

    General: {
        init: function(){
            TD.General.GenelElement.init();
            TD.General.CustomCheckBox.init();
        },
        GenelElement: {
            init: function(){
                ///Full Width Slider
                $( '#cbp-fwslider' ).cbpFWSlider();
            },
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


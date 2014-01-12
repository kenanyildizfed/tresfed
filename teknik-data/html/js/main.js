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
               
            },
        }, 
    }
}


$(document).ready(function(){
TD.init();
})
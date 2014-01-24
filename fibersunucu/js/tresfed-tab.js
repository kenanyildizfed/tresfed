/*
 * 	Tab Plugin v1 - jQuery plugin
 *	written by Kenan YILDIZ
 *
 *	Copyright (c) 16.09.2013 Kenan YILDIZ
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

/*
 *	Sample usage $(".trs-tab-wrapper").trsTab();
 *	You can choose the active class and selector. $(".selector-wrapper").trsTab({ activeClass: 'aktif' });
 *
 *  default data-mode="show"
 *	data-mode="slide" or data-mode="fade" or data-mode=""
 *
 * 	<div class="trs-tab-wrapper" data-mode="fade">
 *       <div class="trs-tab-nav">
 *          <a class="t" data-index="1" href="#">1</a>
 *          <a class="t" data-index="2" href="#">2</a>
 *          <a class="t" data-index="3" href="#">3</a>
 *       </div>
 *       <div class="trs-tab-container">
 *          <div class="trs-tab-content" data-index="1">1. Content Area</div>
 *          <div class="trs-tab-content" data-index="2">2. Content Area</div>
 *          <div class="trs-tab-content" data-index="3">3. Content Area</div>
 *       </div>
 *  </div>
 *
 *   // Default Stylesheet
 * 	.trs-tab-wrapper 						 { width: 300px; }
 *  .trs-tab-wrapper .trs-tab-nav 			 { margin-bottom: 10px; }
 *  .trs-tab-wrapper .trs-tab-nav a.t   	 { display: inline-block; padding: 10px 20px; font: 20px Arial; border: 1px solid grey; background: black; text-align: center; text-decoration: none; color: white; }
 *  .trs-tab-wrapper .trs-tab-nav a.t.active { color: black; background: white }
 *  .trs-tab-wrapper .trs-tab-content        { width: 180px;  border: 1px solid #AAA; background: yellowgreen; padding: 30px; font: 16px Arial;}
 *
 */

(function($){

    $.trsTab = {};

    $.fn.trsTab = function(options){
        var th = $(this);
        var opts = $.extend({}, $.trsTab.defaults, options);
        $.createStructure(opts,th);
    };

    $.createStructure = function(opts,th){
        var selector = $(th);
        selector.each(function(){
            var th = $(this);
            th.find('.trs-tab-nav a.t[data-index="1"]').addClass(opts.activeClass);
            th.find('.trs-tab-container .trs-tab-content:not([data-index="1"])').hide();
            th.find('.trs-tab-nav a.t').attr('data-selector',selector.attr('class')).attr('data-active-class',opts.activeClass).on('click', $.trsTab.open);
        });
    };

    $.trsTab.open = function() {

        var th           = $(this);
        var active       = th.attr('data-active-class');
        var dataSelector = th.attr('data-selector');
        var mode         = th.parents('.'+dataSelector).attr('data-mode');
        var indis        = th.attr('data-index');

        th.addClass(active).siblings().removeClass(active);

        if ( !mode ) {
            th.parent('.trs-tab-nav').siblings('.trs-tab-container').find('.trs-tab-content').hide();
            th.parent('.trs-tab-nav').siblings('.trs-tab-container').find('.trs-tab-content[data-index='+indis+']').fadeIn();
        } else if ( mode == 'fade' ) {
        } else if ( mode == 'slide' ) {
            th.parent('.trs-tab-nav').siblings('.trs-tab-container').find('.trs-tab-content').slideUp();
            th.parent('.trs-tab-nav').siblings('.trs-tab-container').find('.trs-tab-content[data-index='+indis+']').slideDown();
        }

        return false;

    };

    $.trsTab.defaults = {
        activeClass     :    'active'
    };

}) (jQuery);
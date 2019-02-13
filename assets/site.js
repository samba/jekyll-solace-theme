---
title: null
layout: null
---

(function($, window){


    function mq(q, fn){
        var q = window.matchMedia(q);
        q.addListener(fn);
        fn.call(fn, q);
    }

    function mq_report(name){
        return function(x){
            if(console && console.log){
                console.log('Media Query <%s> [%s]', name, (x.matches ? 'matches' : 'does not match'));
            }
        }
    }

    mq('(min-width: 64em)', mq_report('large'));
    mq('(max-width: 64em) and (min-width: 48em)', mq_report('medium'));
    mq('(max-width: 48em)', mq_report('small'));
    mq('(max-width: 40em)', mq_report('compressed'));
    mq('(min-height: 40em)', mq_report('vertically spacious'));
    mq('(max-height: 40em)', mq_report('vertically compressed'));


    function applyHeader(text){
        var main = $('header h1');
        if(text === null){
            text = main.attr('data-default-text');
        }
        if(! main.attr('data-default-text')){
            main.attr('data-default-text', main.text());
        }
        main.text(text);
    }

    function toggleTagSections(){
        if($(document.body).hasClass('tag-listing')){
            var anchor = window.location.hash.substr(1);
            var active = 'section.tag-listing[data-tag-slug="' + anchor + '"]';
            if(anchor){
                $('section.tag-listing').hide();
                $(active).show();
                $(active).find('h2').first().each(function(){
                    applyHeader($(this).text());
                    $(this).hide();
                });
            } else {
                applyHeader(null);
            }
        }
    }


    $(document).ready(function(){
        $(window).on('hashchange', function(){
            toggleTagSections();
        });

        if(window.location.hash){
            $(window).trigger('hashchange');
        }

    });

}(window.jQuery, window));
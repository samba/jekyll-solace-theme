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


}(window.jQuery, window));
window.onload = function () {        

    //Script activation du menu burger.

    document.getElementById("icon_burger").addEventListener('click',function(){

        

                var menu = document.getElementById("nav");
                menu.classList.toggle("visible");
                console.log(document.getElementById("icon_burger").display=="none");

    });
    
    // //Script scroll des link-anchors

    // function anchorScroll(fragment) {
    //     "use strict";
    //     var amount, ttarget;
    //     amount = $('header').height();
    //     ttarget = $('#' + fragment);
    //     $('html,body').animate({ scrollTop: ttarget.offset().top - amount }, 250);
    //     return false;
    // }
    
    // function outsideToHash() {
    //     "use strict";
    //     var fragment;
    //     if (window.location.hash) {
    //         fragment = window.location.hash.substring(1);
    //         anchorScroll(fragment);
    //     }
    // }
    
    // function insideToHash(nnode) {
    //     "use strict";
    //     var fragment;
    //     fragment = $(nnode).attr('href').substring(1);
    //     anchorScroll(fragment);
    // }
    
    // $(document).ready(function () {
    //     "use strict";
    //     $("a[href^='#']").bind('click',  function () {insideToHash(this); });
    //     outsideToHash();
    // });

}
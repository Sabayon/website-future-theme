document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function makeExternalLinksOpenInNewTab () {
        var httpLinks, httpsLinks, links, slice;

        httpLinks = document.querySelectorAll('a[href^="http://"]');
        httpsLinks = document.querySelectorAll('a[href^="https://"]');

        slice = Array.prototype.slice;
        links = slice.call(httpLinks).concat(
                slice.call(httpsLinks)
        ).forEach(function (link) {
            var previousRel, newRel;

            // All outside links opens in a new page ootb
            if (!link.href.includes(location.hostname)) {
                previousRel = link.getAttribute('rel') || '';
                newRel = previousRel + ' noopener noreferrer';
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', newRel);
            }
        });
    };

    function initialiseHeadroom () {
        var navigation, headroom;

        // Show/hide navbar depending on scroll behaviour
        navigation = document.querySelector('header nav');
        if (navigation && 'Headroom' in window) {
            headroom = new Headroom(navigation);
            headroom.init();
        }
    }

    makeExternalLinksOpenInNewTab();
    initialiseHeadroom();
});

// ==UserScript==
// @name         Remove Annoying Ads from Rumble 23JAN24
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes specific ads from Rumble page, for when the ads are getting too crazy, aggressive, appalling, concerning for children for example...
// @match        https://rumble.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @include      https://encrypted.google.*
// @author       dlepold
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Ensure jQuery is loaded and set to noConflict mode
    if (typeof jQuery === 'undefined') {
        var script = document.createElement("script");
        script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
        script.addEventListener('load', function() {
            jQuery.noConflict();
            main(jQuery);
        }, false);
        document.head.appendChild(script);
    } else {
        jQuery.noConflict();
        main(jQuery);
    }

    function main($) {
        console.log('Removing ads from Rumble... since they are often appalling unfortuneately');

        // Add a delay to ensure the page elements are loaded
        setTimeout(function() {
            if (window.location.hostname.indexOf('rumble.') >= 0) {
                console.log('Targeting iframes on Rumble...');

                // Target iframes containing ads and hide them
                $("iframe").each(function() {
                    if ($(this).contents().find("a[href*='rmbl.ws']").length > 0) {
                        console.log('Hiding ad iframe.');
                        $(this).hide();
                    }
                });

                // Select the element with the class 'media-related-break' and data-section 'related'
                var element = document.querySelector('.media-related-break[data-section="related"]');
                // Check if the element exists to avoid errors
                if (element) {
                    // Set the display property to 'none' to hide it
                    element.style.display = 'none';
                }
            }
        }, 1000);  // Adjust the delay as needed
    }
})();

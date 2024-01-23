// ==UserScript==
// @name         Remove Annoying Ads from Rumble
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes specific ads from Rumble pages for when the ads are getting too crazy, aggressive, concerning for children for example...
// @match        https://rumble.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @include      https://encrypted.google.*
// @author       You
// @match        https://rumble.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main() {
    'use strict';
    
    // Add a delay to ensure the page elements are loaded
    setTimeout(function() {
        if (window.location.hostname.indexOf('rumble.') >= 0) {
            console.log('Removing ads from Rumble...');

            // Target iframes containing ads and fade them out
            jQ("iframe").each(function() {
                if (jQ(this).contents().find("a[href*='rmbl.ws']").length > 0) {
                    console.log('Hiding ad iframe.');
                    jQ(this).hide();
                }
            });

            // Additional 
            // new, 23.01.24:
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

addJQuery(main);

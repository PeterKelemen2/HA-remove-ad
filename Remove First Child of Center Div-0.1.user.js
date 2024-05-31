// ==UserScript==
// @name         Remove First Child of Center Div
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the first child element of the div with the id "center"
// @author       You
// @match        *://hardverapro.hu/priv*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Script started');

    const darkColor = 'rgb(30 30 46)'
    const lighterColor = 'rgb(53 53 82)'

    console.log('Function started');
    const centerDiv = document.getElementById('center');
    if (centerDiv && centerDiv.firstElementChild) {
        centerDiv.style.backgroundColor = darkColor;
        centerDiv.removeChild(centerDiv.firstElementChild);
    }

    const messageHeader = document.querySelector('.navbar.pager-navbar');
    if (messageHeader) {
        console.log('message header found!')
        messageHeader.style.borderRadius = '5px';
        messageHeader.style.backgroundColor = lighterColor;
    }

    const containerDivs = document.querySelectorAll('div#top, div#middle, div#bottom');

    containerDivs.forEach(containerDiv => {
    // Perform actions on each containerDiv here
    // For example, you can access properties or modify styles
        console.log(containerDiv); // Output each containerDiv to console
        containerDiv.style.backgroundColor = darkColor; // Change background color
    });

    const middleDiv = document.querySelector('div#middle');
    if (middleDiv) {
        const childrenArray = Array.from(middleDiv.children);
        childrenArray.forEach(child => {
            child.style.backgroundColor = darkColor;
        });
    }

})();

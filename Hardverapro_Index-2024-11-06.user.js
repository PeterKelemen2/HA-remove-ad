// ==UserScript==
// @name         Hardverapro_Index
// @namespace    http://tampermonkey.net/
// @version      2024-11-06
// @description  try to take over the world!
// @author       You
// @match        *://hardverapro.hu/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function changeColorRecursively(element, color) {
    // Set the color for the current element
    element.style.color = color;

    // Get all child elements of the current element
    const children = element.children;

    // Recursively apply the color to each child element
    Array.from(children).forEach(child => {
        changeColorRecursively(child, color); // Apply the color to the child element
    });
}

(function() {
    'use strict';

    const darkColor = 'rgb(30 30 46)';
    const lighterColor = 'rgb(53 53 82)';
    const moreLighterColor = 'rgb(80 80 122)';
    const tableColor1 = 'rgb(80 80 122)';
    const tableColor2 = 'rgb(66 66 102)';

    // BG color for middle
    const middleDiv = document.getElementById('middle');
    if (middleDiv) {
        middleDiv.style.backgroundColor = darkColor;
    }

    // Removes search image
    const slotHeader = document.getElementById('top');
    if (slotHeader) {
    const bgImg = slotHeader.querySelector('.search-bar.search-bar-ha');
    if (bgImg) {
        bgImg.style.backgroundImage = 'none';
        bgImg.style.background = lighterColor;
        }
    }

    // Removes bottom margin of search
    const marginItem = slotHeader.querySelector('.search-bar-cats');
    if (marginItem){
        marginItem.style.background = darkColor;
        marginItem.style.marginBottom = '0px';
    }

    const uadList = document.querySelector('.list-unstyled');
    if (uadList) {
        uadList.style.background = tableColor1;

        // Get all child elements
        const children = Array.from(uadList.children);

        // Filter out children with ribbon elements
        const filteredChildren = children.filter((child) => {
            // Check if the child has either of the ribbons
            const ribbon1 = child.querySelector('.uad-corner-ribbon.uad-corner-ribbon-feat');
            const ribbon2 = child.querySelector('.uad-corner-ribbon.uad-corner-ribbon-bazaar');
            const ad = child.querySelector('.adaptiveStyle.adaptiveDecor.adaptiveAd');

            // If either exists, exclude this child
            return !ribbon1 && !ribbon2 && !ad;
        });

        // Iterate through each remaining child
        filteredChildren.forEach((child, index) => {
            // Find and modify elements within the filtered child
            const title = child.querySelector('.media-body .uad-title h1 a');
            if (title) {
                title.style.color = 'lightgrey';
            }

            const catTitle = child.querySelector('h3');
            if(catTitle){
                catTitle.style.color = '#B7BDF8';
            }

            const price = child.querySelector('.uad-list .uad-price');
            if (price) {
                price.style.color = 'white';
            }

            const location = child.querySelector('.uad-list .uad-light');
            if (location) {
                location.style.color = 'lightgrey';
            }

            const seller = child.querySelector('.uad-misc .uad-light a');
            if (seller) {
                seller.style.color = 'lightgrey';
            }

            // Apply alternating background color
            child.style.backgroundColor = index % 2 === 0 ? tableColor1 : tableColor2;
            child.style.borderBottom = '0px solid black';
        });

        // Now, we can also handle removing the children with ribbons (if you want to remove them entirely)
        children.forEach((child) => {
            const ribbon1 = child.querySelector('.uad-corner-ribbon.uad-corner-ribbon-feat');
            const ribbon2 = child.querySelector('.uad-corner-ribbon.uad-corner-ribbon-bazaar');
            if (ribbon1 || ribbon2) {
                uadList.removeChild(child);
            }
        });
    }

    const cardBody = document.querySelector('.card-body');
    if(cardBody){
        changeColorRecursively(cardBody, 'white');
        cardBody.style.backgroundColor = tableColor1;
    }

    const rightDiv = document.getElementById('right');
    if (rightDiv){
        const fontos = rightDiv.querySelector('.card.uad-info-box');
        if (fontos){
            fontos.style.borderRadius = '10px';
            fontos.style.marginTop = '10px';
            fontos.style.backgroundColor = tableColor1;
            fontos.style.color = 'white';
        }

        const faves = rightDiv.querySelector('.user-thread-list.user-thread-list-fav .card');
        if (faves) {
            console.log('Faves:', faves); // Log faves to check if it's correctly selected

            const favesHeader = faves.querySelector('.card-header');
            if (favesHeader) {
                console.log('Faves Header:', favesHeader); // Log favesHeader to check if it's correctly selected
                favesHeader.style.backgroundColor = lighterColor;
            }

            const favesContent = faves.children[1];
            if (favesContent) {
                Array.from(favesContent.children).forEach((child, index) => {
                    child.borderRadius = '0px';
                    child.style.backgroundColor = index % 2 === 0 ? tableColor1 : tableColor2;
                    changeColorRecursively(child, 'lightgrey');
                    child.style.borderBottom = '0px solid black';
                });
            }
        }

    }

})();
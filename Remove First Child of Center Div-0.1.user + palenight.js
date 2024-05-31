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

    const darkColor = 'rgb(30 30 46)';
    const lighterColor = 'rgb(53 53 82)';
    const moreLighterColor = 'rgb(80 80 122)';
    const tableColor1 = 'rgb(80 80 122)';
    const tableColor2 = 'rgb(66 66 102)';

    console.log('Function started');
    const centerDiv = document.getElementById('center');
    if (centerDiv && centerDiv.firstElementChild) {
        centerDiv.style.backgroundColor = darkColor;
        centerDiv.removeChild(centerDiv.firstElementChild);
    }

    const messageHeader = document.querySelector('.navbar.pager-navbar');
    if (messageHeader) {
        //console.log('message header found!')
        messageHeader.style.borderRadius = '5px';
        messageHeader.style.marginTop = '5px';
        messageHeader.style.backgroundColor = lighterColor;
    }

    const containerDivs = document.querySelectorAll('div#top, div#middle, div#bottom');

    containerDivs.forEach(containerDiv => {
    // Perform actions on each containerDiv here
    // For example, you can access properties or modify styles
        //console.log(containerDiv); // Output each containerDiv to console
        containerDiv.style.backgroundColor = darkColor; // Change background color
    });

    const middleDiv = document.querySelector('div#middle');
    if (middleDiv) {
        // console.log(middleDiv);
        const childrenArray = Array.from(middleDiv.children);
        childrenArray.forEach(child => {
            child.style.backgroundColor = darkColor;
        });
    }

    const cards = document.querySelectorAll('div.card');

    if (cards) {
        cards.forEach(card => {
            // Apply border-radius to the whole card
            card.style.borderRadius = '100px';
            card.style.backgroundColor = darkColor;

            // Select all children of the card
            const children = card.children;

            // Loop through the children
            for (let i = 0; i < children.length; i++) {
                const child = children[i];

                // Set background color and border radius based on index
                if (i === 0) {
                    // First child
                    child.style.backgroundColor = lighterColor;
                    child.style.borderTopLeftRadius = '5px';
                    child.style.borderTopRightRadius = '5px';
                    child.style.marginTop = '5px';
                    child.style.border = '5px';
                } else {
                    // Other children
                    child.style.backgroundColor = moreLighterColor;
                    child.style.borderTopLeftRadius = '0px';
                    child.style.borderTopRightRadius = '0px';
                    child.style.color = 'white';

                    // Select anchor elements within list items
                    const anchorElements = child.querySelectorAll('li > a');

                    // Loop through anchor elements and set color
                    anchorElements.forEach(anchor => {
                        anchor.style.color = 'white';
                    });
                }
            }
        });
    }

    const topBannerContainers = Array.from(document.querySelectorAll('div#top > div.container'));
    // console.log(topBannerContainers);

    const header = topBannerContainers[1];
    header.style.marginTop = '10px';
    header.style.marginBottom = '5px';
    header.style.backgroundColor = darkColor;

    const headerChildren = Array.from(header.children);
    headerChildren.forEach(child => {
        child.style.backgroundColor = darkColor;
        const childChildren = Array.from(child.children);
        //console.log(childChildren);
        childChildren.forEach(elem => {elem.style.backgroundColor = lighterColor;
                                       elem.style.padding = '10px';
                                       elem.style.borderRadius = '5px';
                                      });
        });
    const breadcrumbItems = Array.from(document.querySelectorAll('li.breadcrumb-item > a, li.breadcrumb-item > b > a'));
    breadcrumbItems[0].style.color = 'white';
    breadcrumbItems[1].style.color = 'white';
    //console.log(breadcrumbItems);


    //const messagesArray = document.querySelector('div#middle > div.container > div.row > div#center > table');
    const messagesHeader = Array.from(document.querySelectorAll('table > thead tr > th'));
    //console.log(messagesHeader);
    if (messagesHeader.length > 0){
        messagesHeader.forEach(elem => {elem.style.color='white'; elem.style.backgroundColor = lighterColor});
        messagesHeader[0].style.borderTopLeftRadius = '5px';
        messagesHeader[messagesHeader.length-1].style.borderTopRightRadius = '5px';

        const messagesLines = Array.from(document.querySelectorAll('table > tbody > tr'));
        //console.log(messagesLines);
        messagesLines.forEach((line,index) => {
            const elements = Array.from(line.children);
            //console.log(elements, index);
            elements.forEach((elem, col) => {
                if (index % 2 === 0){
                    elem.style.backgroundColor = tableColor2;
                }
                else {
                    elem.style.backgroundColor = tableColor1;
                }
                if (elem.children){
                    const elemChildren = Array.from(elem.children);
                    elemChildren.forEach(child => {child.style.color = 'white'});
                }
                elem.style.color = 'white';
            })
        });
    }

    const threadOwner = Array.from(document.querySelectorAll('div.priv-thread-owner, div.priv-thread-owner > h4, div.priv-thread-owner > uad-list, h4.list-message'));
    console.log(threadOwner)

    if (threadOwner.length > 0) {
        threadOwner[0].style.marginTop = '5px';
        threadOwner[2].style.borderRadius = '5px';
        threadOwner[1].remove();
        const topPart = Array.from(threadOwner[0].querySelectorAll('*'));
        console.log(topPart);
        topPart.forEach(elem => {elem.style.backgroundColor = lighterColor; elem.style.color = 'white'; elem.style.border = '0px'});

        threadOwner.forEach(elem => {elem.style.backgroundColor = lighterColor; elem.style.color = 'white'; elem.style.borderRadius = '5px'});

        const navBars = Array.from(document.querySelectorAll('div.navbar.navbar-default'));
        console.log(navBars);
        const buttons = Array.from(document.querySelectorAll('a.btn.btn-forum'));
        const replyButton = buttons[0];
        console.log(replyButton);

        const clonedContent = replyButton.cloneNode(true);
        clonedContent.style.height = '27px';
        clonedContent.style.backgroundColor = 'white';
        clonedContent.style.marginRight = '5px';
        //navBars.forEach(bar => {bar.appendChild(clonedContent)});

        const referenceNode = navBars[0].children[2];
        navBars[0].insertBefore(clonedContent, referenceNode);
        //navBars[0].appendChild(clonedContent);

        const toRemove = Array.from(document.querySelectorAll('h4.list-message'));
        toRemove.forEach(toRem =>{toRem.remove()});
    }



})();

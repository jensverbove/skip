// Change this value depending on how long it takes your browser to load each video, current value is equal to 4 seconds.
const loadTime = 3000;

let clickAndSkip = async (link) => {

    link.click();

    let noCodingPlease = !link
        .querySelector('[data-purpose="item-title"]')
        .innerText.toLowerCase()
        .includes("coding exercise");

    if (noCodingPlease) {

        await new Promise((resolve) => setTimeout(resolve, loadTime));

        video = document.getElementsByTagName("video")[0];
        if (video != undefined) {
            video.currentTime += 10000;
            console.log("Skipped!");
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        
    } else {
        console.log("Do it youself! (or Google it)")
    }

};

// Run this function to skip all the lectures in the sections that are currently opened.
let skip = async () => {
    elements = document.getElementsByClassName("item-link");
    links = Array.from(elements).filter(function (element) {
        return element.getAttribute("data-purpose").startsWith("curriculum-item");
    });
    for (let link of Array.from(links)) {
        await clickAndSkip(link);
    }
};

// Run this function to open/close all the sections in Udemy.
let openAllSections = () => {
    buttons = document.getElementsByClassName("ud-accordion-panel-toggler");

    for (let button of buttons) {
        button.click();
    }
};

/**
 * @author Jens Verboven
 * @version 1.1
 *
 * Are you tired of having to constantly skip through lectures on Udemy? Well then I have the solution for you!
 * Just execute this code in your browser of whatever course you're currently watching and it will magically skip all of it for you!
 *
 * How does it work?
 * 1. Go to your (least) favorite Udemy course and open the console by using inspect element (right click on the page + 'Inspect' or press
 *    F12) and at the bottom right of your screen you will find the console (where you can see the '>' symbol).
 * 2. Copy all of the code in this file and paste it into the console, then press enter. You have now defined two new functions in your browser
 *    session!
 * 3. (Optional) type 'openAllSections()' in the console and press enter to open all of the closed sections. Do this again if you want to close
 *    all of the sections.
 * 4. Type 'skip()' in the console and press enter. This will automatically start skipping all the video's in the sections that are currently
 *    opened. If you want to skip all the video's of this course, follow step 3 first.
 * 5. Enjoy all of the free time you've gained by not having to watch a ridiculous amount of lectures on a topic you're already familiar with!
 *
 * Note: if the video's aren't loading in time you can adjust the 'loadTime' variable below so it will wait longer before trying to skip the
 *       video (current value is set to wait 4 seconds). Alternatively if you want to skip the video's faster, you can try and lower this value.
 */

// Change this value depending on how long it takes your browser to load each video, current value is equal to 4 seconds.
const loadTime = 4000;

let clickAndSkip = async (link) => {
  link.click();

  await new Promise((resolve) => setTimeout(resolve, loadTime));

  quizTime = link
    .querySelector('[data-purpose="item-title"]')
    .innerText.toLowerCase()
    .includes("quiz");

  if (quizTime) {
    console.log("Quiz time!");

    continueButton = document.querySelector('[data-purpose="start-or-resume-quiz"]')
    if(continueButton != null){
      continueButton.click();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    while (document.querySelector('[data-purpose="go-to-next"]') == null) {
      answers = document.getElementsByClassName(
        "mc-quiz-question--answer--eCdL3"
      );
      nextButton = document.querySelector(
        '[data-purpose="next-question-button"]'
      );
      for (let answer of Array.from(answers)) {
        answer.getElementsByTagName("input")[0].click();
        await new Promise((resolve) => setTimeout(resolve, 500));
        nextButton.click();
        await new Promise((resolve) => setTimeout(resolve, 500));
        correct = nextButton.innerText.toLowerCase().includes("next");

        if (correct) {
          console.log("Correct!");
          nextButton.click();
          break;
        }
      }
    }
    document.querySelector('[data-purpose="go-to-next"]').click();
  }

  video = document.getElementsByTagName("video")[0];
  if (video != undefined) {
    video.currentTime += 10000;
    console.log("Skipped!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
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

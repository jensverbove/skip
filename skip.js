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

# skip.js

*Are you tired of having to constantly skip through lectures on Udemy? Well then I have the solution for you!
Just execute this code in your browser of whatever course you're currently watching and it will magically skip all of it for you!*

How does it work?
1. Go to your (least) favorite Udemy course and open the console by using inspect element (right click on the page + 'Inspect' or press F12) and at the bottom right of your screen you will find the console (where you can see the '>' symbol).
2. Copy all of the code in the skip.js file and paste it into the console, then press enter. You have now defined two new functions in your browser session!
3. (Optional) type 'openAllSections()' in the console and press enter to open all of the closed sections. Do this again if you want to close all of the sections.
4. Type 'skip()' in the console and press enter. This will automatically start skipping all the video's in the sections that are currently opened. If you want to skip all the video's of this course, follow step 3 first.
5. Enjoy all of the free time you've gained by not having to watch a ridiculous amount of lectures on a topic you're already familiar with!

Note: if the video's aren't loading in time you can adjust the 'loadTime' variable so it will wait longer before trying to skip the video (current value is set to wait 4 seconds). Alternatively if you want to skip the video's faster, you can try and lower this value.

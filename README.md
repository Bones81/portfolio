# portfolio
**Portfolio of web/software development projects

**Technologies used: HTML, CSS, JavaScript, jQuery

**Approach taken: I elected to make separate bio/about, resume, projects, links, and contact html pages. I linked all with the same master style.css file. 

* The heart of the site is the projects page, which features the most information and complexity. I focused first on creating and populating cards for each of the projects I included. By using a JS array of these projects (an array of objects) and then implementing jQuery to generate the project cards and flexbox to guide layout and styling, this section should adapt readily as I add or remove projects. 
* Later, I modified the section so that the cards (when clicked) open up a modal-style large card with additional details and links to the live site and github code. 
* I added a textarea, name, and email input on the contact page, later hooking up a simple mailto: link when clicking the "send message" button at the bottom. It should open up whatever email client handles mailto: links on your machine. However, I only tried it on my machine which opens up a gmail compose tab, with the recipient, subject, and message fields filled in based on the values of the text fields when you clicked "send message." You still must actively send the message through your email client to actually send the message. 
* The bio page features a simple image carousel.
* The links page gave me some opportunity to use a few icon fonts. 
* Styles developed often right alongside the html, as I wanted to visualize the layout as soon as I could. It was good practice, as CSS often takes large chunks of time to nail down. Plus, it kept me from mismanaging too much time because I wouldn't try to implement too many new features without having the previous features decently styled. 

**Live site link: http://www.nathanfreeman.com

**Installation Instructions: N/A

**Unsolved Problems: 
* The nav bar links on all the non-index.html pages do not transform: scale(2) as they do on the home page. 
* The "Back to Projects" button in the open card layout for each project is not actually hooked up. I am currently using a workaround in which clicking on any part of the card toggles the .open-card class on/off. I could not get such a toggle to work when targeting the button.
* The comment form requires Ajax to email me directly with the contents of the text field, without needing to open up the local machine's email client -- as far as I can tell. I know nothing about Ajax and felt there were more important needs to address. But ultimately, I would prefer that the "send message" link just created an email with the user's input, sent it to me, reported that the message had been sent, and cleared the fields.
* Much of the CSS feels ad hoc and messy. I could probably clean it up quite a bit, consolidating rules and eliminating rules that ended up being unnecessary.
* Additionally, I suspect I might have more media queries than is necessary. I kept running into scenarios that were easily solved by just adding another media query. 
* Finally, this isn't so much a problem as it is an aspiration: I wanted to include fun animations. Maybe fly in the project details from off-screen, have background divs that move, creating a sense of fluid motion. Maybe spin links on click events. I ultimately decided to prioritize other desires for the project.


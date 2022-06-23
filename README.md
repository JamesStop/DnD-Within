# DnD Within


## Technologies Used:
    
The site is programmed using HTML, CSS, Javascript utilizing React, React Router, and API calling.
The site is hosted on Netlify.


## Installation Instructions:
### There are 2 main ways to access the site:
    
1 - Visit the webpage at https://cosmic-strudel-3baddd.netlify.app/

2 - Clone down the fork and/or clone down the repository. Navigate to the folder containing the repository in terminal and input "npm i" to install required packages. From there input "npm start" and the webpage should open up in a new page/tab.


## Programming Approach

For this project, I approached it with a few ambitious wireframes that I later decided had a few too many functionalities that just weren't reasonable for the time frame and current requirements of the project:

![wireframe1](assets/wireframes/wireframe1.png)
![wireframe2](assets/wireframes/wireframe2.png)
![wireframe3](assets/wireframes/wireframe3.png)
![wireframe4](assets/wireframes/wireframe4.png)

The first wireframe highlights a general look at what the page would be when first opened. Removed the profile section from the final product as it wasn't a good fit for scope and wouldn't work well with the technologies I had available to me at time of building.

The second wireframe highlights a general look of what the character creation process would look like. I removed proficiency choices from MVP as they proved to be way more complicated for the scope of the requirements as is. I also decided to move away from the navigation bar as the current project's character creation process is simple and quick enough to not entirely need for the option to go back.

For wireframe three, my original idea was extremely overly ambitious. I simplified it down to a display that brought together the three aspects of the character creation process and allowed for a quick viewing of the character's overview.

The fourth and last wireframe is relatively the same. Each new character made generates a new card with general stats and there is a button at the bottom of each card that brings one to the character creation process that allows for updating of said character.


## Unsolved problems

The biggest issue with this site is that everything is stored in state, so whenever the webpage is refreshed all progress on current and all characters are lost. This is something that will require more backend skills than I had at the time of building, and I really look forward to returning to this project to update it to have these better data storage capabilities and even add more to the creation and editing process.
# sMARTA
### MARTA, smarter...

sMARTA is a public transit app that provides the user with the time it takes to get to their desired destination via train, when the next train will arrive, and if it's feasible for them to get to their destination on time. It also lets the user know if they can get on the first available train, as well as the crime rate and details for the desired destination.

## Team Members and Contributions
We all collectively came up with the idea to incorporate public transit data with crime rate and population density. We also planned out our workflow together, using Kanban-style organization and solving problems as a team.


[Sam Erickson](https://github.com/samerickson95)
- <p>
My primary contributions to sMARTA have been establishing the framework of our HTML file, formatting our user input section and incorporating the resulting output onto the page. In our input form, I set up our dropdown lists and used JavaScript to draw in real-time information about the trains, and created our radio buttons for the user. Additionally, I worked on setting up a function to determine the time it will take for the next train to arrive, relative to the current time when the user presses the _Plan Trip_ button. I also wrote our Keynote presentation.
</p>

[Will Harris](https://github.com/harriswill22)
- <p>()</p>

[Alex Rogers](https://github.com/alexrogers823)
- <p>My priorities revolved around data extraction and transformation from our APIs. I wrote the JSON for our Marta train information. I collaborated with Will to create new datasets based on the Crime API we used, then added those datasets into our MARTA data. I also wrote several JavaScript functions to handle the output content that the user would see based in their input.</p>



## How to Use
- User puts in the station they are catching the next train at
- User has the option to put in their destination and any time constraints they may have
- Once the user selects _Plan Trip_, the output will give them information on their trip, the crime rate, and if they will get there on time.

## Tools
- JavaScript (ES6)
- HTML5 and CSS3
- PapaParse CSV Parser
- Atlanta Police Department Crime API (2016-2018)
- MARTA Train API
- Atlanta Population Density JSON file

## What We Learned
This was our first team project, and we learned a lot about developing projects in a team setting. We practiced Agile methodology, git branching and merging, and had consistent communication with each other.

#### Challenges and Growth
- Resolving conflicts with git merging
- Consolidating 75,000 arrays of data into a categorized object
- Using promises and the promise chain to assign key variables and organize functions in a synchonous manner

## Features
- Uses the `Date()` method to display current time
- Allocates several neighborhoods to certain MARTA stations for crime rate
- Provides estimated time to destination
- Uses population density for a station to estimate likelihood of user getting on the next train

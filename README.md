# sMARTA
### Marta, smarter...

sMARTA is a public transit app that provides the user with the time it takes to get to their desired destination via train, when the next train will arrive, and if it's feasible for them to get to their destination on time. It also lets the user know if they can get on the first available train, as well as the crime rate and details for the desired destination.

## Team Members and Contributions
We all collectively came up with the idea to incorporate public transit data with crime rate and population density. We also planned out our workflow together, using Kanban-style organization and solving problems as a team.


- [Sam Erickson](https://github.com/samerickson95)
(Sam, write your contributions here)

- [Will Harris](https://github.com/harriswill22)
(Will, write your contributions here)

- [Alex Rogers](https://github.com/alexrogers823)
(Alex, write your contributions here)



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

// Variable containing all of our neighborhood objects
const json = {
    "North Springs": {
        "Alt_Names": [],
        "Population": 102212,
        "Linked": ["Sandy Springs"]
    },
    "Sandy Springs": {
        "Alt_Names": [],
        "Population": 102212,
        "Linked": ["North Springs"]
    },
    "Dunwoody": {
        "Alt_Names": [],
        "Population": 48128,
        "Linked": ["Medical Center"]
    },
    "Medical Center": {
        "Alt_Names": [],
        "Population": 48128,
        "Linked": ["Dunwoody"]
    },
    "Buckhead": {
        "Alt_Names": [],
        "Population": 174136,
        "Linked": null
    },
    "Doraville": {
        "Alt_Names": [],
        "Population": 10348,
        "Linked": null
    },
    "Chamblee": {
        "Alt_Names": [],
        "Population": 27862,
        "Linked": null
    },
    "Brookhaven": {
        "Alt_Names": ["Brookhaven/Oglethorpe"],
        "Population": 51567,
        "Linked": null
    },
    "Lenox": {
        "Alt_Names": [],
        "Population": 174136,
        "Linked": ["Buckhead"]
    },
    "Lindbergh Center": {
        "Alt_Names": [],
        "Population": 26818,
        "Linked": null
    },
    "Arts Center": {
        "Alt_Names": [],
        "Population": 40909,
        "Linked": ["Midtown", "North Avenue"]
    },
    "Midtown": {
        "Alt_Names": [],
        "Population": 40909,
        "Linked": ["Arts Center", "North Avenue"]
    },
    "North Avenue": {
        "Alt_Names": [],
        "Population": 40909,
        "Linked": ["Midtown", "Arts Center"]
    },
    "Civic Center": {
        "Alt_Names": [],
        "Population": 32105,
        "Linked": ["Five Points", "Peachtree Center", "Dome"]
    },
    "Peachtree Center": {
        "Alt_Names": [],
        "Population": 32105,
        "Linked": ["Five Points", "Civic Center", "Dome"]
    },
    "Five Points": {
        "Alt_Names": [],
        "Population": 32105,
        "Linked": ["Civic Center", "Peachtree Center", "Dome"]
    },
    "Garnett": {
        "Alt_Names": [],
        "Population": 22069,
        "Linked": ["Vine City", "Ashby"]
    },
    "West End": {
        "Alt_Names": [],
        "Population": 27988,
        "Linked": ["Oakland City", "Lakewood/Ft. McPherson"]
    },
    "Oakland City": {
        "Alt_Names": [],
        "Population": 27988,
        "Linked": ["West End", "Lakewood/Ft. McPherson"]
    },
    "Lakewood/Ft. McPherson": {
        "Alt_Names": ["Lakewood", "Ft. McPherson"],
        "Population": 27988,
        "Linked": ["West End", "Oakland City"]
    },
    "East Point": {
        "Alt_Names": [],
        "Population": 35477,
        "Linked": null
    },
    "College Park": {
        "Alt_Names": [],
        "Population": 14434,
        "Linked": null
    },
    "Airport": {
        "Alt_Names": [],
        "Population": null,
        "Linked": null
    },
    "Hamilton E. Holmes": {
        "Alt_Names": ["Collier Park"],
        "Population": 57795,
        "Linked": null
    },
    "West Lake": {
        "Alt_Names": [],
        "Population": 1954,
        "Linked": null
    },
    "Bankhead": {
        "Alt_Names": [],
        "Population": 79864,
        "Linked": null
    },
    "Ashby": {
        "Alt_Names": [],
        "Population": 22069,
        "Linked": ["Vine City", "Garnett"]
    },
    "Vine City": {
        "Alt_Names": [],
        "Population": 22069,
        "Linked": ["Ashby", "Garnett"]
    },
    "Dome": {
        "Alt_Names": [],
        "Population": 32105,
        "Linked": ["Five Points", "Peachtree Center", "Civic Center"]
    },
    "Georgia State": {
        "Alt_Names": [],
        "Population": 53000,
        "Linked": null
    },
    "King Memorial": {
        "Alt_Names": ["Sweet Auburn"],
        "Population": 20771,
        "Linked": null
    },
    "Inman Park": {
        "Alt_Names": ["Reynoldstown"],
        "Population": 18725,
        "Linked": null
    },
    "Edgewood": {
        "Alt_Names": [],
        "Population": 30513,
        "Linked": null
    },
    "East Lake": {
        "Alt_Names": [],
        "Population": 11788,
        "Linked": null
    },
    "Decatur": {
        "Alt_Names": [],
        "Population": 21210,
        "Linked": ["Kensington"]
    },
    "Avondale": {
        "Alt_Names": ["Avondale Estates"],
        "Population": 2832,
        "Linked": null
    },
    "Kensington": {
        "Alt_Names": [],
        "Population": 21210,
        "Linked": ["Decatur"]
    },
    "Indian Creek": {
        "Alt_Names": [],
        "Population": 54680,
        "Linked": null
    }
}

// Variable referencing the 'submit' button to add an event listener
const triggerElement = document.querySelector('[data-trigger]'); 


// Variable referencing our formDiv by its data attribute
const formElement = document.querySelector('[data-form]');

// references our timeInput in HTML
const timeInputElement = document.querySelector('[data-timeInput]');

// current time
const currentTime = document.querySelector('[data-current-time]');

// Function that automatically draws the current time
function getCurrentTime() {

    const now = new Date().toLocaleTimeString('en-US');
    // const minutes = now.getMinutes();
    // const hours = now.getHours();
    currentTime.textContent += `${now}`;
}
getCurrentTime();

// setInterval({
//     document.querySelector('[data-current-time]').innerHTML = '';
//     getCurrentTime;}, 1000
// );

// Writing function to append relevant, up-to-date train info into our <select> element, rather than keep a static list
function addToDropdown(json) {
    // console.log(json);
    // const jsonArray = [...json];
    const selectFrom = document.querySelector('[data-stations-from]');
    const selectTo = document.querySelector('[data-stations-to]');

    console.log(Object.keys(json).sort());


    Object.keys(json).sort().forEach(key => {
        selectFrom.appendChild(createStation(key));
        selectTo.appendChild(createStation(key));
    })
    console.log(selectFrom.value);
    
}
addToDropdown(json);

// Helper function that externally creates new <option> elements containing the station names
function createStation(key) {
    const stationName = document.createElement('option');
    stationName.textContent = key;
    stationName.setAttribute('value', key);
    // console.log(stationName);
    return stationName;
}

// Writing a function that will append output data into our new section
function appendOutputData() {
    // creating a paragraph, into which our output data will be placed (<p> will be inside the <form>)
    let outputParagraph = document.createElement("p");
    
    // adding an event listener to detect when the submit button is clicked
    // when the button is clicked, the current contents of the input form will be overwritten with the output information we are providing the user
    
    makeOutput();
    // getRadioButtonValue();
    formElement.innerHTML = '';
    
    
    
}



triggerElement.addEventListener("click", appendOutputData);

function makeOutput() {
    const crimeRate = document.createElement("p");
    const travelTime = document.createElement("p");
    const timeConstraints = document.createElement("p");
    const chanceOfGettingTrain = document.createElement("p");

    let radioButtons = document.getElementsByName("timeConstraints");
    console.log(radioButtons);
    for(x=0; x<radioButtons.length; x++) {
        if(radioButtons[x].checked) {
            if(radioButtons[x].value === "no rush") {
                console.log('no rush');
            } else if(radioButtons[x].value === "less than 15 minutes") {
                console.log('less than 15 minutes');
            } else if(radioButtons[x].value === "15-20 minutes") {
                console.log('15-20 minutes');
            } else if(radioButtons[x].value === "20-30") {
                console.log('20-30 minutes');
            } else if(radioButtons[x].value === "30-40") {
                console.log('30-40 minutes');
            } else if(radioButtons[x].value === "40-50") {
                console.log('40-50 minutes');
            } else if (radioButtons[x].value === "50-60") {
                console.log('50-60 minutes');
            } else {
                console.log('yer good');
            }
            
        }
    }



    const paragraphObject = [
        {paragraph: crimeRate,
        text: 'The crime rate in your area is X'},
        {paragraph: travelTime,
        text: 'Your trip will take approximately X minutes'},
        {paragraph: timeConstraints,
        text: 'You will/will not be able to reach your destination in time'}, 
        {paragraph: chanceOfGettingTrain,
        text: 'You may have to wait at least 1 train before you can board.'}
    ];

    for (let i=0; i<paragraphObject.length; i++) {
        // no 'constraints' variable exists yet

        // if(i=2 && constraints===false) {
        //     continue;
        // } 
        paragraphObject[i].paragraph.textContent = paragraphObject[i].text;
        
        formElement.appendChild(paragraphObject[i].paragraph);
    };

};        


// function setText(paragraph) {
    
// }


// Function that will calculate how much time the next train will take to arrive, relative to the exact current time when the submit button is pressed
function timeToNextTrain(){
    // creating a variable 
    const now = getCurrentTime();
    const timeToTrain = (now.getMinutes() - martaAPI[0].NEXT_ARR);
    formElement.appendChild(timeToTrain);
}

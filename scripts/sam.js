// THIS IS TEMPORARY
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








// Function that automatically draws the current time
function getCurrentTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    return now;
}

getCurrentTime();

// Writing function to append relevant, up-to-date train info into our <select> element, rather than keep a static list
function addToDropdown(json) {
    // const jsonArray = [...json];
    const selectFrom = document.querySelector('[data-stations-from]');
    const selectTo = document.querySelector('[data-stations-to]');
    Object.keys(json).sort().forEach(key => {
        const stationName = document.createElement('option');
        stationName.textContent = key;
        stationName.setAttribute('value', key);
        selectFrom.appendChild(stationName);
        selectTo.appendChild(stationName);
    })
}

function constraintMessage() {

}

addToDropdown(json);
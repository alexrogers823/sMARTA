
// Variable referencing the 'submit' button to add an event listener
const triggerElement = document.querySelector('[data-trigger]');


// Variable referencing our formDiv by its data attribute
const formElement = document.querySelector('[data-form]');

// references our timeInput in HTML
const timeInputElement = document.querySelector('[data-timeInput]');

// variables referencing our 2 dropdown menus
const selectFrom = document.querySelector('[data-stations-from]');
const selectTo = document.querySelector('[data-stations-to]');

// current time
const currentTime = document.querySelector('[data-current-time]');

// Function that automatically draws the current time
function getCurrentTime() {

    const now = new Date().toLocaleTimeString('en-US');
    // const minutes = now.getMinutes();
    // const hours = now.getHours();
    currentTime.textContent += `${now}`;
}
// getCurrentTime();

setInterval(() => {
  currentTime.textContent = "Current Time: ";
  getCurrentTime();
}, 1000);


// Writing function to append relevant, up-to-date train info into our <select> element, rather than keep a static list
function addToDropdown(data) {
  // console.log(Object.keys(data).sort());
  Object.keys(data).sort().forEach(key => {
    selectFrom.appendChild(createStation(key));
    selectTo.appendChild(createStation(key));
  });
  // console.log(selectFrom);

}

// addToDropdown(populationData);



// Helper function that externally creates new <option> elements containing the station names
function createStation(key) {
    const stationName = document.createElement('option');
    stationName.textContent = key;
    stationName.setAttribute('value', key);
    // console.log(stationName);
    return stationName;
}

// Writing a function that will append output data into our new section
function appendOutputData(start, destination, constraints) {
    // creating a paragraph, into which our output data will be placed (<p> will be inside the <form>)
    let outputParagraph = document.createElement("p");

    // adding an event listener to detect when the submit button is clicked
    // when the button is clicked, the current contents of the input form will be overwritten with the output information we are providing the user

    // getRadioButtonValue();
    formElement.innerHTML = '';
    makeOutput(start, destination, constraints);



}


// 3 variables needed to pass into our makeOutput function
triggerElement.addEventListener("click", () => {
  const destination = (selectToText === "Please choose a station:") ? null : selectToText;
  appendOutputData(selectFromText, destination, constraints);
});

console.log(selectFrom);
selectFrom.addEventListener("change", () => {
  selectFromText = selectFrom.options[selectFrom.selectedIndex].text;
});

selectTo.addEventListener("change", () => {
  selectToText = selectTo.options[selectTo.selectedIndex].text;
});

let selectFromText = selectFrom.options[selectFrom.selectedIndex].text;
let selectToText = selectTo.options[selectTo.selectedIndex].text;

let constraints;
let radioButtons = document.getElementsByName("timeConstraints");
// console.log(radioButtons);

radioButtons.forEach(button => {
    button.addEventListener("click", getButtonValue);
});

function getButtonValue() {
  for(x=0; x<radioButtons.length; x++) {
    if(radioButtons[x].checked) {
      constraints = extractLowestConstraint(radioButtons[x].value);
    }
  }
}

// Helper function for setting constraint in getButtonValue
function extractLowestConstraint(value) {
  if (value === "no rush") {
    return null;
  }

  if (value === "less than 15 minutes") {
    return 15;
  }

  return parseInt(value.slice(0, 2));
}



function makeOutput(selectFromText, selectToText, constraints=null) {
    const crimeRate = document.createElement("p");
    const travelTime = document.createElement("p");
    const timeConstraints = document.createElement("p");
    const chanceOfGettingTrain = document.createElement("p");

    const start_id = populationData[selectFromText].Station_ID;
    const destination_id = (selectToText !== "Please choose a station:") ? populationData[selectToText].Station_ID : null;
    const totalTime = (selectToText !== "Please choose a station:") ? MartaTotalTime(start_id, destination_id) : 100;

    // console.log(totalTime);

    const crimeMessage = (selectToText) ? calculateCrime(selectToText) : calculateCrime(selectFromText);
    const travelMessage = (selectToText) ? `approximately ${totalTime}` : 'up to 60';
    const constraintMessage = (checkForConstraints(totalTime)) ? 'will' : 'will not';



    const paragraphObject = [
        {paragraph: crimeRate,
        text: `The crime rate in your area is ${crimeMessage}`},
        {paragraph: travelTime,
        text: `Your trip will take ${travelMessage} minutes`},
        {paragraph: timeConstraints,
        text: `You ${constraintMessage} be able to reach your destination in time`},
        // text: checkForConstraints()},
        {paragraph: chanceOfGettingTrain,
        text: `You may have to wait at least 1 train before you can board.`}
    ];

    for (let i=0; i<paragraphObject.length; i++) {
        paragraphObject[i].paragraph.textContent = paragraphObject[i].text;
        formElement.appendChild(paragraphObject[i].paragraph);
    };

};

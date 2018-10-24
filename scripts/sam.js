// Function that automatically draws the current time
function getCurrentTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();

}

getCurrentTime();

// Writing function to append relevant, up-to-date train info into our <select> element, rather than keep a static list
function addToDropdown(json) {
    const select = document.querySelector('[data-stations]');
    json.forEach(key => {
        const stationName = document.createElement('option');
        stationName.textContent = key;
        stationName.setAttribute('value', key);
        select.appendChild(stationName);
    })




}
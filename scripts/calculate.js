// Gets the room width input
const widthInput = document.querySelector("#width");

// Gets the room depth input
const depthInput = document.querySelector("#depth");

// Gets the wall height input
const heightInput = document.querySelector("#height");

// Gets the paint quality selection
const qualityInput = document.querySelector("#quality");

// Gets the area where error messages will show
const errorMessage = document.querySelector("#error-message");

// Gets the calculate button
const calculateButton = document.querySelector("#calculate");

// Gets the area where paint results will show
const paintResults = document.querySelector("#paint-results");

// Gets the area where carpet results will show
const carpetResults = document.querySelector("#carpet-results");


// Runs the calculator when the button is clicked
calculateButton.addEventListener("click", () => {

    // Gets the room width value
    const width = Number(widthInput.value);

    // Gets the room depth value
    const depth = Number(depthInput.value);

    // Gets the wall height value
    const height = Number(heightInput.value);

    // Gets the selected paint coverage amount
    const quality = Number(qualityInput.selectedOptions[0].value);

    // Checks if any part of the form is missing
    if (!width || !depth || !height || qualityInput.value === "none") {
        // Shows an error message
        errorMessage.innerHTML = "Please fill out all fields.";

        // Stops the calculator if something is missing
        return;
    }

    // Clears the error message when the form is complete
    errorMessage.innerHTML = "";


    // Calculates the floor and ceiling area
    const area = width * depth;

    // Calculates the room perimeter
    const perimeter = width + depth + width + depth;

    // Calculates the total wall area
    const wallArea = perimeter * height;

    // Calculates the carpet needed in square yards
    const carpetYards = area / 9;

    // Calculates the primer needed for the walls and ceiling
    const primerGallons = Math.ceil((wallArea + area) / quality);

    // Calculates the flat paint needed for the ceiling
    const flatGallons = Math.ceil(area / quality);

    // Calculates the semi-gloss paint needed for the walls
    const semiGlossGallons = Math.ceil(wallArea / quality);

    // Uses the distance around the room to find how much tack strip is needed
    const tackStrip = perimeter;

    // Rounds the carpet amount up so there is enough carpet for the room
    const carpetNeeded = Math.ceil(carpetYards);


    // Shows the paint supplies the user needs
    paintResults.innerHTML = `
    <p>&#9745; ${primerGallons} gallon(s) of primer</p>
    <p>&#9745; ${flatGallons} gallon(s) of flat paint</p>
    <p>&#9745; ${semiGlossGallons} gallon(s) of semi-gloss paint</p>
`;

    // Shows the carpet supplies the user needs
    carpetResults.innerHTML = `
    <p>&#9745; ${tackStrip} linear feet of tack strip</p>
    <p>&#9745; ${carpetNeeded} square yards of carpet</p>
`;


});
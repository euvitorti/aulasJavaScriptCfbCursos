// Display the array elements
const displayArray = document.querySelector("#array");
// Button that triggers the reduction
const reduceButton = document.querySelector("#btnReduzir");
// Area where the result will be displayed
const resultDisplay = document.querySelector("#resultado");

// Array of elements to reduce (sum)
const elementsArray = [3, 2, 5];
// Arrays to store previous and current values during reduction
let previousValues = [];
let currentValues = [];

// Display the array on the page
displayArray.innerHTML = `[${elementsArray}]`;

// Event listener for the button click
reduceButton.addEventListener("click", (evt) => {
    // Use reduce to sum the elements and keep track of previous and current values
    resultDisplay.innerHTML = elementsArray.reduce((previous, current, index) => {
        // Store the previous and current values at each step
        previousValues.push(previous);
        currentValues.push(current);
        // Return the sum of the current and previous values (this becomes the 'previous' for the next iteration)
        return current + previous;
    });

    // Display the final result along with the values tracked during reduction
    resultDisplay.innerHTML += `<br>PREVIOUS VALUE: ${previousValues}<br>CURRENT VALUE: ${currentValues}`;
});

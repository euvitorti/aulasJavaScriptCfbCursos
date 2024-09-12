// Display the array elements
const displayArray = document.querySelector("#array");
// Button that triggers the test
const checkButton = document.querySelector("#btnPesquisar");
// Area where the result will be displayed
const resultDisplay = document.querySelector("#resultado");

// Array of elements to test
const testArray = [51, 62, 30, 57, 38, 1];

// Display the array on the page
displayArray.innerHTML = `[${testArray}]`;

// Function to display the failure message with the position
const displayFailure = (index) => {
    resultDisplay.innerHTML = `Array does not meet the requirement at position ${index}.`;
}

// Event listener for the button click
checkButton.addEventListener("click", (evt) => {
    // Check if all elements in the array meet the condition (e.g., >= 18)
    const allElementsValid = testArray.every((element, index) => {
        index++; // Adjust index to be human-readable (starting from 1)
        if (element < 18) {
            // Display which element fails the condition
            displayFailure(index);
        }
        // Return true if the element is 18 or greater, false otherwise
        return element >= 18;
    });

    // If all elements satisfy the condition, update the message to "OK"
    if (allElementsValid) {
        resultDisplay.innerHTML = "OK";
    }
});

// Display the array elements
const displayArray = document.querySelector("#array");
// Input field where the user types the value to search for
const searchInput = document.querySelector("#txt_pesquisar");
// Button that triggers the search
const searchButton = document.querySelector("#btnPesquisar");
// Area where the result will be displayed
const resultDisplay = document.querySelector("#resultado");

// Array of elements to search in
const searchArray = ["JAVA", "CSS", "C#"];

// Display the array on the page
displayArray.innerHTML = "[" + searchArray + "]";

// Event listener for the search button click
searchButton.addEventListener("click", (evt) => {
    // Find the first occurrence of the element in the array
    const foundElement = searchArray.find((element, index) => {
        // Compare the input value (converted to uppercase) with the array element
        if (element === searchInput.value.toUpperCase()) {
            index++; // Adjust index to be human-readable (starting from 1)
            // Display the found element and its position
            resultDisplay.innerHTML = `VALUE FOUND: ${element} AT POSITION ${index}`;
            return element; // Return the found element to the find() method
        } else {
            // Display message if the value is not found
            resultDisplay.innerHTML = `VALUE NOT FOUND.`;
        }
    });
    console.log(foundElement); // Log the result of the search
});

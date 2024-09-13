// O método some é usado para testar se ao menos um elemento de um array satisfaz uma determinada condição. Ele executa uma função de callback para cada elemento e retorna true assim que encontrar um elemento que satisfaça a condição especificada. Se nenhum elemento atender à condição, ele retorna false.

// Display the array elements
const displayArray = document.querySelector("#array");
// Button that triggers the test
const checkButton = document.querySelector("#btnPesquisar");
// Area where the result will be displayed
const resultDisplay = document.querySelector("#resultado");

// Array of elements to test
const testArray = [4, 19, 3];

// Display the array on the page
displayArray.innerHTML = `[${testArray}]`;

// Function to display the failure message with the position
const displayFailure = (index) => {
    resultDisplay.innerHTML = `Array does not meet the requirement at position ${index}.`;
}

// Event listener for the button click
checkButton.addEventListener("click", (evt) => {

    // Check if at least one element in the array meets the condition (e.g., >= 18)
    const atLeastOneValid = testArray.some((element, index) => {
        index++; // Adjust index to be human-readable (starting from 1)
        if (element < 18) {
            displayFailure(index);
        }
        // Return true if the element is 18 or greater, false otherwise
        return element >= 18;
    });

    // If at least one element satisfies the condition, update the message to "OK"
    if (atLeastOneValid) {
        resultDisplay.innerHTML = "Ok";
    }
});

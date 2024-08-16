// Function to calculate the average of an array of grades
function calculateAverage(grades) {
    // Calculate the sum of all grades
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    // Return the average by dividing the sum by the number of grades
    return total / grades.length;
}

// Function to format and display the average
function displayAverage(average) {
    // Return a formatted string showing the average
    return `Average: ${average}.`;
}

// Function to determine the result based on the average
function checkPassStatus(average, passingGrade = 7) {
    // Check if the average meets or exceeds the passing grade
    if (average >= passingGrade) {
        // Log the result as 'Approved' with the average
        console.log(`Approved! ${displayAverage(average)}`);
    } else {
        // Log the result as 'Failed' with the average
        console.log(`Failed! ${displayAverage(average)}`);
    }
}

// Example usage with two grades
let grades = [9, 6.5];  // Store grades in an array

// Calculate the average of the grades
let average = calculateAverage(grades);

// Check if the student passes or fails based on the average
checkPassStatus(average);

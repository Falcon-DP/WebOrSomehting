// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // Get references to the display element and the button
    const numberDisplay = document.getElementById('numberDisplay');
    const incrementButton = document.getElementById('incrementButton');

    // Initialize the counter variable
    let count = 0;

    // Add an event listener to the button
    incrementButton.addEventListener('click', () => {
        // Increment the counter
        count++;

        // Update the text content of the display element
        numberDisplay.textContent = count;
    });

}); // End of DOMContentLoaded listener

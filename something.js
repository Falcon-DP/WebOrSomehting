// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // Get references to the display element and the button
    const numberDisplay1 = document.getElementById('numberDisplay1');
    const incrementButton1 = document.getElementById('incrementButton1');

    const numberDisplay2 = document.getElementById('numberDisplay2');
    const incrementButton2 = document.getElementById('incrementButton2');

    // Initialize the counter variable
    let count1 = 0;
    let count2 = 0;

    // Add an event listener to the button
    incrementButton1.addEventListener('click', () => {
        // Increment the counter
        count1++;

        // Update the text content of the display element
        numberDisplay1.textContent = count1;
    });

    incrementButton2.addEventListener('click', () => {
        // Increment the counter
        count2++;

        // Update the text content of the display element
        numberDisplay2.textContent = count2;
    });

}); // End of DOMContentLoaded listener
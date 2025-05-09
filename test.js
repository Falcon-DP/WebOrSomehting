// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // Set a timeout to execute a function after 2000 milliseconds (2 seconds)
    setTimeout(() => {
        // 1. Create a new div element
        const newElement = document.createElement('div');

        // 2. Add a class for styling (optional)
        newElement.classList.add('created-element');

        // 3. Set some text content for the new element
        newElement.textContent = 'Hello! I appeared after 2 seconds!';

        // 4. Get the container element by its ID
        const container = document.getElementById('container');

        // 5. Check if the container exists before appending
        if (container) {
            // 6. Append the new element to the container
            container.appendChild(newElement);
        } else {
            console.error("Error: Container element with ID 'container' not found.");
        }

    }, 2000); // 2000 milliseconds = 2 seconds

}); // End of DOMContentLoaded listener

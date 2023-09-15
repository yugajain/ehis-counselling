// Function to adjust font size based on screen width
function adjustFontSize() {
    const screenWidth = window.innerWidth;

    // Define the base font size and the screen width breakpoint
    const baseFontSize = 16; // You can adjust this as needed
    const breakpoint = 768; // Adjust this breakpoint to your desired value

    // Calculate the new font size based on the screen width
    const newFontSize = screenWidth >= breakpoint ? baseFontSize : (baseFontSize * screenWidth) / breakpoint;

    // Apply the new font size to the body element
    document.body.style.fontSize = newFontSize + 'px';
}

// Call the adjustFontSize function initially and on window resize
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

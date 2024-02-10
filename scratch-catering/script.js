
// function toggleMode() {
//     var body = document.body;
//     body.classList.toggle('dark-mode');

//     // Get all elements with the class 'card'
//     var cards = document.querySelectorAll('.card');

//     // Loop through each card and update background and text color based on the theme
//     cards.forEach(function (card) {
//         if (body.classList.contains('dark-mode')) {
//             // Dark theme
//             card.style.backgroundColor = '#343a40'; // Dark background color
//             card.style.color = '#00f'; // Blue text color
//         } else {
//             // Light theme
//             card.style.backgroundColor = ''; // Reset background color
//             card.style.color = '#000'; // Black text color
//         }
//     });
// }


function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    // Update background color and text color based on the theme
    if (body.classList.contains('dark-mode')) {
        // Dark theme
        body.style.backgroundColor = '#343a40'; // Dark background color
        body.style.color = '#00f'; // Blue text color
    } else {
        // Light theme
        body.style.backgroundColor = ''; // Reset background color
        body.style.color = '#000'; // Black text color
    }
}

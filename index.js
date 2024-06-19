// Remove the <main> element with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign an id of 'victory' to the <h1> element
newHeader.id = 'victory';

// Set the text of the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body
document.body.append(newHeader);

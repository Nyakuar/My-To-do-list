
// Selecting the elements
var input = document.getElementById('to-do');
var btn = document.querySelector('.btn');

// Add Eventlistners
function addToDoList() {
	// document.getElementById('p').innerHTML = "I am doing Well";

	// Selecting the to do list section
	var toDoSec = document.getElementById('to-do-list')

	// Appending elements to the to do list section
	// toDoSec.innerHTML = input.value

	// Create list element
	var li = document.createElement('p')

	// Add the inner content to list
	li.textContent = input.value

	// Add class for checking if completed
	li.classList.add('list')

	// Append the element
	toDoSec.appendChild(li)
}


// Adding *****click**** event listner to to do list
document.addEventListener('click', function(event) {
	// We store the element clicked
	var element = event.target

	// Check if element has class ****list****
	if (element.classList.contains('list')) {
		element.classList.add('completed')
	}


})



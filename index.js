//Using DOM
//Retrieve an element from webpage
const txtFirstName = document.querySelector('#txt-first-name');
const spanFullName = document.querySelector('#span-full-name')

/* Alternative in retrieving an element - getElement
	document.getElementById('txt-first-name');
	document.getElementsByClassName('txt-inputs');
	document.getElementsByTagName('input');
*/

//Event listener-an interaction between the user and the web page.
txtFirstName.addEventListener('keyup', (event) => {
	spanFullName.innerHTML = txtFirstName.value;
})

//Assign same event to multiple listeners
txtFirstName.addEventListener('keyup', (event) => {
	//Contains the element where the event happened
	console.log(event.target);
	//Gets the value of the input object
	console.log(event.target.value);
})
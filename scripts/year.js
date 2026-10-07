const rightnow = new Date() // Gets the current date and time
console.log(rightnow.getFullYear()) // Prints the current year in the browser console for testing
document.querySelector('#currentyear').textContent=rightnow.getFullYear() // Puts the current year into the footer
const button = document.querySelector('#button');

function getUserValue(event) {
    event.preventDefault();
}
button.addEventListener('click', getUserValue)
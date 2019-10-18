// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');
const sportsCheckbox = document.querySelector('#sports-checkbox');
const gamesCheckbox = document.querySelector('#games-checkbox');
const musicCheckbox = document.querySelector('#music-checkbox');

const radioButtons = document.getElementsByName('transport-method');
const musicMenu = document.querySelector('#music-preference');

musicResult.textContent = musicMenu.value;

//TODO: checkbox listeners
sportsCheckbox.addEventListener('change', ($event) => {
    if ($event.target.checked) {
        hobbiesResult.children[0].classList.remove('text-secondary');
    } else {
        hobbiesResult.children[0].classList.add('text-secondary');
    }

});

gamesCheckbox.addEventListener('change', ($event) => {
    if ($event.target.checked) {
        hobbiesResult.children[1].classList.remove('text-secondary');
    } else {
        hobbiesResult.children[1].classList.add('text-secondary');
    }
});

musicCheckbox.addEventListener('change', ($event) => {
    if ($event.target.checked) {
        hobbiesResult.children[2].classList.remove('text-secondary');
    } else {
        hobbiesResult.children[2].classList.add('text-secondary');
    }
});



// TODO: Radio buttons listeners
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', ($event) => {
        transportResult.textContent = $event.target.value;
    });
}

// TODO: dropdown menu
musicMenu.addEventListener('change', ($event) => {
    musicResult.textContent = $event.target.value;
});
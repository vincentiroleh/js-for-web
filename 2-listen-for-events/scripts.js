const body = document.querySelector('body');
const header = document.querySelector('header');
const blueButton = document.querySelector('#color-button-blue');
const brownButton = document.querySelector('#color-button-brown');
const greenButton = document.querySelector('#color-button-green');
const noneButton = document.querySelector('#color-button-none');
const section = document.querySelector('section');
const addPost = document.querySelector('#add-post');
const removePost = document.querySelector('#remove-post');

blueButton.addEventListener('click', () => {
    header.classList.add('blue-background', 'text-white');
    header.classList.remove('brown-background', 'green-background');
});

brownButton.addEventListener('click', () => {
    header.classList.add('brown-background', 'text-white');
    header.classList.remove('blue-background', 'green-background');
});

greenButton.addEventListener('click', () => {
    header.classList.add('green-background', 'text-white');
    header.classList.remove('blue-background', 'brown-background');
});

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-background', 'green-background', 'text-white');
});

addPost.addEventListener('click', () => {
    const newPost = createNewPost();
    section.appendChild(newPost);
});

removePost.addEventListener('click', () => {
    const lastPost = section.childElementCount;
    if (lastPost > 1) {
        section.removeChild(section.children[lastPost - 1]);
    }
});

const createNewPost = () => {
    let newArticle = document.createElement('article');
    newArticle.classList.add('list-group-item');

    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');
    let newList = document.createElement('li');


    newHeading.textContent = 'Another Blog Post';
    newParagraph.textContent = 'Another paragraph here, you got it bro';

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);

    return newArticle;
}
// section.addEventListener('mouseover', ($event) => {
//     console.log('X: ' + $event.offsetX + ' | Y: ' + $event.offsetY);
    
// });

window.addEventListener('scroll', () => {
    console.log(section.offsetTop - window.scrollY);
});
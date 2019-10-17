// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
// const mainHeading = document.querySelector('h1');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
// const header = document.querySelector('header');
header.innerHTML = '<h2> Modify the DOM </h2>';

// Add the CSS styles
header.classList.add('text-center');
sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-secondary');

header.classList.remove('bg-dark');
header.style.padding = '1em';
header.style.backgroundColor = 'brown';


// Building new elements
let newArticle = document.createElement('article');

let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = "Article 004";
newParagraph.textContent = "I aren't the gram, the recording who I am. God to this dope boys.";

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2','p-2','border','border-secondary');

newArticle.setAttribute('id', 'art-004');

// console.log(newArticle);
// console.log(main);

main.appendChild(newArticle);

// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand';

    this.closeButton = domElement.querySelector('.readButton');
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.toggleArticle())
    this.closeButton.addEventListener('click', () => this.toggleArticle())
    
  }

  toggleArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
   switch(this.closeButton.style.display === 'block') {
     case true:
       this.closeButton.style.display = 'none';
       this.expandButton.style.display = 'block';
      // console.log(this)
       break;
      case false:
        this.closeButton.style.display = 'block';
        this.expandButton.style.display = 'none';
        console.log(this);
        break;
        
   }

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const mainArticle = document.querySelector('.articles');
const submitBtn = document.querySelector('.submitArticle');

submitBtn.addEventListener('click', () => {
var div = document.createElement('div');
var header = document.createElement('h2');
var para = document.createElement('p');
var closeSpan = document.createElement('span');
var openSpan = document.createElement('span');


openSpan.classList.add('expandButton');
openSpan.textContent = 'Expand';
closeSpan.classList.add('readButton');
closeSpan.textContent = 'Close';
headerText = document.querySelector('.newArticleTitle');
header.textContent = headerText.value;
paraText = document.querySelector('.newArticle');
para.textContent = paraText.value;
div.classList.add('article');

div.appendChild(header);
div.appendChild(para);
div.appendChild(closeSpan);
div.appendChild(openSpan);

mainArticle.appendChild(div);
div = new Article(div);
console.log('submit');
modal.style.display = "none";
event.preventDefault();


})

const articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));

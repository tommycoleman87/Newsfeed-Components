// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

/*class Article {
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
}*/

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

//const mainArticle = document.querySelector('.articles');
//const submitBtn = document.querySelector('.submitArticle');

/*submitBtn.addEventListener('click', () => {
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


})*/

//const articles = document.querySelectorAll('.article');
//articles.forEach(article => new Article(article));

const articles = [
 {
    "header" : `Lambda School Students: "We're the best!"`,
    "date" : "Nov 5th, 2017",
    "content" : [`Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`, `Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
    windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
    k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
    solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
    owen jinn tatooine sith organa.`, `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
    naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
    han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
    moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`]
  },

 {
    "header" : `Javascript and You, ES6`,
    "date" : `Nov 7th, 2017`,
    "content" : [`Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
    Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
    snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
    yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
    knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
    Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.`,`Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
    wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
    mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
    and Parvati Sorting Hat Minister of Magic blue turban remember my last.`]
  },

 {
    "header" : `React vs Angular vs Vue`,
    "date" : "Nov 7th, 2017",
    "content" : [`Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
    elit`,`Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`]
  },

  {
    "header" : `Professional Software Development in 2018`,
    "date" : "Nov 7th, 2017",
    "content" : [`Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
    hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
    Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `, `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
    hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
    hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
    hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor?`, `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
    Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
    Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`, `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
    hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
    hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
    hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor?`]
  }

]

function article(header, date, content) {
  const article = document.createElement('div');
  const articleHeader = document.createElement('h2');
  const articleDate = document.createElement('p');
  const articleContent = content.map(para => {
    let articlePara = document.createElement('p');
    articlePara.textContent = para;
    return articlePara;
  });
  const articleBtn = document.createElement('span');

  //Assign classes and text content
  article.classList.add('article');
  articleHeader.textContent = header;
  articleDate.classList.add('date');
  articleDate.textContent = date;

  articleBtn.classList.add('expandButton');
  articleBtn.textContent = 'Expand';



  //Append the content to article
  article.appendChild(articleHeader);
  article.appendChild(articleDate);
  articleContent.forEach(art => {
    article.appendChild(art);
  });

  article.appendChild(articleBtn);

  articleBtn.addEventListener('click', event => {
    const openArticles = document.querySelectorAll('.article-open');
    article.classList.toggle('article-open');
    if(article.classList.contains('article-open')) {
      article.lastChild.textContent = "Close";
    } else {
      article.lastChild.textContent = "Expand";
    }
    openArticles.forEach(art => {
        art.classList.remove('article-open');
        art.lastChild.textContent = "Expand";
    });

  })

  



return article;
}

const articleContainer = document.querySelector('.articles');

articles.forEach(art => {
   articleContainer.appendChild(article(art.header, art.date, art.content));
})

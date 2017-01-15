// import js files here
// ex:
  // import X from y
  // var x = new X();

// import all variables from elements modules in scrits folder --
import * as ELEMENTS from './modules/elements'
import randomQuote from './modules/RandomQuote'
import tweet from  './modules/Tweet'
ELEMENTS.ELEMENT_GENERATE_BUTTON.addEventListener('click', randomQuote);
ELEMENTS.ELEMENT_GENERATE_BUTTON_TWITTER.addEventListener('click',tweet);

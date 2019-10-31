// change functionality of quote area templte

//import variables from elements folder
import * as ELEMENTS from './elements'

function changetext(data){
// quote template creation
ELEMENTS.ELEMENT_QUOTE_AREA.innerHTML = data[0].content;
ELEMENTS.ELEMENT_QUOTE_AREA.className ='para'; 
ELEMENTS.ELEMENT_AUTHOR.className = 'para';
ELEMENTS.ELEMENT_AUTHOR.innerHTML = "by "+data[0].title;
}

//export; to be used in, RandomQuote.js
export default changetext;

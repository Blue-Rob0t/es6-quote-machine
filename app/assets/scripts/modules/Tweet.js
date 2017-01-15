import * as ELEMENTS from './elements'


// twitter share button
function tweet(){
  var inject = ELEMENTS.ELEMENT_QUOTE_AREA.innerText
  ELEMENTS.ELEMENT_GENERATE_BUTTON_TWITTER.href = 'https://twitter.com/intent/tweet?text=' +inject;
}

export default tweet;

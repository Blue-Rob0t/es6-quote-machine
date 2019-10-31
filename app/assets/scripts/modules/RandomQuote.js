// change functionality of api call
import changetext from './ChangeText';
//imports variables from webpage
import * as ELEMENTS from './elements'
//allows for use of jquery
import $ from 'jquery'


// function grabs a random quote from API
function randomQuote() {

// using jquery
// fade out quote-area here
$('#quote-area').fadeOut(function(){
  var random = Math.floor((Math.random() * 25) + 1)
  var xhr    =  new XMLHttpRequest();
  // get data
  xhr.open('GET',"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+random,true);
  // data is stored in variable called quoteData,
  xhr.onload    = function(){
    var quoteData = JSON.parse(xhr.responseText);
      // renders HTML and twitter share button info
      changetext(quoteData);

  }

    xhr.send();

    // fade in quote-area here
    $('#quote-area').fadeIn(1000);
});




}

//export function to be used
export default randomQuote;

// change functionality of api call
import changetext from './ChangeText';
import * as ELEMENTS from './elements'
import $ from 'jquery'

function randomQuote() {


// fade out quote-area here
$('#quote-area').fadeOut(function(){
  var random = Math.floor((Math.random() * 25) + 1)
  var xhr    =  new XMLHttpRequest();
  // get data
  xhr.open('GET',"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+random,true);

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

export default randomQuote;


console.log("hello");

$(document).ready(function(){

  const divContents = $('#book').text().split(/\W+/);
  

  const randomValue = function(max){
    return Math.floor( Math.random()*max );
  }

  const displayWord = function(){
    const randomIndex = randomValue( divContents.length );
    

    const randomWword = divContents[randomIndex];

    const $wordDiv = $('<div class="word">')
    $wordDiv.text(randomWword)

   const  xRand =  randomValue(window.innerHeight)
   const  yRand = randomValue(window.innerWidth)
   const ColorRand = `rgb(${randomValue(255)},${randomValue(255)},${randomValue(255)})`
   $wordDiv.css({
       top: xRand,
       left: yRand,
       color:ColorRand
        
    
   })

$('body').append($wordDiv);
}
//setInterval( displayWord, 100 );
})




   
      
 
 



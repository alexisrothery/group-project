// writes to the log 'hello'
console.log('hello!')

// three different variables for the different images
var backgrounds = ['mike-yukhtenko', 'gabriele-garanzelli', 'fabian-oelkers']

// Only fires logic after the page has fully loaded
$( document ).ready(function(){


  // when the button is clicked it triggers a function
  $('h1').on('click', function () {

    // 1. log to the console that you have clicked the button

    // this selects a randon background from above and stores it as the variable 'randomBackground'
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    // this creates a string that css will understand to be a background url
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"
    
    
    // 2. using jquery, change the image url of the body background to the new one saved above

    // EXTENSION TASK!
    // 3. Change the text of the 'span' to be that of the photographer
    //   (hint, you should re-use randomBackgroun)
    // Double points if you replace '-' between their names with a space

    
  }) 
}) // here endeth the function
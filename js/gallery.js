/*Name this external file gallery.js*/

function upDate(pic){
        /* In this function you should 
        1) change the url for the background image of the div with the id = "image" 
        to the source file of the preview image
        
        
        2) Change the text  of the div with the id = "image" 
        to the alt text of the preview 
        */
       var src = pic.getAttribute( "src" );
      
       var alt = pic.getAttribute( "alt" );
      
       document.getElementById('image').style.backgroundImage = "url('" + src + "')";
      
       document.getElementById('image').innerHTML = alt;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
      console.log (1)
      var src = "image"
      
      var alt = "Hover over an Image below to display here."
      
      document.getElementById('image').style.backgroundImage = "none";

      document.getElementById('image').innerHTML = alt;
       }

  $(document).ready(function() {
    $("#basic-form").validate();
  });
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
   
  }
  $(document).ready(function() {
    $(window).resize(function(){

        if ($(window).width() <= 768) {  
    
            $('#test1').css("display","none")
    
        }else
        {
            $('#test1').css("display","contents")
        }   
    
    });
  });

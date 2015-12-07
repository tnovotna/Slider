$(document).ready(function() {

//  // your jQuery code here...
//
//$(".content").hide();
    
//first

$("#first").click(function(){
    $(".content").hide();
    $("#stepOne").fadeIn(1000);
});
        
//second

$("#second").click(function(){
    $(".content").hide();
    $("#stepTwo").slideDown(1000);
});
    
    
//third

$("#third").click(function(){
    $(".content").slideUp(1000);
    $("#stepThree").show();
});
    
    
//fourth

$("#fourth").click(function(){
    $(".content").hide();
    $("#stepFour").slideDown(1000);
});
    
        
//fifth

$("#fifth").click(function(){
    $(".content").hide();
    $("#stepFive").fadeIn();
});    
 
    
        
//    Previous next
        
        $("#next").click(function() {
            var nextDiv =
        $(".content:visible").next(".content");
             if (nextDiv.length === 0) {
            nextDiv = $(".content:first");
        }
            $(".content").hide();
            nextDiv.slideDown("slow", function() {});
            
            
        });

        
           $("#prev").click(function() {
        var prevDiv =
    $(".content:visible").prev(".content");
       if (prevDiv.length === 0) {
        prevDiv = $(".content:last");
    }
        $(".content").hide();
        prevDiv.fadeIn("slide")
        
        
    });
     });




    
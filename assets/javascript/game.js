    //  This will be a jQuery block to wait until everything loads
    $(document).ready(function(){
        
           
                // This will be for declaring variables for scores
                var counter = 0;
                var wins = 0;
                var losses = 0;
                var randomNumGuess = [Math.floor(Math.random() * (120 - 19) + 19)];
                var char1 = [];
                var char2 = [];
                var char3 = [];
                var char4 = [];
        
                     
             function reset(){
               
                $(".mainNumber").empty();
                $(".currentNumber").empty();
                counter = 0;
                randomNumGuess = [Math.floor(Math.random() * (120 - 19) + 19)];
                $(".mainNumber").text("Target Number: " + randomNumGuess);
               
              
             }
        
                // This will be for initiating the random num and also declaring crystal variable random numbers
               $(".mainNumber").text("Target Number: " + randomNumGuess);
               
        
                var char1 = [Math.floor(Math.random() * (12 - 1) + 1)];
                var char2 = [Math.floor(Math.random() * (12 - 1) + 1)];
                var char3 = [Math.floor(Math.random() * (12 - 1) + 1)];
                var char4 = [Math.floor(Math.random() * (12 - 1) + 1)];
                console.log(char2);
        
                // This will be for linking the img with the value attr() 
                $( ".1" ).attr("value", char1);
                $( ".2" ).attr("value", char2);
                $( ".3" ).attr("value", char3);
                $( ".4" ).attr("value", char4);
        
                // This is a function for when img is clicked it returns a num and then adds to counter score
                
                $("img").on("click", function(){
                   var theNum = ($(this).attr("value"));
                   theNum = parseInt(theNum);
                 
                    counter += theNum;
                  
        
                // This would be for adding counter num to the page display text
                $(".currentNumber").text("Current Number: " + counter);
        
                
                // This will be a conditional statement it the user guess mathches of or goes over 
            
        
           
        
            if(counter == randomNumGuess){
                wins++
                counter = 0;
                $('img').fadeOut(1500).fadeIn(1000);
                alert("You Won!!")
               reset();
                
            }
            else if (counter >= randomNumGuess){
            losses++ 
            counter = 0;
            $('img').fadeOut(500).fadeIn(1000);
            alert("You suck!!")
            reset();
           
           
            
            }
           
           
           
            $(".wins").text("Wins: " + wins);
             $(".losses").text("Losses: " + losses);
             $(".currentNumber").text("Current Number: " + counter);
             
             
        
        
        
            });
           
           
            console.log(randomNumGuess);
        });
           
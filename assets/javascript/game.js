$(document).ready(function() {
    // Generates random number
    var random = Math.floor(Math.random() * 102 + 19);
        console.log(random); 
        $("#random").text(random);


    // Generates random number for crystals
    var crystal1 = Math.floor(Math.random()*12 + 1);
    var crystal2 = Math.floor(Math.random()*12) + 1;
    var crystal3 = Math.floor(Math.random()*12 + 1);
    var crystal4 = Math.floor(Math.random()*12 + 1);
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
        $("#crystal1").text(crystal1);
        $("#crystal2").text(crystal2);
        $("#crystal3").text(crystal3);
        $("#crystal4").text(crystal4);
        
})


//PSEUDOCODE
// 1. generate random number to guess - done
//      1a. put this in random number on HTML - done
// 2. assign a random value between 1-12 to each crystal - done
//      2a. put this over each value of crystals - done
// 3. grab user's event click for each crystal
// 4. add user's clicks together
// 5. if usertotal = random number you win!
// 6. if usertotal < random number, keep playing
// 7. if usertotal > random number, you lose
// 8. count wins and losses
// 9. reset everything
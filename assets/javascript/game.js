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

    // Click a crystal and logging the total in the count
    var myCounter = 0;
        $("#userScore").text(myCounter);
    var win = 0;
        $("#wins").text(win);
    var loss = 0;
        $("#losses").text(loss);
        console.log(win);

    
    $(".crystal1").click(function() {
        myCounter+=crystal1;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            alert("winner");
            win++;
            $("#wins").text(win);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);  
            myCounter = 0;
            $("#userScore").text(myCounter);
                crystal1 = Math.floor(Math.random()*12 + 1);
                $("#crystal1").text(crystal1);
                console.log(crystal1)
        } else if (myCounter > random) {
            alert("loser");
            loss++;
            $("#losses").text(loss);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);  
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal1 = Math.floor(Math.random()*12 + 1);
            $("#crystal1").text(crystal1);
            console.log(crystal1);
        }
    });

    $(".crystal2").click(function() {
        myCounter+=crystal2;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            alert("winner");
            win++;
            $("#wins").text(win);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal2 = Math.floor(Math.random()*12 + 1);
            $("#crystal2").text(crystal2); 
            console.log(crystal2);
        } else if (myCounter > random) {
            alert("loser");
            loss++;
            $("#losses").text(loss);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);  
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal2 = Math.floor(Math.random()*12 + 1);
            $("#crystal2").text(crystal2);
            console.log(crystal2);
        }             
    });
    $(".crystal3").click(function() {
        myCounter+=crystal3;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            alert("winner");
            win++;
            $("#wins").text(win);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal3 = Math.floor(Math.random()*12 + 1);
            $("#crystal3").text(crystal3);
            console.log(crystal3);
        }
        else if (myCounter > random) {
            alert("loser");
            loss++;
            $("#losses").text(loss);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);  
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal3 = Math.floor(Math.random()*12 + 1);
            $("#crystal3").text(crystal3);  
            console.log(crystal3);
        }
    });
    $(".crystal4").click(function() {
        myCounter+=crystal4;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            alert("winner");
            win++;
            $("#wins").text(win);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal4 = Math.floor(Math.random()*12 + 1);
            $("#crystal4").text(crystal4);
            console.log(crystal4);
        }
        else if (myCounter > random) {
            alert("loser");
            loss++;
            $("#losses").text(loss);
            random = Math.floor(Math.random() * 102 + 19);
            $("#random").text(random);  
            myCounter = 0;
            $("#userScore").text(myCounter);
            crystal4 = Math.floor(Math.random()*12 + 1);
            $("#crystal4").text(crystal4);
            console.log(crystal4);
        }             
    });

});


//PSEUDOCODE
// 1. generate random number to guess - done
//      1a. put this in random number on HTML - done
// 2. assign a random value between 1-12 to each crystal - done
//      2a. put this over each value of crystals - done
// 3. grab user's event click for each crystal - done
// 4. add user's clicks together - done
// 5. if usertotal = random number you win!
// 6. if usertotal < random number, keep playing
// 7. if usertotal > random number, you lose
// 8. count wins and losses
// 9. reset everything
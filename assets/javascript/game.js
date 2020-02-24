$(document).ready(function() {
    // Generates random number
    var random;
    var setRandom = function() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random); 
        $("#random").text(random);
    }

    // Generates random number for crystals
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var setCrystals = function() {
        crystal1 = Math.floor(Math.random()*12 + 1);
        crystal2 = Math.floor(Math.random()*12 + 1);
        crystal3 = Math.floor(Math.random()*12 + 1);
        crystal4 = Math.floor(Math.random()*12 + 1);
            $("#crystal1").text(crystal1);
            $("#crystal2").text(crystal2);
            $("#crystal3").text(crystal3);
            $("#crystal4").text(crystal4);
            console.log(crystal1);
            console.log(crystal2);
            console.log(crystal3);
            console.log(crystal4);
    }

    setRandom();
    setCrystals();

    // Logging counter, wins, and losses
    var myCounter = 0;
        $("#userScore").text(myCounter);
    var win = 0;
        $("#wins").text(win);
    var loss = 0;
        $("#losses").text(loss);
        console.log(win);

    // What to do if user wins
    var winReset = function() {
        alert("Yay! You win!");
        win++;
        $("#wins").text(win);
        setRandom();
        myCounter = 0;
        $("#userScore").text(myCounter);
        setCrystals();
    }

    // What to do if user loses
    var lossReset = function() {
        alert("Oh no... you lost!");
        loss++;
        $("#losses").text(loss);
       setRandom();
        myCounter = 0;
        $("#userScore").text(myCounter);
        setCrystals();
    }

    // User clicks a crystal
    $(".crystal1").click(function() {
        myCounter+=crystal1;
        console.log(myCounter);     
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            winReset();
        } else if (myCounter > random) {
            lossReset();
        }
    });
    $(".crystal2").click(function() {
        myCounter+=crystal2;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            winReset();
        } else if (myCounter > random) {
            lossReset();
        }             
    });
    $(".crystal3").click(function() {
        myCounter+=crystal3;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            winReset();
        }
        else if (myCounter > random) {
            lossReset();
        }
    });
    $(".crystal4").click(function() {
        myCounter+=crystal4;
        $("#userScore").text(myCounter);
        if (myCounter == random) {
            winReset();
        }
        else if (myCounter > random) {
            lossReset();
        }             
    });

});
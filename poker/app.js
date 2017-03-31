console.log("js working");
$(function() {


//arrays and objects for all the cards in play to be in
var inPlay = [];
var onTable = [];
var card1 = {};
var card2 = {};
var card3 = {};
var card4 = {};
var card5 = {};
var player1Card1 = {};
var player1Card2 = {};
var player2Card1 = {};
var player2Card2 = {};

//holds the amount of money available to win during each hand
var pot = 0;

//variable to hold the amount of single pairs a hand has
var pairs1 = 0;
var pairs2 = 0;

//holds a value if both hands have a pair
var tiebreakerPairPlayer1;
var tiebreakerPairPlayer2;

//holds the value for each hand to compare at the end to see who wins
var player1Result = 0;
var player2Result = 0;

//puts each card as an object into the onTable array
onTable[0] = card1;
onTable[1] = card2;
onTable[2] = card3;
onTable[3] = card4;
onTable[4] = card5;
onTable[5] = player1Card1;
onTable[6] = player1Card2;
onTable[7] = player2Card1;
onTable[8] = player2Card2;

//arrays to hold each players hand to check to see what value playerResult should hold
var player1HandValue = [];
var player2HandValue = [];
var player1HandSuit = [];
var player2HandSuit = [];

var inOrder = [];


var totalBet = 0;
var raiseAmount = 0;
var turnNum = 1;

//each players starts out with 1000 dollars to start the game
var player1Money = 1000;
var player2Money = 1000;

var $pot = $('<h1>');
var $potBox = $('#pot');
$potBox.append($pot);

var $player1Score = $('#player1Score');
$player1Score.append(player1Money);

var $player2Score = $('#player2Score');
$player2Score.append(player2Money);

var $prompt = $('#prompt');

var $start = $('#start');


var shuffle = function(){
    var til = 9;
    for (var i = 0; i < til; i++){
        var cardNum = Math.floor(Math.random() * (52 - 1)) + 1;
        inPlay.push(cardNum);
        for(j = 0; j < inPlay.length; j++){
            inPlay.sort(function(a, b){return a-b});

            if(inPlay[j] === inPlay[j+1]){
                inPlay.pop();
                i--;
            }
        }
    }
    inPlay.sort(function(a, b){return 0.5 - Math.random()});
}

var findSuit = function(){
    for (i = 0; i < inPlay.length; i++){
        var mod = inPlay[i]%4;
        if(inPlay[i]>4){
            console.log(mod);
            if(mod === 0){
                onTable[i].suit = 'spades';
            }else if(mod === 1){
                onTable[i].suit = 'diamonds';
            }else if(mod === 2){
                onTable[i].suit = 'clubs';
            }else if(mod === 3){
                onTable[i].suit = 'hearts';
            }
        }
        if(inPlay[i] === 1){
            onTable[i].suit = 'diamonds';
            onTable[i].value  = 2;
            onTable[i].name = 'two';
        }else if(inPlay[i] === 2){
            onTable[i].suit = 'clubs';
            onTable[i].value  = 2;
            onTable[i].name = 'two';
        }else if(inPlay[i] === 3){
            onTable[i].suit = 'hearts';
            onTable[i].value  = 2;
            onTable[i].name = 'two';
        }else if(inPlay[i] === 4){
            onTable[i].suit = 'spades';
            onTable[i].value  = 2;
            onTable[i].name = 'two';
        }
    }
}

var findValues = function(){
    for (i = 0; i < inPlay.length; i++){
        var divide = inPlay[i]/4;
        if(inPlay[i]>4){
            if(divide <= 1){
                onTable[i].value = 2;
                onTable[i].name = 'two';
            }else if(divide> 1 && divide <= 2){
                onTable[i].value = 3;
                onTable[i].name = 'three';
            }else if(divide> 2 && divide <= 3){
                onTable[i].value = 4;
                onTable[i].name = 'four';
            }else if(divide> 3 && divide <= 4){
                onTable[i].value = 5;
                onTable[i].name = 'five';
            }else if(divide> 4 && divide <= 5){
                onTable[i].value = 6;
                onTable[i].name = 'six';
            }else if(divide> 5 && divide <= 6){
                onTable[i].value = 7;
                onTable[i].name = 'seven';
            }else if(divide> 6 && divide <= 7){
                onTable[i].value = 8;
                onTable[i].name = 'eight';
            }else if(divide> 7 && divide <= 8){
                onTable[i].value = 9;
                onTable[i].name = 'nine';
            }else if(divide> 8 && divide <= 9){
                onTable[i].value = 10;
                onTable[i].name = 'ten';
            }else if(divide> 9 && divide <= 10){
                onTable[i].value = 11;
                onTable[i].name = 'jack';
            }else if(divide> 10 && divide <= 11){
                onTable[i].value = 12;
                onTable[i].name = 'queen';
            }else if(divide> 11 && divide <= 12){
                onTable[i].value = 13;
                onTable[i].name = 'king';
            }else if(divide> 12){
                onTable[i].value = 14;
                onTable[i].name = 'ace';
            }
        }
    }
}
console.log(inPlay);
console.log(onTable);

var startGame = function(){
    $('#card4').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    $('#card5').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    for (var i = 0; i < inPlay.length; i++){
        if(i === 0){
            $('#card1').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 1){
            $('#card2').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 2){
            $('#card3').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 5){
            $('#playerCard1').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 6){
            $('#playerCard2').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        // }else if(i === 7){
        //     $('#player2Card1').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        // }else if(i === 8){
        //     $('#player2Card2').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        // }
    }
}
    firstRound();
}
var turn = function(){
    for (var i = 0; i < inPlay.length; i++){
        if(i === 3){
            $('#card4').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }
    }
    firstRound();
}
var river = function(){
    for (var i = 0; i < inPlay.length; i++){
        if(i === 4){
            $('#card5').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }
    }
    firstRound();
}

var firstRound = function(){
    youLose();
    player1Money = player1Money - 10;
    player2Money = player2Money - 10;
    pot += 20;
    $pot.text("Total Pot: $" + pot);
    $player1Score.text(player1Money);
    $player2Score.text(player2Money);

    var $console = $('#console');
    if (turnNum === 1){
        $prompt.text('Both Players Ante Up 10$....First round of bets starts now! Player One, How much do you want to bet?');

        var $bet = $('#bet-submit');
        var $firstBetBox = $('#first-bet-box');
        $console.append($firstBetBox);
        $console.append($bet);

        $bet.on('click', firstRound2);

    }else if (turnNum === 2){

        $prompt.text('Second round of bets starts now! Player One, How much do you want to bet?');

        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();
        currentBet = parseInt($firstBetInput);

        $bet.on('click', firstRound2);

    }else if (turnNum === 3){

        $prompt.text('Final round of bets starts now! Player One, How much do you want to bet?');
        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();

        currentBet = parseInt($firstBetInput);

        $bet.on('click', firstRound2);


    }
}

var firstRound2 = function(){
    youLose();
    var $betBox2 = $('#first-bet-box');
    var $console = $('#console');
    var $betInput2 = $betBox2.val();


    pot += parseInt($betInput2);
    currentBet = parseInt($betInput2);


    var $player1Score = $('#player1Score');

    totalBet += pot;


    player1Money = player1Money - currentBet;
    console.log("player 1 money is " + player1Money);
    $player1Score.text(player1Money);


    $console.children().detach('#first-bet-box');
    $console.children().detach('#bet-submit');


    $prompt.text('Player 1 has bet ' + currentBet);
    $prompt.append('<br>');
    alert('Genius bot is determing its move');
    $prompt.append('<br>');

    var choice = Math.floor(Math.random() * (10 - 1)) + 1;

    console.log(choice);

    if(choice > 0 && choice <=6){
        player2Calls();
    }else if(choice >6 && choice <=8){
        player2Folds();
    }else{
        player2Raises();
    }
    // var $call = $('<button>').text("CALL");
    // $prompt.append($call);
    // var $raise = $('<button>').text("RAISE");
    // $prompt.append($raise);
    // var $fold = $('<button>').text("FOLD");
    // $prompt.append($fold);

    // $call.on('click', player2Calls);
    // $raise.on('click', player2Raises);
    // $fold.on('click', player2Folds);
}
var player2Calls = function(){
    youLose();
    if (turnNum === 1){
        var $potBox = $('#pot');
        var $player2Score = $('#player2Score');
        player2Money = player2Money - currentBet;
        $player2Score.text(player2Money);

        alert('Player 2 calls... Now for the turn...');
        turnNum++;
        console.log(turnNum);
        console.log(pot);
        pot = currentBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);
        turn();
    }else if(turnNum === 2){
        var $player2Score = $('#player2Score');
        player2Money = player2Money - currentBet;
        $player2Score.text(player2Money);
        alert('Player 2 calls... Now for the river...')
        pot = pot + currentBet;
        var $potBox = $('#pot');
        $pot.text("Total Pot: $" + pot);

        turnNum++;
        console.log(turnNum);
        river();
    }else if (turnNum === 3){
        var $player2Score = $('#player2Score');
        player2Money = player2Money - currentBet;
        $player2Score.text(player2Money);
        pot = pot + currentBet;
        var $potBox = $('#pot');
        $pot.text("Total Pot: $" + pot);
        alert('Player 2 calls... Lets see who won ...')

        setHands();
        checkPlayer1();
        checkPlayer2();
        checkWinner();
    }
}
var player2Folds = function(){
    alert('Player 2 folds!!... Player One wins the hand!...');
    $prompt.text('Player One wins the pot!');
    var $player1Score = $('#player1Score');
    player1Money = player1Money + pot;
    console.log("current bet is " + currentBet);
    console.log("player 1 money is " + player1Money);

    console.log("player 1 money is " + player1Money);
    $player1Score.text(player1Money);



    nextRound();
}
var player2Raises = function(){

    youLose();
    var $console = $('#console');
    var $bet = $('#bet-submit');
    var $betBox = $('#first-bet-box');
    var $originalBetInput = $betBox.val();
    $prompt.text('Player 2: How much would you like to raise?');
    alert('Player 2 has raised the pot by 50!');
    // var $raiseInputBox = $('<input>').attr('id', 'raiseInputBox').attr('class', 'inputBox');
    // var $raiseButton = $('<button>').attr('id', 'raiseButton').attr('class', 'inputButton').text('RAISE');
    // var $raiseInput = $raiseInputBox.val();
    // var raiseAmount = raiseAmount + parseInt($raiseInput);
    // // <input id="bet-box" type="text"></input>
    // $console.append($raiseInputBox);
    // $console.append($raiseButton);
    //
    // console.log('current bet is ' + currentBet + 'and pot is ' + pot);
    //
    // $raiseButton.on('click', player1AfterRaise)

    player1AfterRaise();
}
var player1AfterRaise = function(){
    youLose();
    var $raiseInputBox = $('#raiseInputBox')
    var $raise = $raiseInputBox.val();
    raiseAmount = parseInt($raise);

    var $console = $('#console');
    // pot += raiseAmount;
    currentBet += 50;
    pot += currentBet;
    $console.children().detach('#raiseInputBox');
    $console.children().detach('#raiseButton');
    $prompt.text('Player 2 has raised the bet to ' + currentBet + '. Player 1, whats your move?');
    $prompt.append('<br>');
    var $call = $('<button>').text("CALL");
    $prompt.append($call);
    var $fold = $('<button>').text("FOLD");
    $prompt.append($fold);
    var $player2Score = $('#player2Score');

    $player2Score.text(player2Money);
    var $potBox = $('#pot');
    $pot.text("Total Pot: $" + pot);

    console.log('current bet is ' + currentBet + 'and pot is ' + pot);

    $call.on('click', player1Calls);
    $fold.on('click', player1Folds);
}

var player1Calls = function(){
    youLose();
    console.log("turn number is " + turnNum);
    if (turnNum === 3){
        var $player1Score = $('#player1Score');
        player1Money = player1Money - 50;
        $player1Score.text(player1Money);

        var $player2Score = $('#player2Score');
        $player2Money = player2Money - 50;
        $player2Score.text(player2Money);
        setTimeout(function () {
            $prompt.text('Player 1 has called. Now for the turn...');
        }, 1000);

        var $potBox = $('#pot');
        pot += 50;
        $pot.text("Total Pot: $" + pot);

        setHands();
        checkPlayer1();
        checkPlayer2();
        checkWinner();
    }else if (turnNum === 2) {
        var $player1Score = $('#player1Score');
        player1Money = player1Money - 50;
        $player1Score.text(player1Money);

        var $player2Score = $('#player2Score');
        player2Money = player2Money - currentBet;
        $player2Score.text(player2Money);
        $prompt.text('Player 1 has called. Now for the river...');
        pot += 50;
        var $potBox = $('#pot');
        $pot.text("Total Pot: $" + pot);
        turnNum++;
        river();
    }else if (turnNum === 1) {
        var $player1Score = $('#player1Score');
        player1Money = player1Money - 50;
        $player1Score.text(player1Money);

        var $player2Score = $('#player2Score');
        player2Money = player2Money - currentBet
        $player2Score.text(player2Money);
        $prompt.text('Player 1 has called. Now for the turn...');
        pot += 50;
        var $potBox = $('#pot');
        $pot.text("Total Pot: $" + pot);
        turnNum++;
        turn();
    }
}
var player1Folds = function(){
    $prompt.text('Player 1 has folded, Player 2 wins!');

    player2Money = player2Money - totalBet + pot;

    var $player2Score = $('#player2Score');
    $player2Score.text(player2Money);

    nextRound();
}
var setHands = function(){

    for(i = 0; i < 7; i++){
        player1HandValue.push(onTable[i].value);
        player1HandSuit.push(onTable[i].suit);
    }
    for(i = 0; i < 9; i++){
        if(i !== 5 && i !== 6){
            player2HandValue.push(onTable[i].value);
            player2HandSuit.push(onTable[i].suit);
        }
    }

}
var nextRound = function(){
    youLose();
    inPlay.splice(0,inPlay.length);
    onTable.splice(0,onTable.length);
    player1HandValue.splice(0,player1HandValue.length);
    player2HandValue.splice(0,player2HandValue.length);
    player1HandSuit.splice(0,player1HandSuit.length);
    player2HandSuit.splice(0,player2HandSuit.length);
    inOrder.splice(0,inPlay.length);

    onTable = [];

    onTable[0] = card1;
    onTable[1] = card2;
    onTable[2] = card3;
    onTable[3] = card4;
    onTable[4] = card5;
    onTable[5] = player1Card1;
    onTable[6] = player1Card2;
    onTable[7] = player2Card1;
    onTable[8] = player2Card2;

    pot = 0;
    totalBet = 0;
    aiseAmount = 0;
    turnNum = 1;

    player1Result = 0;
    player2Result = 0;


    var $console = $('#console');
    console.log("removing play next round button");
    $console.children().detach('.inputButton');
    var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
    var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
    $console.append($firstBetBox);
    $console.append($bet);


    shuffle();
    findSuit();
    findValues();
    $('#card4').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    $('#card5').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    startGame();

}
var youLose = function(){
    if(player1Money <= 0){
        alert("Player 1 lost all their money and loses.")
        alert("Computer wins!!!!")
        location.reload();
    }else if(player2Money <= 0){
        alert("Player 2 lost all their money and loses.")
        alert("Player 1 wins!!!!")
        location.reload();
    }
}
var checkPlayer1 = function(){
    player1HandValue.sort(function(a, b){return a-b});
    player1HandSuit.sort();
    console.log("player 1 hand value is " + player1HandValue);
    //check for a pair
    for(i = 0; i < player1HandValue.length; i++){
        if(player1HandValue[i]=== player1HandValue[i+1]){
            console.log("found a pair of " + player1HandValue[i] + "s.");
            tiebreakerPairPlayer1 = player1HandValue[i];
            pairs1++;
            console.log("the amount of pairs is " + pairs1);
            if(pairs1 === 1){
                player1Result = 1;
            }else if(pairs1 === 2){
                player1Result = 2;
            }

        }
    }
    //check for a three of a kind
    for(i = 0; i < player1HandValue.length; i++){
        if(player1HandValue[i]=== player1HandValue[i+1] && player1HandValue[i] === player1HandValue[i+2]){
            console.log("found a three of a kind of " + player1HandValue[i] + "s.");
            player1Result = 3;
        }
    }
    //check for a straight
    for(i = 0; i < player1HandValue.length; i++){
        if(player1HandValue[i]+ 1 === player1HandValue[i+1] && player1HandValue[i]+2 === player1HandValue[i+2] && player1HandValue[i]+3 === player1HandValue[i+3] && player1HandValue[i]+4 === player1HandValue[i+4]){
            console.log("found a straight");
            player1Result = 4;
        }
    }
    //check for a full house
    for(i = 0; i < player1HandValue.length; i++){
        if(player1HandValue[i]=== player1HandValue[i+1] && player1HandValue[i] === player1HandValue[i+2]){
            player1HandValue.splice(i,3);
            for(i = 0; i < player1HandValue.length; i++){
                if(player1HandValue[i]=== player1HandValue[i+1]){
                    console.log("found a full house");
                    player1Result = 5;
                }
            }
        }
    }
    //check for a flush
    for(i = 0; i < player1HandSuit.length; i++){
        if(player1HandSuit[i] === player1HandSuit[i+1] && player1HandSuit[i] === player1HandSuit[i+2] && player1HandSuit[i] === player1HandSuit[i+3] && player1HandSuit[i] === player1HandSuit[i+4]){
            console.log("found a flush");
            player1Result = 6;
        }
    }
}
var checkPlayer2 = function(){
    player2HandValue.sort(function(a, b){return a-b});
    player2HandSuit.sort();
    console.log("player 2 hand value is " + player2HandValue);

    //check for a pair
    for(i = 0; i < player2HandValue.length; i++){
        if(player2HandValue[i]=== player2HandValue[i+1]){
            console.log("found a pair of " + player2HandValue[i] + "s.");
            tiebreakerPairPlayer2 = player2HandValue[i];
            pairs2++;
            if(pairs2 === 1){
                player2Result = 1;
            }else if(pairs2 === 2){
                player2Result = 2;
            }
        }
    }
    //check for a three of a kind
    for(i = 0; i < player2HandValue.length; i++){
        if(player2HandValue[i]=== player2HandValue[i+1] && player2HandValue[i] === player2HandValue[i+2]){
            console.log("found a three of a kind of " + player2HandValue[i] + "s.");
            player2Result = 3;
        }
    }
    //check for a straight
    for(i = 0; i < player2HandValue.length; i++){
        if(player2HandValue[i]+ 1 === player2HandValue[i+1] && player2HandValue[i]+2 === player2HandValue[i+2] && player2HandValue[i]+3 === player2HandValue[i+3] && player2HandValue[i]+4 === player2HandValue[i+4]){
            console.log("found a straight");
            player2Result = 4;
        }
    }
    //check for a full house
    for(i = 0; i < player2HandValue.length; i++){
        if(player2HandValue[i]=== player2HandValue[i+1] && player2HandValue[i] === player2HandValue[i+2]){
            player2HandValue.splice(i,3);
            for(i = 0; i < player2HandValue.length; i++){
                if(player2HandValue[i]=== player2HandValue[i+1]){
                    console.log("found a full house");
                    player2Result = 5;
                }
            }
        }
    }
    //check for a flush
    for(i = 0; i < player2HandSuit.length; i++){
        if(player2HandSuit[i] === player2HandSuit[i+1] && player2HandSuit[i] === player2HandSuit[i+2] && player2HandSuit[i] === player2HandSuit[i+3] && player2HandSuit[i] === player2HandSuit[i+4]){
            console.log("found a flush");
            player2Result = 6;
        }
    }
}

var checkWinner = function(){
    $pot.text("pot is at $0");
    for (var i = 0; i < inPlay.length; i++){
        if(i === 7){
            $('#player2Card1').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 8){
            $('#player2Card2').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }
    }
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    var $console = $('#console');

    console.log("player 1 result is " + player1Result);
    console.log("player2 result is " + player2Result);

    if(player1Result > player2Result){

        console.log("Player 1 Wins");
        $prompt.text('Player 1 has Won the hand');
        player1Money = player1Money + pot;
        $player1Score.text(player1Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)

    }else if(player2Result > player1Result){
        console.log("Player 2 has Won the hand");
        $prompt.text('Player 2 has won the hand');
        player2Money = player2Money + pot;
        $player2Score.text(player2Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)

    }else if (tiebreakerPairPlayer1 > tiebreakerPairPlayer2){
        console.log("Player 1 Wins");
        $prompt.text('Player 1 has Won the hand');
        player1Money = player1Money + pot;
        $player1Score.text(player1Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)
    }else if (tiebreakerPairPlayer2 > tiebreakerPairPlayer1){
        console.log("Player 2 has Won the hand");
        $prompt.text('Player 2 has won the hand');
        player2Money = player2Money + pot;
        $player2Score.text(player2Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)
    }else if(player1HandValue[6] > player2HandValue[6]){
        $prompt.text('Player 1 has won the hand');
        player1Money = player1Money + pot;
        player1Score.text(player1Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)
    }else if(player2HandValue[6] > player1HandValue[6]){
        $prompt.text('Player 2 has won the hand');
        player2Money = player2Money + pot;
        $player2Score.text(player2Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)
    }else{
        console.log("Split the pot");
        $prompt.text('Split the pot');
        console.log("player 1 originally had" + player1Money);
        player1Money = player1Money + (pot/2);
        console.log("player 1 now has" + player1Money + " because of the split pot amount of " + (pot/2));


        console.log("player 2 originally had" + player2Money);
        player2Money = player2Money + (pot/2);
        console.log("player 2 now has" + player2Money + " because of the split pot amount of " + (pot/2));

        $player1Score.text(player1Money);
        $player2Score.text(player2Money);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)

    }
}



shuffle();
findSuit();
findValues();
$start.on('click', startGame)


}); // end window onload

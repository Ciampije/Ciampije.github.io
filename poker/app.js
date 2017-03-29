console.log("js working");
$(function() {


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

var pot;

var player1Result;
var player2Result;

onTable[0] = card1;
onTable[1] = card2;
onTable[2] = card3;
onTable[3] = card4;
onTable[4] = card5;
onTable[5] = player1Card1;
onTable[6] = player1Card2;
onTable[7] = player2Card1;
onTable[8] = player2Card2;

var player1HandValue = [];
var player2HandValue = [];
var player1HandSuit = [];
var player2HandSuit = [];

var inOrder = [];

var pot = 0;
var totalBet = 0;
var raiseAmount = 0;
var turnNum = 1;

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
var $river = $('#river');
var $turn = $('#turn');

var shuffle = function(){
    var til = 9;
    for (var i = 0; i < til; i++){
        var cardNum = Math.floor(Math.random() * (52 - 1)) + 1;
        inPlay.push(cardNum);
        for(j = 0; j < inPlay.length; j++){
            inPlay.sort(function(a, b){return a-b});

            if(inPlay[j] === inPlay[j+1]){
                console.log("repeat detected");
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
        }else if(i === 7){
            $('#player2Card1').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
        }else if(i === 8){
            $('#player2Card2').css({'background-image': 'url(images/' + onTable[i].value + '_of_' + onTable[i].suit + '.png)'})
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
    var $console = $('#console');
    if (turnNum === 1){
        $prompt.text('First round of bets starts now! Player One, How much do you want to bet?');

        var $bet = $('#bet-submit');
        var $firstBetBox = $('#first-bet-box');
        $console.append($firstBetBox);
        $console.append($bet);

        $bet.on('click', firstRound2);

        // console.log(pot);
        // console.log("total bet is" + totalBet);

    }else if (turnNum === 2){

        $prompt.text('Second round of bets starts now! Player One, How much do you want to bet?');
        console.log("total bet is " + totalBet);
        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();
        pot = pot + parseInt($firstBetInput);

        console.log("current bet is " + pot);
        console.log("total bet is " + totalBet);
        $bet.on('click', firstRound2);


    }else if (turnNum === 3){

        $prompt.text('Final round of bets starts now! Player One, How much do you want to bet?');
        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();
        pot = pot + parseInt($firstBetInput);
        $bet.on('click', firstRound2);

        console.log(pot);
        console.log("total bet is " + totalBet);

    }
}

var firstRound2 = function(){
    var $betBox2 = $('#first-bet-box');
    var $console = $('#console');
    var $betInput2 = $betBox2.val();


    pot = parseInt($betInput2);
    currentBet = parseInt($betInput2);

    var $player1Score = $('#player1Score');
    console.log("total bet is " + totalBet);
    totalBet += pot;
    console.log("current bet is " + pot);
    console.log("total bet is " + totalBet);
    player1Money = player1Money - currentBet;
    console.log("player 1 money is " + player1Money);
    $player1Score.text(player1Money);


    $console.children().detach('#first-bet-box');
    $console.children().detach('#bet-submit');


    $prompt.text('Player 1 has bet ' + pot);
    $prompt.append('<br>');
    $prompt.append('Player 2 what would you like to do?');
    $prompt.append('<br>');
    var $call = $('<button>').text("CALL");
    $prompt.append($call);
    var $raise = $('<button>').text("RAISE");
    $prompt.append($raise);
    var $fold = $('<button>').text("FOLD");
    $prompt.append($fold);

    console.log(pot);


    $call.on('click', player2Calls);
    $raise.on('click', player2Raises);
    $fold.on('click', player2Folds);
}
var player2Calls = function(){
    if (turnNum === 1){
        var $potBox = $('#pot');
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        $prompt.text('Player 2 calls... Now for the turn...')
        turnNum++;
        console.log(turnNum);
        console.log(pot);
        pot = totalBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);
        turn();
    }else if(turnNum === 2){
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        $prompt.text('Player 2 calls... Now for the river...')
        pot = totalBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);

        turnNum++;
        console.log(turnNum);
        river();
    }else if (turnNum === 3){
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        pot = totalBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);

        setHands();
        checkPlayer1();
        checkPlayer2();
        checkWinner();
    }
}
var player2Folds = function(){
    $prompt.text('Player One wins the pot!');
    var $player1Score = $('#player1Score');
    console.log("current bet is " + currentBet);
    console.log("player 1 money is " + player1Money);
    player1Money = player1Money + currentBet;
    console.log("player 1 money is " + player1Money);
    $player1Score.text(player1Money);



    nextRound();
}
var player2Raises = function(){
    console.log(pot);
    var $console = $('#console');
    var $bet = $('#bet-submit');
    var $betBox = $('#first-bet-box');
    var $originalBetInput = $betBox.val();
    $prompt.text('Player 2: How much would you like to raise?');
    var $raiseInputBox = $('<input>').attr('id', 'raiseInputBox').attr('class', 'inputBox');
    var $raiseButton = $('<button>').attr('id', 'raiseButton').attr('class', 'inputButton').text('RAISE');
    var $raiseInput = $raiseInputBox.val();
    var raiseAmount = raiseAmount + parseInt($raiseInput);
    // <input id="bet-box" type="text"></input>
    $console.append($raiseInputBox);
    $console.append($raiseButton);

    $raiseButton.on('click', player1AfterRaise)
}
var player1AfterRaise = function(){
    var $raiseInputBox = $('#raiseInputBox')
    var $raise = $raiseInputBox.val();
    raiseAmount = parseInt($raise);
    console.log(raiseAmount);
    console.log(pot);
    var $console = $('#console');
    pot += raiseAmount;
    $console.children().detach('#raiseInputBox');
    $console.children().detach('#raiseButton');
    $prompt.text('Player 2 has raised the bet to ' + pot + '. Player 1, whats your move?');
    $prompt.append('<br>');
    var $call = $('<button>').text("CALL");
    $prompt.append($call);
    var $fold = $('<button>').text("FOLD");
    $prompt.append($fold);
    totalBet += raiseAmount;
    var $player2Score = $('#player2Score');
    $player2Score.text(player2Money - pot);
    console.log("total bet is " + totalBet);
    pot = totalBet*2;
    var $potBox = $('#pot');
    $pot.text("pot is at $" + pot);

    turnNum++;

    $call.on('click', player1Calls);
    $fold.on('click', player1Folds);
}

var player1Calls = function(){
    console.log("turn number is " + turnNum);
    if (turnNum === 3){
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        pot = totalBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);

        setHands();
        checkPlayer1();
        checkPlayer2();
        checkWinner();
    }else {
        var $player1Score = $('#player1Score');
        $player1Score.text(player1Money - totalBet);

        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        $prompt.text('Player 1 has called. Now for the turn...');
        pot = totalBet*2;
        var $potBox = $('#pot');
        $pot.text("pot is at $" + pot);
        turn();
    }
}
var player1Folds = function(){
    $prompt.text('Player 1 has folded, Player 2 wins!');

    player2Money = player2Money - totalBet + pot;

    var $player2Score = $('#player2Score');
    $player2Score.append(player2Money);

    nextRound();
}
var setHands = function(){
    console.log(onTable);
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


    var $console = $('#console');
    console.log("removing play next round button");
    $console.children().detach('.inputButton');
    var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
    var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
    $console.append($firstBetBox);
    $console.append($bet);

    $('#card4').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    $('#card5').css({'background-image': 'url("http://www.jimknapp.com/Cards/Bicycle_files/image160.jpg")'})
    shuffle();
    findSuit();
    findValues();
    startGame();

}
var checkPlayer1 = function(){
    player1HandValue.sort(function(a, b){return a-b});
    player1HandSuit.sort();
    var pairs;
    //check for a pair
    for(i = 0; i < player1HandValue.length; i++){
        if(player1HandValue[i]=== player1HandValue[i+1]){
            console.log("found a pair of " + player1HandValue[i] + "s.");
            pairs++;
            player1Result = 2;
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
}
var checkPlayer2 = function(){
    player2HandValue.sort(function(a, b){return a-b});
    player2HandSuit.sort();
    var pairs;
    //check for a pair
    for(i = 0; i < player2HandValue.length; i++){
        if(player2HandValue[i]=== player2HandValue[i+1]){
            console.log("found a pair of " + player2HandValue[i] + "s.");
            pairs++;
            player2Result = 2;
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
    for(i = 0; i < player1HandValue.length; i++){
        if(player2HandValue[i]+ 1 === player2HandValue[i+1] && player2HandValue[i]+2 === player2HandValue[i+2] && player2HandValue[i]+3 === player2HandValue[i+3] && player2HandValue[i]+4 === player2HandValue[i+4]){
            console.log("found a straight");
            player2Result = 4;
        }
    }
}

var checkWinner = function(){
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    var $console = $('#console');

    if(player1Result > player2Result){
        console.log("Player 1 Wins");
        $prompt.text('Player 1 has Won the hand');
        $player1Score.text(player1Money - totalBet + pot);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        player1Money = player1Money - totalBet + pot;
        $console.append($again);
        $again.on('click', nextRound)

    }else if(player2Result > player1Result){
        console.log("Player 2 has Won the hand");
        $prompt.text('Player 2 has won the hand');
        $player2Score.text(player2Money - totalBet + pot );
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        player2Money = player2Money - totalBet + pot;
        $console.append($again);
        $again.on('click', nextRound)

    }else{
        console.log("Split the pot");
        $prompt.text('Split the pot');
        $player1Score.text(player1Money - totalBet + (pot/2) );
        $player2Score.text(player2Money - totalBet + (pot/2) );
        player1Money = player1Money - totalBet + (pot/2);
        player1Money = player1Money - totalBet + (pot/2);
        var $again = $('<button>').addClass('inputButton').text('Play Next Round');
        $console.append($again);
        $again.on('click', nextRound)

    }
}

shuffle();
findSuit();
findValues();
$start.on('click', startGame)
$turn.on('click', turn)
$river.on('click', river)


}); // end window onload

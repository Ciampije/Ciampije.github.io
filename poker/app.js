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

onTable[0] = card1;
onTable[1] = card2;
onTable[2] = card3;
onTable[3] = card4;
onTable[4] = card5;
onTable[5] = player1Card1;
onTable[6] = player1Card2;
onTable[7] = player2Card1;
onTable[8] = player2Card2;

// onTable[0].value = 3;

// console.log(onTable);

var player1Money = 1000;
var player2Money = 1000;

var $player1Score = $('#player1Score');
$player1Score.append(player1Money);

var $player2Score = $('#player2Score');
$player2Score.append(player2Money);

var $prompt = $('#prompt');

var $start = $('#start');
var $river = $('#river');
var $turn = $('#turn');

var shuffle = function(){
    for (var i = 0; i < 9; i++){
        var cardNum = Math.floor(Math.random() * (52 - 1)) + 1;
        inPlay.push(cardNum);
        // if(i>=0 && i<=4){
        //     onTable.push(cardNum);
        // }else if(i>4 && i<=6){
        //     player1Cards.push(cardNum);
        // }else if (i>6){
        //     player2Cards.push(cardNum);
        // }
    }
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
        var mod = inPlay[i]%4;
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
    $prompt.text('Welcome to Texas Hold Em Poker!')
    for (var i = 0; i < inPlay.length; i++){
        // CARD 1 ================================
        if(i === 0 && inPlay[i] === 1){
            $('#card1').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 2){
            $('#card1').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 3){
            $('#card1').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 4){
            $('#card1').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 5){
            $('#card1').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 6){
            $('#card1').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 7){
            $('#card1').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 8){
            $('#card1').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 9){
            $('#card1').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 10){
            $('#card1').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 11){
            $('#card1').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 12){
            $('#card1').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 13){
            $('#card1').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 14){
            $('#card1').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 15){
            $('#card1').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 16){
            $('#card1').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 17){
            $('#card1').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 18){
            $('#card1').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 19){
            $('#card1').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 20){
            $('#card1').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 21){
            $('#card1').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 22){
            $('#card1').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 23){
            $('#card1').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 24){
            $('#card1').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 25){
            $('#card1').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 26){
            $('#card1').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 27){
            $('#card1').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 28){
            $('#card1').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 29){
            $('#card1').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 30){
            $('#card1').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 31){
            $('#card1').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 32){
            $('#card1').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 33){
            $('#card1').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 34){
            $('#card1').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 35){
            $('#card1').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 36){
            $('#card1').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 0 && inPlay[i] === 37){
            $('#card1').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 0 && inPlay[i] === 38){
            $('#card1').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 0 && inPlay[i] === 39){
            $('#card1').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 0 && inPlay[i] === 40){
            $('#card1').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 0 && inPlay[i] === 41){
            $('#card1').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 0 && inPlay[i] === 42){
            $('#card1').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 0 && inPlay[i] === 43){
            $('#card1').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 0 && inPlay[i] === 44){
            $('#card1').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 0 && inPlay[i] === 45){
            $('#card1').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 0 && inPlay[i] === 46){
            $('#card1').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 0 && inPlay[i] === 47){
            $('#card1').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 0 && inPlay[i] === 48){
            $('#card1').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 0 && inPlay[i] === 49){
            $('#card1').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 0 && inPlay[i] === 50){
            $('#card1').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 0 && inPlay[i] === 51){
            $('#card1').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 0 && inPlay[i] === 52){
            $('#card1').css({'background-image': 'url(images/ace_of_spades.png)'})
        }

        // CARD 2 ===============================================


        else if(i === 1 && inPlay[i] === 1){
            $('#card2').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 2){
            $('#card2').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 3){
            $('#card2').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 4){
            $('#card2').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 5){
            $('#card2').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 6){
            $('#card2').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 7){
            $('#card2').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 8){
            $('#card2').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 9){
            $('#card2').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 10){
            $('#card2').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 11){
            $('#card2').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 12){
            $('#card2').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 13){
            $('#card2').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 14){
            $('#card2').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 15){
            $('#card2').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 16){
            $('#card2').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 17){
            $('#card2').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 18){
            $('#card2').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 19){
            $('#card2').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 20){
            $('#card2').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 21){
            $('#card2').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 22){
            $('#card2').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 23){
            $('#card2').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 24){
            $('#card2').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 25){
            $('#card2').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 26){
            $('#card2').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 27){
            $('#card2').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 28){
            $('#card2').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 29){
            $('#card2').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 30){
            $('#card2').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 31){
            $('#card2').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 32){
            $('#card2').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 33){
            $('#card2').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 34){
            $('#card2').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 35){
            $('#card2').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 36){
            $('#card2').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 1 && inPlay[i] === 37){
            $('#card2').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 1 && inPlay[i] === 38){
            $('#card2').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 1 && inPlay[i] === 39){
            $('#card2').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 1 && inPlay[i] === 40){
            $('#card2').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 1 && inPlay[i] === 41){
            $('#card2').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 1 && inPlay[i] === 42){
            $('#card2').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 1 && inPlay[i] === 43){
            $('#card2').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 1 && inPlay[i] === 44){
            $('#card2').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 1 && inPlay[i] === 45){
            $('#card2').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 1 && inPlay[i] === 46){
            $('#card2').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 1 && inPlay[i] === 47){
            $('#card2').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 1 && inPlay[i] === 48){
            $('#card2').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 1 && inPlay[i] === 49){
            $('#card2').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 1 && inPlay[i] === 50){
            $('#card2').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 1 && inPlay[i] === 51){
            $('#card2').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 1 && inPlay[i] === 52){
            $('#card2').css({'background-image': 'url(images/ace_of_spades.png)'})
        }

        // CARD 3 ==================================================

        else if(i === 2 && inPlay[i] === 1){
            $('#card3').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 2){
            $('#card3').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 3){
            $('#card3').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 4){
            $('#card3').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 5){
            $('#card3').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 6){
            $('#card3').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 7){
            $('#card3').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 8){
            $('#card3').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 9){
            $('#card3').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 10){
            $('#card3').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 11){
            $('#card3').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 12){
            $('#card3').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 13){
            $('#card3').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 14){
            $('#card3').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 15){
            $('#card3').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 16){
            $('#card3').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 17){
            $('#card3').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 18){
            $('#card3').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 19){
            $('#card3').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 20){
            $('#card3').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 21){
            $('#card3').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 22){
            $('#card3').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 23){
            $('#card3').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 24){
            $('#card3').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 25){
            $('#card3').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 26){
            $('#card3').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 27){
            $('#card3').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 28){
            $('#card3').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 29){
            $('#card3').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 30){
            $('#card3').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 31){
            $('#card3').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 32){
            $('#card3').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 33){
            $('#card3').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 34){
            $('#card3').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 35){
            $('#card3').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 36){
            $('#card3').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 2 && inPlay[i] === 37){
            $('#card3').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 2 && inPlay[i] === 38){
            $('#card3').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 2 && inPlay[i] === 39){
            $('#card3').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 2 && inPlay[i] === 40){
            $('#card3').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 2 && inPlay[i] === 41){
            $('#card3').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 2 && inPlay[i] === 42){
            $('#card3').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 2 && inPlay[i] === 43){
            $('#card3').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 2 && inPlay[i] === 44){
            $('#card3').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 2 && inPlay[i] === 45){
            $('#card3').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 2 && inPlay[i] === 46){
            $('#card3').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 2 && inPlay[i] === 47){
            $('#card3').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 2 && inPlay[i] === 48){
            $('#card3').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 2 && inPlay[i] === 49){
            $('#card3').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 2 && inPlay[i] === 50){
            $('#card3').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 2 && inPlay[i] === 51){
            $('#card3').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 2 && inPlay[i] === 52){
            $('#card3').css({'background-image': 'url(images/ace_of_spades.png)'})
        }

        // PLAYER CARD 1 ====================================================

        else if(i === 5 && inPlay[i] === 1){
            $('#playerCard1').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 2){
            $('#playerCard1').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 3){
            $('#playerCard1').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 4){
            $('#playerCard1').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 5){
            $('#playerCard1').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 6){
            $('#playerCard1').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 7){
            $('#playerCard1').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 8){
            $('#playerCard1').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 9){
            $('#playerCard1').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 10){
            $('#playerCard1').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 11){
            $('#playerCard1').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 12){
            $('#playerCard1').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 13){
            $('#playerCard1').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 14){
            $('#playerCard1').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 15){
            $('#playerCard1').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 16){
            $('#playerCard1').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 17){
            $('#playerCard1').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 18){
            $('#playerCard1').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 19){
            $('#playerCard1').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 20){
            $('#playerCard1').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 21){
            $('#playerCard1').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 22){
            $('#playerCard1').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 23){
            $('#playerCard1').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 24){
            $('#playerCard1').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 25){
            $('#playerCard1').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 26){
            $('#playerCard1').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 27){
            $('#playerCard1').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 28){
            $('#playerCard1').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 29){
            $('#playerCard1').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 30){
            $('#playerCard1').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 31){
            $('#playerCard1').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 32){
            $('#playerCard1').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 33){
            $('#playerCard1').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 34){
            $('#playerCard1').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 35){
            $('#playerCard1').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 36){
            $('#playerCard1').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 5 && inPlay[i] === 37){
            $('#playerCard1').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 5 && inPlay[i] === 38){
            $('#playerCard1').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 5 && inPlay[i] === 39){
            $('#playerCard1').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 5 && inPlay[i] === 40){
            $('#playerCard1').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 5 && inPlay[i] === 41){
            $('#playerCard1').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 5 && inPlay[i] === 42){
            $('#playerCard1').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 5 && inPlay[i] === 43){
            $('#playerCard1').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 5 && inPlay[i] === 44){
            $('#playerCard1').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 5 && inPlay[i] === 45){
            $('#playerCard1').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 5 && inPlay[i] === 46){
            $('#playerCard1').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 5 && inPlay[i] === 47){
            $('#playerCard1').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 5 && inPlay[i] === 48){
            $('#playerCard1').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 5 && inPlay[i] === 49){
            $('#playerCard1').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 5 && inPlay[i] === 50){
            $('#playerCard1').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 5 && inPlay[i] === 51){
            $('#playerCard1').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 5 && inPlay[i] === 52){
            $('#playerCard1').css({'background-image': 'url(images/ace_of_spades.png)'})
        }


        // CARD PLAYER CARD 2 ====================================================

        else if(i === 6 && inPlay[i] === 1){
            $('#playerCard2').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 2){
            $('#playerCard2').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 3){
            $('#playerCard2').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 4){
            $('#playerCard2').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 5){
            $('#playerCard2').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 6){
            $('#playerCard2').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 7){
            $('#playerCard2').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 8){
            $('#playerCard2').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 9){
            $('#playerCard2').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 10){
            $('#playerCard2').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 11){
            $('#playerCard2').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 12){
            $('#playerCard2').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 13){
            $('#playerCard2').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 14){
            $('#playerCard2').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 15){
            $('#playerCard2').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 16){
            $('#playerCard2').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 17){
            $('#playerCard2').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 18){
            $('#playerCard2').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 19){
            $('#playerCard2').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 20){
            $('#playerCard2').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 21){
            $('#playerCard2').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 22){
            $('#playerCard2').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 23){
            $('#playerCard2').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 24){
            $('#playerCard2').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 25){
            $('#playerCard2').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 26){
            $('#playerCard2').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 27){
            $('#playerCard2').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 28){
            $('#playerCard2').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 29){
            $('#playerCard2').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 30){
            $('#playerCard2').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 31){
            $('#playerCard2').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 32){
            $('#playerCard2').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 33){
            $('#playerCard2').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 34){
            $('#playerCard2').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 35){
            $('#playerCard2').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 36){
            $('#playerCard2').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 6 && inPlay[i] === 37){
            $('#playerCard2').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 6 && inPlay[i] === 38){
            $('#playerCard2').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 6 && inPlay[i] === 39){
            $('#playerCard2').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 6 && inPlay[i] === 40){
            $('#playerCard2').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 6 && inPlay[i] === 41){
            $('#playerCard2').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 6 && inPlay[i] === 42){
            $('#playerCard2').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 6 && inPlay[i] === 43){
            $('#playerCard2').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 6 && inPlay[i] === 44){
            $('#playerCard2').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 6 && inPlay[i] === 45){
            $('#playerCard2').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 6 && inPlay[i] === 46){
            $('#playerCard2').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 6 && inPlay[i] === 47){
            $('#playerCard2').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 6 && inPlay[i] === 48){
            $('#playerCard2').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 6 && inPlay[i] === 49){
            $('#playerCard2').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 6 && inPlay[i] === 50){
            $('#playerCard2').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 6 && inPlay[i] === 51){
            $('#playerCard2').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 6 && inPlay[i] === 52){
            $('#playerCard2').css({'background-image': 'url(images/ace_of_spades.png)'})
        }


        // CARD PLAYER 2 CARD 1 ===========================================

        else if(i === 7 && inPlay[i] === 1){
            $('#player2Card1').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 2){
            $('#player2Card1').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 3){
            $('#player2Card1').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 4){
            $('#player2Card1').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 5){
            $('#player2Card1').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 6){
            $('#player2Card1').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 7){
            $('#player2Card1').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 8){
            $('#player2Card1').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 9){
            $('#player2Card1').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 10){
            $('#player2Card1').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 11){
            $('#player2Card1').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 12){
            $('#player2Card1').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 13){
            $('#player2Card1').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 14){
            $('#player2Card1').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 15){
            $('#player2Card1').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 16){
            $('#player2Card1').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 17){
            $('#player2Card1').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 18){
            $('#player2Card1').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 19){
            $('#player2Card1').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 20){
            $('#player2Card1').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 21){
            $('#player2Card1').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 22){
            $('#player2Card1').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 23){
            $('#player2Card1').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 24){
            $('#player2Card1').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 25){
            $('#player2Card1').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 26){
            $('#player2Card1').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 27){
            $('#player2Card1').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 28){
            $('#player2Card1').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 29){
            $('#player2Card1').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 30){
            $('#player2Card1').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 31){
            $('#player2Card1').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 32){
            $('#player2Card1').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 33){
            $('#player2Card1').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 34){
            $('#player2Card1').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 35){
            $('#player2Card1').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 36){
            $('#player2Card1').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 7 && inPlay[i] === 37){
            $('#player2Card1').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 7 && inPlay[i] === 38){
            $('#player2Card1').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 7 && inPlay[i] === 39){
            $('#player2Card1').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 7 && inPlay[i] === 40){
            $('#player2Card1').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 7 && inPlay[i] === 41){
            $('#player2Card1').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 7 && inPlay[i] === 42){
            $('#player2Card1').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 7 && inPlay[i] === 43){
            $('#player2Card1').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 7 && inPlay[i] === 44){
            $('#player2Card1').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 7 && inPlay[i] === 45){
            $('#player2Card1').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 7 && inPlay[i] === 46){
            $('#player2Card1').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 7 && inPlay[i] === 47){
            $('#player2Card1').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 7 && inPlay[i] === 48){
            $('#player2Card1').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 7 && inPlay[i] === 49){
            $('#player2Card1').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 7 && inPlay[i] === 50){
            $('#player2Card1').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 7 && inPlay[i] === 51){
            $('#player2Card1').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 7 && inPlay[i] === 52){
            $('#player2Card1').css({'background-image': 'url(images/ace_of_spades.png)'})
        }


        // CARD PLAYER 2 CARD 2 ===========================================

        else if(i === 8 && inPlay[i] === 1){
            $('#player2Card2').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 2){
            $('#player2Card2').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 3){
            $('#player2Card2').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 4){
            $('#player2Card2').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 5){
            $('#player2Card2').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 6){
            $('#player2Card2').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 7){
            $('#player2Card2').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 8){
            $('#player2Card2').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 9){
            $('#player2Card2').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 10){
            $('#player2Card2').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 11){
            $('#player2Card2').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 12){
            $('#player2Card2').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 13){
            $('#player2Card2').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 14){
            $('#player2Card2').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 15){
            $('#player2Card2').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 16){
            $('#player2Card2').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 18){
            $('#player2Card2').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 18){
            $('#player2Card2').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 19){
            $('#player2Card2').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 20){
            $('#player2Card2').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 21){
            $('#player2Card2').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 22){
            $('#player2Card2').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 23){
            $('#player2Card2').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 24){
            $('#player2Card2').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 25){
            $('#player2Card2').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 26){
            $('#player2Card2').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 28){
            $('#player2Card2').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 28){
            $('#player2Card2').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 29){
            $('#player2Card2').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 30){
            $('#player2Card2').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 31){
            $('#player2Card2').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 32){
            $('#player2Card2').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 33){
            $('#player2Card2').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 34){
            $('#player2Card2').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 35){
            $('#player2Card2').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 36){
            $('#player2Card2').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 8 && inPlay[i] === 38){
            $('#player2Card2').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 8 && inPlay[i] === 38){
            $('#player2Card2').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 8 && inPlay[i] === 39){
            $('#player2Card2').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 8 && inPlay[i] === 40){
            $('#player2Card2').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 8 && inPlay[i] === 41){
            $('#player2Card2').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 8 && inPlay[i] === 42){
            $('#player2Card2').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 8 && inPlay[i] === 43){
            $('#player2Card2').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 8 && inPlay[i] === 44){
            $('#player2Card2').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 8 && inPlay[i] === 45){
            $('#player2Card2').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 8 && inPlay[i] === 46){
            $('#player2Card2').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 8 && inPlay[i] === 48){
            $('#player2Card2').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 8 && inPlay[i] === 48){
            $('#player2Card2').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 8 && inPlay[i] === 49){
            $('#player2Card2').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 8 && inPlay[i] === 50){
            $('#player2Card2').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 8 && inPlay[i] === 51){
            $('#player2Card2').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 8 && inPlay[i] === 52){
            $('#player2Card2').css({'background-image': 'url(images/ace_of_spades.png)'})
        }
    }
    firstRound();
}
var turn = function(){
    for (var i = 0; i < inPlay.length; i++){
        // console.log(inPlay[i]);

        // CARD 4 ============================================================

        if(i === 3 && inPlay[i] === 1){
            $('#card4').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 2){
            $('#card4').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 3){
            $('#card4').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 4){
            $('#card4').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 5){
            $('#card4').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 6){
            $('#card4').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 7){
            $('#card4').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 8){
            $('#card4').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 9){
            $('#card4').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 10){
            $('#card4').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 11){
            $('#card4').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 12){
            $('#card4').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 13){
            $('#card4').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 14){
            $('#card4').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 15){
            $('#card4').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 16){
            $('#card4').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 17){
            $('#card4').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 18){
            $('#card4').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 19){
            $('#card4').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 20){
            $('#card4').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 21){
            $('#card4').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 22){
            $('#card4').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 23){
            $('#card4').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 24){
            $('#card4').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 25){
            $('#card4').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 26){
            $('#card4').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 27){
            $('#card4').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 28){
            $('#card4').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 29){
            $('#card4').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 30){
            $('#card4').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 31){
            $('#card4').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 32){
            $('#card4').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 33){
            $('#card4').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 34){
            $('#card4').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 35){
            $('#card4').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 36){
            $('#card4').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 3 && inPlay[i] === 37){
            $('#card4').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 3 && inPlay[i] === 38){
            $('#card4').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 3 && inPlay[i] === 39){
            $('#card4').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 3 && inPlay[i] === 40){
            $('#card4').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 3 && inPlay[i] === 41){
            $('#card4').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 3 && inPlay[i] === 42){
            $('#card4').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 3 && inPlay[i] === 43){
            $('#card4').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 3 && inPlay[i] === 44){
            $('#card4').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 3 && inPlay[i] === 45){
            $('#card4').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 3 && inPlay[i] === 46){
            $('#card4').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 3 && inPlay[i] === 47){
            $('#card4').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 3 && inPlay[i] === 48){
            $('#card4').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 3 && inPlay[i] === 49){
            $('#card4').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 3 && inPlay[i] === 50){
            $('#card4').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 3 && inPlay[i] === 51){
            $('#card4').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 3 && inPlay[i] === 52){
            $('#card4').css({'background-image': 'url(images/ace_of_spades.png)'})
        }
    }
    firstRound();
}
var river = function(){
    for (var i = 0; i < inPlay.length; i++){
        // console.log(inPlay[i]);

        // CARD 5 ============================================================

        if(i === 4 && inPlay[i] === 1){
            $('#card5').css({'background-image': 'url(images/2_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 2){
            $('#card5').css({'background-image': 'url(images/2_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 3){
            $('#card5').css({'background-image': 'url(images/2_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 4){
            $('#card5').css({'background-image': 'url(images/2_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 5){
            $('#card5').css({'background-image': 'url(images/3_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 6){
            $('#card5').css({'background-image': 'url(images/3_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 7){
            $('#card5').css({'background-image': 'url(images/3_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 8){
            $('#card5').css({'background-image': 'url(images/3_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 9){
            $('#card5').css({'background-image': 'url(images/4_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 10){
            $('#card5').css({'background-image': 'url(images/4_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 11){
            $('#card5').css({'background-image': 'url(images/4_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 12){
            $('#card5').css({'background-image': 'url(images/4_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 13){
            $('#card5').css({'background-image': 'url(images/5_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 14){
            $('#card5').css({'background-image': 'url(images/5_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 15){
            $('#card5').css({'background-image': 'url(images/5_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 16){
            $('#card5').css({'background-image': 'url(images/5_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 17){
            $('#card5').css({'background-image': 'url(images/6_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 18){
            $('#card5').css({'background-image': 'url(images/6_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 19){
            $('#card5').css({'background-image': 'url(images/6_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 20){
            $('#card5').css({'background-image': 'url(images/6_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 21){
            $('#card5').css({'background-image': 'url(images/7_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 22){
            $('#card5').css({'background-image': 'url(images/7_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 23){
            $('#card5').css({'background-image': 'url(images/7_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 24){
            $('#card5').css({'background-image': 'url(images/7_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 25){
            $('#card5').css({'background-image': 'url(images/8_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 26){
            $('#card5').css({'background-image': 'url(images/8_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 27){
            $('#card5').css({'background-image': 'url(images/8_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 28){
            $('#card5').css({'background-image': 'url(images/8_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 29){
            $('#card5').css({'background-image': 'url(images/9_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 30){
            $('#card5').css({'background-image': 'url(images/9_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 31){
            $('#card5').css({'background-image': 'url(images/9_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 32){
            $('#card5').css({'background-image': 'url(images/9_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 33){
            $('#card5').css({'background-image': 'url(images/10_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 34){
            $('#card5').css({'background-image': 'url(images/10_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 35){
            $('#card5').css({'background-image': 'url(images/10_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 36){
            $('#card5').css({'background-image': 'url(images/10_of_spades.png)'})
        }else if(i === 4 && inPlay[i] === 37){
            $('#card5').css({'background-image': 'url(images/jack_of_diamonds2.png)'})
        }else if(i === 4 && inPlay[i] === 38){
            $('#card5').css({'background-image': 'url(images/jack_of_clubs2.png)'})
        }else if(i === 4 && inPlay[i] === 39){
            $('#card5').css({'background-image': 'url(images/jack_of_hearts2.png)'})
        }else if(i === 4 && inPlay[i] === 40){
            $('#card5').css({'background-image': 'url(images/jack_of_spades2.png)'})
        }else if(i === 4 && inPlay[i] === 41){
            $('#card5').css({'background-image': 'url(images/queen_of_diamonds2.png)'})
        }else if(i === 4 && inPlay[i] === 42){
            $('#card5').css({'background-image': 'url(images/queen_of_clubs2.png)'})
        }else if(i === 4 && inPlay[i] === 43){
            $('#card5').css({'background-image': 'url(images/queen_of_hearts2.png)'})
        }else if(i === 4 && inPlay[i] === 44){
            $('#card5').css({'background-image': 'url(images/queen_of_spades2.png)'})
        }else if(i === 4 && inPlay[i] === 45){
            $('#card5').css({'background-image': 'url(images/king_of_diamonds2.png)'})
        }else if(i === 4 && inPlay[i] === 46){
            $('#card5').css({'background-image': 'url(images/king_of_clubs2.png)'})
        }else if(i === 4 && inPlay[i] === 47){
            $('#card5').css({'background-image': 'url(images/king_of_hearts2.png)'})
        }else if(i === 4 && inPlay[i] === 48){
            $('#card5').css({'background-image': 'url(images/king_of_spades2.png)'})
        }else if(i === 4 && inPlay[i] === 49){
            $('#card5').css({'background-image': 'url(images/ace_of_diamonds.png)'})
        }else if(i === 4 && inPlay[i] === 50){
            $('#card5').css({'background-image': 'url(images/ace_of_clubs.png)'})
        }else if(i === 4 && inPlay[i] === 51){
            $('#card5').css({'background-image': 'url(images/ace_of_hearts.png)'})
        }else if(i === 4 && inPlay[i] === 52){
            $('#card5').css({'background-image': 'url(images/ace_of_spades.png)'})
        }
    }

    firstRound();
}
var currentBet = 0;
var totalBet = 0;
var raiseAmount = 0;
var turnNum = 1;
var firstRound = function(){

    var $console = $('#console');

    if (turnNum === 1){
        $prompt.text('First round of bets starts now! Player One, How much do you want to bet?');

        var $bet = $('#bet-submit');
        var $firstBetBox = $('#first-bet-box');
        var $firstBetInput = $firstBetBox.val();
        currentBet = currentBet + parseInt($firstBetInput);

        $bet.on('click', firstRound2);

        console.log(currentBet);
        console.log("total bet is" + totalBet);



    }else if (turnNum === 2){

        $prompt.text('Second round of bets starts now! Player One, How much do you want to bet?');
        console.log("total bet is " + totalBet);
        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();
        currentBet = currentBet + parseInt($firstBetInput);

        console.log("current bet is " + currentBet);
        console.log("total bet is " + totalBet);
        $bet.on('click', firstRound2);


    }else if (turnNum === 3){

        $prompt.text('Final round of bets starts now! Player One, How much do you want to bet?');
        var $bet = $('<button>').attr('id', 'bet-submit').addClass('inputButton').text('BET');
        var $firstBetBox = $('<input>').attr('id', 'first-bet-box').addClass('inputBox');
        $console.append($firstBetBox);
        $console.append($bet);
        var $firstBetInput = $firstBetBox.val();
        currentBet = currentBet + parseInt($firstBetInput);
        $bet.on('click', firstRound2);

        console.log(currentBet);
        console.log("total bet is " + totalBet);

    }
}

var firstRound2 = function(){
    var $betBox2 = $('#first-bet-box');
    var $console = $('#console');
    var $betInput2 = $betBox2.val();
    currentBet = parseInt($betInput2);

    var $player1Score = $('#player1Score');
    console.log("total bet is " + totalBet);
    totalBet += currentBet;
    console.log("current bet is " + currentBet);
    console.log("total bet is " + totalBet);
    $player1Score.text(player1Money - totalBet);


    $console.children().remove('#first-bet-box');
    $console.children().remove('#bet-submit');


    $prompt.text('Player 1 has bet ' + currentBet);
    $prompt.append('<br>');
    $prompt.append('Player 2 what would you like to do?');
    $prompt.append('<br>');
    var $call = $('<button>').text("CALL");
    $prompt.append($call);
    var $raise = $('<button>').text("RAISE");
    $prompt.append($raise);
    var $fold = $('<button>').text("FOLD");
    $prompt.append($fold);

    console.log(currentBet);

    $call.on('click', player2Calls);
    $raise.on('click', player2Raises);
    $fold.on('click', player2Folds);
}
var player2Calls = function(){
    if (turnNum === 1){
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        $prompt.text('Player 2 calls... Now for the turn...')
        turnNum++;
        console.log(turnNum);
        console.log(currentBet);
        turn();
    }else if(turnNum === 2){
        var $player2Score = $('#player2Score');
        $player2Score.text(player2Money - totalBet);
        $prompt.text('Player 2 calls... Now for the river...')
        turnNum++;
        console.log(turnNum);
        river();
    }
}
var player2Folds = function(){
    $prompt.text('Player One wins the pot!')
}
var player2Raises = function(){
    console.log(currentBet);
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
    console.log(currentBet);
    var $console = $('#console');
    currentBet += raiseAmount;
    $console.children().remove('#raiseInputBox');
    $console.children().remove('#raiseButton');
    $prompt.text('Player 2 has raised the bet to ' + currentBet + '. Player 1, whats your move?');
    $prompt.append('<br>');
    var $call = $('<button>').text("CALL");
    $prompt.append($call);
    var $fold = $('<button>').text("FOLD");
    $prompt.append($fold);
    totalBet += raiseAmount;
    var $player2Score = $('#player2Score');
    $player2Score.text(player2Money - currentBet);
    console.log("total bet is " + totalBet);

    turnNum++;

    $call.on('click', player1Calls);
    $fold.on('click', player1Folds);
}

var player1Calls = function(){
    var $player1Score = $('#player1Score');
    $player1Score.text(player1Money - totalBet);

    var $player2Score = $('#player2Score');
    $player2Score.text(player2Money - totalBet);
    $prompt.text('Player 1 has called. Now for the turn...');
    turn();

}
var player1Folds = function(){
    $prompt.text('Player 1 has folded, Player 2 wins!');
}
shuffle();
findSuit();
findValues();
$start.on('click', startGame)
$turn.on('click', turn)
$river.on('click', river)

// setCards();


}); // end window onload

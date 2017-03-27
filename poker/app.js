console.log("js working");
$(function() {

var card1;
var card2;
var card3;
var card4;
var card5;
var card6;
var card7;
var card8;
var card9;
var inPlay = [];

var shuffle = function(){
    for (var i = 0; i < 9; i++){
        var cardNum = Math.floor(Math.random() * (52 - 1)) + 1;
        inPlay.push(cardNum);
    }
}
var setCards = function(){
    for (var i = 0; i < inPlay.length; i++){
        console.log(inPlay[i]);
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

        // CARD 4 ============================================================

        else if(i === 3 && inPlay[i] === 1){
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

        // CARD 5 ============================================================

        else if(i === 4 && inPlay[i] === 1){
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
}
shuffle();
setCards();


}); // end window onload

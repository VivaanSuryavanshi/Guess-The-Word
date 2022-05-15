var p1 = localStorage.getItem("player1");
var p2 = localStorage.getItem("player2");

document.getElementById("player1").innerHTML = p1 + ": ";
document.getElementById("player2").innerHTML = p2 + ": ";

player1score = 0;
player2score = 0;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;


document.getElementById("player_question").innerHTML = " Question Turn=" + p1;
document.getElementById("player_answer").innerHTML = " Answer Turn=" + p2;

function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("The Word in Lower Case is " + word);

    Char1 = word.charAt(1);
    console.log("Char1=" + Char1);

    lengthDivideByTwo = Math.floor(word.length / 2);
    console.log(lengthDivideByTwo);

    Char2 = word.charAt(lengthDivideByTwo);
    console.log("Char2=" + Char2);

    lengthMinus1 = word.length - 1;
    Char3 = word.charAt(lengthMinus1);

    console.log("Char3=" + Char3);

    deleteChar1 = word.replace(Char1, "_");
    deleteChar2 = deleteChar1.replace(Char2, "_");
    deleteChar3 = deleteChar2.replace(Char3, "_");
    console.log("deletChar3=" + deleteChar3);

    question = "<h4 id='wordDisplay'> Q. " + deleteChar3 + "</h4>";
    inputBox = "<br> Answer- <input type='text' id='InputA'>";

    checkButton = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </butto>";

    row = question + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    getAnswer = document.getElementById("InputA").value;
    answer = getAnswer.toLowerCase();
    console.log("The Answer in Lower Case is " + answer);

    if (answer == word) {
        if (answerTurn == "player2") {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }

        else {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
    }

    if (questionTurn=="player1"){
        questionTurn="player2";
        document.getElementById("player_question").innerHTML = "Question turn= " +p2;
    }
    else{
        questionTurn="player1";
        document.getElementById("player_question").innerHTML = "Question turn= " +p1;
    }

    if(answerTurn=="player2"){
        answerTurn="player1";
        document.getElementById("player_answer").innerHTML = "Answer turn= " +p1;
    }
    else{
        answerTurn="player2";
        document.getElementById("player_answer").innerHTML = "Answer turn= " +p2;
    }
    document.getElementById("output").innerHTML = "";
}



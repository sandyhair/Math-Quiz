function addUser()
{
    player1_name = document.getElementById("player1_login").value;
    player2_name = document.getElementById("player2_login").value;
    
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location.replace("game_page.html");
}

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type= 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row = question_number + input_box + check_button;
    document.getELementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn="player2";

function check()
{
    get_answer = document.getELementById("input_check_box").value;
    if (get_answer == actual_anwser)
    {
        if (answer_turn == "player1")
        {
            update_player_1_score = player1_score +1;
            customElements.getELementById("player1_score").innerHTML = update_player_1_score;
        }
        else
        {
            update_player_2_score = player1_score +1;
            customElements.getELementById("player2_score").innerHTML = update_player_2_score;
        }

    }

    if (question_turn = "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
}
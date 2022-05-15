function login(){
    var p1=document.getElementById("user1").value;
    var p2=document.getElementById("user2").value;
    
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);

    window.location="game.html";
}
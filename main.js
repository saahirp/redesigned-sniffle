function send() {
    yyy = document.getElementById("player1login").value;
    yzy = document.getElementById("player2login").value;
    localStorage.setItem(yyy);
    localStorage.setItem(yzy);
}


var i = 0;
    function add() {
        if( i == 6){
            return;
        }
        i++;
        document.getElementById('numValue').value = i;
    }
    function sub() {
        if( i == 1){
            return;
        }
        i--;
        document.getElementById('numValue').value = i;
    }

function openOrder() {
    document.getElementById("id03").style.display = 'block';
    document.getElementById("home").style.display = 'none';
}
window.onclick = function(event1) {
    var c = document.getElementById('id03');
    if (event1.target == c) {
      c.style.display = "none";
    }
  }
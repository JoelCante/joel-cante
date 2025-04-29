var mathive_modal = document.getElementById("modal-proyect-1");
var mathive = document.getElementById("open-mathive");
var close_mathive = document.getElementById("close-mathive");


mathive.onclick = function () {
    mathive_modal.style.display = "block";
  };

  close_mathive.onclick = function () {
    mathive_modal.style.display = "none";
  };
// get the modal
var modal = document.getElementById("myModal");
//get the open modal button
var btn = document.getElementById("myBtn");
//get the close modal button
var span = document.getElementsByClassName("close")[0];
 
//when the button is clicked set the modals display to block
btn.onclick = function() {
  modal.style.display = "block";
}

//when the close button is clicked set the modals display to none
span.onclick = function() {
  modal.style.display = "none";
}

//if a user clicks off the modal close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
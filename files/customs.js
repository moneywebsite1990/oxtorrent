
var button = document.createElement("span");

button.innerText = "Voir le site complet";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://oxtorrent-fr.fr", "_blank");
});
document.getElementById("view-full").appendChild(button);

var dotContainer = document.getElementById("dot-container");

dotContainer.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = (event.clientX - 5) + "px";
  dot.style.top = (event.clientY - 5) + "px";
  dotContainer.appendChild(dot);

  setTimeout(function() {
    dot.style.display = "none";
  }, 3000);
});



/* Open when someone clicks on the span element */
function openNav() {
  const body = document.querySelector("body");
  document.getElementById("overlayNav").style.width = "100%";
  // Disable scroll
  body.style.overflow = "hidden";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  const body = document.querySelector("body");
  document.getElementById("overlayNav").style.width = "0%";
  // Enable scroll
  body.style.overflow = "auto";
}

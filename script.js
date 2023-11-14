var modal = document.getElementById("trailerModal");

function openModal() {
  document.getElementById("iframe").src =
    "https://www.youtube.com/embed/wtZrQzzlqi4";
  modal.style.display = "block";

  window.addEventListener("click", outsideClick);
}

function closeModal() {
  var iframe = document.getElementById("iframe");

  modal.style.display = "none";
  iframe.src = "";

  window.removeEventListener("click", outsideClick);
}

function outsideClick(event) {
  var modalContent = document.querySelector(".modal-content");

  if (event.target === modal) {
    modal.style.display = "none";
    document.getElementById("iframe").src = "";
    window.removeEventListener("click", outsideClick);
  }
}

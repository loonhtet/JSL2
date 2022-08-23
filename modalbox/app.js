var getnbtnmodal = document.getElementById("btn-modal");

var getmodalbox = document.getElementById("loginmodal");

var getbtnclose = document.querySelector(".btn-close");

getnbtnmodal.addEventListener("click", openmodal);

getbtnclose.addEventListener("click", function () {
  closemodal();
});

window.onclick = function (e) {
  if (e.target === getmodalbox) {
    getmodalbox.style.display = "none";
  }
};

function openmodal() {
  getmodalbox.style.display = "block";
}

function closemodal() {
  getmodalbox.style.display = "none";
}

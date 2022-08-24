var gettablinks = document.getElementsByClassName("tablinks"); // HTML Collection

var gettabpanes = document.getElementsByClassName("tab-pane");

// console.log(gettabpanes);

var getbtncolses = document.querySelectorAll(".btn-close"); // Node List

// console.log(getbtncolses);

var tabpanes = Array.from(gettabpanes);

function gettab(evn, linkid) {
  //   console.log(evn.target);
  //   console.log(linkid);

  // Method 1
  //   for (var i = 0; i < gettabpanes.length; i++) {
  //     gettabpanes[i].style.display = "none";
  //   }

  // Method 2
  tabpanes.forEach(function (tabpanes) {
    tabpanes.style.display = "none";
  });

  for (var i = 0; i < gettablinks.length; i++) {
    gettablinks[i].className = gettablinks[i].className.replace(" active", "");

    getbtncolses[i].addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }

  document.getElementById(linkid).style.display = "block";

  // Method 1
  //   evn.target.className += " active";

  // Method 2
  //   evn.target.className = evn.target.className.replace(
  //     "tablinks",
  //     "tablinks active"
  //   );

  // Method 3
  //   evn.target.classList.add("active");

  // Method 4
  evn.currentTarget.classList += " active";
}

document.getElementById("autoclick").click();

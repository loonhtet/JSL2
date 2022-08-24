var getinput = document.getElementById("search");
var getul = document.getElementById("members");
var getli = getul.getElementsByTagName("li");

// console.log(getli); // HTML Collection

var getsortazm1btn = document.getElementById("sortazm1");
var getsortzam1btn = document.getElementById("sortzam1");
var getsortazm2btn = document.getElementById("sortazm2");
var getsortzam2btn = document.getElementById("sortzam2");

getinput.addEventListener("keyup", filter);

// Method 1

getsortazm1btn.addEventListener("click", sortingazm1);
getsortzam1btn.addEventListener("click", sortingzam1);

function sortingazm1() {
  //   console.log("working");

  var lis = [];

  for (var i = 0; i < getli.length; i++) {
    // console.log(getli[i].textContent);

    lis.push(getli[i].textContent);
  }

  //   console.log(lis);
  console.log(lis.sort());
  //   console.log(lis.reverse());
  //   console.log(lis.sort().reverse());

  var azlis = lis.sort();
  getul.innerHTML = "";

  azlis.forEach(function (azli) {
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = `javascript:void(0);`;
    newlink.appendChild(document.createTextNode(azli));
    newli.appendChild(newlink);
    getul.appendChild(newli);

    // console.log(newli);
  });
}

function sortingzam1() {
  //   console.log("working");

  var lis = [];

  for (var i = 0; i < getli.length; i++) {
    // console.log(getli[i].textContent);

    lis.push(getli[i].textContent);
  }

  //   console.log(lis);
  console.log(lis.sort());
  //   console.log(lis.reverse());
  //   console.log(lis.sort().reverse());

  var azlis = lis.sort().reverse();
  getul.innerHTML = "";

  azlis.forEach(function (azli) {
    const newli = document.createElement("li");
    const newlink = document.createElement("a");
    newlink.href = `javascript:void(0);`;
    newlink.appendChild(document.createTextNode(azli));
    newli.appendChild(newlink);
    getul.appendChild(newli);

    // console.log(newli);
  });
}

// ----------------------------------------------------------------------------------------------------------------------------

function filter() {
  //   console.log(this.value);

  var inputfilter = this.value.toLowerCase();
  //   console.log(inputfilter);

  for (var x = 0; x < getli.length; x++) {
    // console.log(getli[x]);

    // Method 1
    // console.log(getli[x].querySelector("a").innerHTML.toLowerCase());

    // Method 2
    // console.log(
    //   getli[x].getElementsByTagName("a")[0].textContent.toLowerCase()
    // );

    var getavalue = getli[x].querySelector("a").innerText.toLowerCase();

    if (getavalue.indexOf(inputfilter) > -1) {
      getli[x].style.display = "";
    } else {
      getli[x].style.display = "none";
    }
  }
}

const database = [
  {
    question: "Choose Traffic Light",
    a: "./img/traffic.jpg",
    b: "./img/mountain.jpg",
    c: "./img/ambulance.jpg",
    d: "./img/airport.jpg",
    correctanswer: "a",
  },

  {
    question: "Choose Mountain",
    a: "./img/ambulance.jpg",
    b: "./img/mountain.jpg",
    c: "./img/airport.jpg",
    d: "./img/traffic.jpg",
    correctanswer: "b",
  },

  {
    question: "Choose Ambulance Truck",
    a: "./img/mountain.jpg",
    b: "./img/airport.jpg",
    c: "./img/traffic.jpg",
    d: "./img/ambulance.jpg",
    correctanswer: "d",
  },
  {
    question: "Choose Airport",
    a: "./img/airport.jpg",
    b: "./img/mountain.jpg",
    c: "./img/ambulance.jpg",
    d: "./img/traffic.jpg",
    correctanswer: "a",
  },
];

// console.log(database[0].b);

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getanswer = document.querySelectorAll(".answer");
// console.groupCollapsed(getanswer);

const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");
// console.log(geta_img);

startquestion();

function startquestion() {
  getquestion.textContent = database[0].question;
  geta_img.src = database[0].a;
  getb_img.src = database[0].b;
  getc_img.src = database[0].c;
  getd_img.src = database[0].d;
}

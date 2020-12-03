var studentname = "";
var textdata = {};
var whoentered = [];
var tierone = [];
var tiertwo = [];
var timesget = 0;

fetch('data.json')
  .then(response => response.json())
  .then(function(data) {
    textdata = data;
});

function rnd (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function arraySet() {
  for (i = 0; i < textdata["questionsf"].length; i++) {
    tierone.push(i);
  }
  for (i = 0; i < textdata["questionss"].length; i++) {
    tiertwo.push(i);
  }
}
setTimeout(arraySet, 500);

function begin () {
  studentname = document.getElementById("nameinput").value;
  whoentered.push(studentname);
  document.getElementById("deldiv").remove();
  var bodyel = document.getElementById("bodyid");
  var newdiv = document.createElement("div");
  newdiv.className += "center";
  newdiv.setAttribute("id", "borders");
  newdiv.innerHTML = '<table class="quest"><tbody><tr><td><p id="firstbox">1</p></td><td id="firstquest" colspan="5"></td></tr><tr><td><p id="secondbox">2</p></td><td id="secondquest" colspan="5"></td></tr></tbody></table><br><button onclick="nextone()">Следующий ученик</button>';
  bodyel.appendChild(newdiv);
  var fquebox = document.getElementById("firstquest");
  var squebox = document.getElementById("secondquest");
  var rndnumberone = rnd(tierone.length);
  fquebox.innerHTML = textdata["questionsf"][tierone[rndnumberone]];
  tierone.splice(rndnumberone, 1);
  var rndnumbertwo = rnd(tiertwo.length);
  squebox.innerHTML = textdata["questionss"][tiertwo[rndnumbertwo]];
  tiertwo.splice(rndnumbertwo, 1);
}

function nextone() {
  timesget += 1;
  document.getElementById("borders").remove();
  var bodyel = document.getElementById("bodyid");
  var newdiv = document.createElement("div");
  newdiv.className += "center";
  newdiv.setAttribute("id", "deldiv");
  if (timesget != 15) {
    newdiv.innerHTML = '<h1>Экзамен по "Основам программирования"</h1><p>Ваше ФИО</p><input id="nameinput" type="text" placeholder="Фамилия Имя Отчество" required=""><br><button onclick="begin()" class="button">НАЧАТЬ</button>';
    bodyel.appendChild(newdiv);
  } else {
    newdiv.innerHTML = '<h1>Больше нет вопросов!</h1>';
    bodyel.appendChild(newdiv);
  }
}

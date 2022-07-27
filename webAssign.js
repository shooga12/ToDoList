function date() {
  var currentDate = new Date();
  var date =
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear();
  document.getElementById("date").innerHTML = date;
}

var priority;
function add() {
  var radios = document.getElementsByName("priority");

  for (var radio of radios) {
    if (radio.checked) {
      priority = radio.value;
    }
  }
  if (priority == null) alert("Error: Please choose priority level.");
  if (validateName() && validateCat() && validateDate()) {
    display();
  }
}
function display() {
  var name = document.form1.name.value;
  var deadline = document.form1.deadline.value;

  var taskDate = new Date(deadline);
  var today = new Date();

  if (priority == "high") {
    var card = document.createElement("div");
    card.setAttribute("class", "card high");
    var pcard = document.createElement("p");
    pcard.innerHTML = name + "<br>" + deadline;

    card.appendChild(pcard);
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "myCheck";
    card.appendChild(check);
    var toDoContainer = document
      .getElementById("todo-container")
      .appendChild(card);

    var icon = document.createElement("img");
    card.appendChild(icon);
    icon.setAttribute("class", "icon");

    if (
      today.getDate() + 2 == taskDate.getDate() ||
      today.getDate() + 1 == taskDate.getDate() ||
      today.getDate() == taskDate.getDate()
    ) {
      icon.setAttribute("src", "warning2.jpeg");
    }
    if (taskDate.getDate() < today.getDate()) {
      icon.setAttribute("src", "deleted.png");
    }
  }
  if (priority == "medium") {
    var card = document.createElement("div");
    card.setAttribute("class", "card medium");
    var pcard = document.createElement("p");
    pcard.innerHTML = name + "<br>" + deadline;

    card.appendChild(pcard);
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "myCheck";
    card.appendChild(check);
    var toDoContainer = document
      .getElementById("todo-container")
      .appendChild(card);

    var icon = document.createElement("img");
    card.appendChild(icon);
    icon.setAttribute("class", "icon");

    if (
      today.getDate() + 2 == taskDate.getDate() ||
      today.getDate() + 1 == taskDate.getDate() ||
      today.getDate() == taskDate.getDate()
    ) {
      icon.setAttribute("src", "warning-orang.jpeg");
    }
    if (taskDate.getDate() < today.getDate()) {
      icon.setAttribute("src", "deleted.png");
    }
  }
  if (priority == "low") {
    var card = document.createElement("div");
    card.setAttribute("class", "card low");
    var pcard = document.createElement("p");
    pcard.innerHTML = name + "<br>" + deadline;

    card.appendChild(pcard);
    var check = document.createElement("input");
    check.type = "checkbox";
    check.className = "myCheck";
    card.appendChild(check);
    var toDoContainer = document
      .getElementById("todo-container")
      .appendChild(card);

    var icon = document.createElement("img");
    card.appendChild(icon);
    icon.setAttribute("class", "icon");

    if (
      today.getDate() + 2 == taskDate.getDate() ||
      today.getDate() + 1 == taskDate.getDate() ||
      today.getDate() == taskDate.getDate()
    ) {
      icon.setAttribute("src", "warning-yellow.jpeg");
    }
    if (taskDate.getDate() < today.getDate()) {
      icon.setAttribute("src", "deleted.png");
    }
  }
}
function completed() {
  //ckeck for list of ckeched cards
  var count = 0;
  $(".card").each(function () {
    if ($(this).children(".myCheck").is(":checked")) {
      $(this).addClass("checked");
      count++;
    }
  });
  if (count == 0) {
    window.alert("No task is selected!");
  } else {
    $(".card").each(function () {
      if ($(this).hasClass("checked")) {
        $(this).appendTo("#completed").addClass("complete");
        $(this).children(".icon").attr("src", "green-check.jpeg");
      }
    });
  }
  $(".myCheck:checked").remove();
}
function validateName() {
  var name = document.form1.name.value;
  if (name == "") {
    window.alert("Task name field empty!");
    return false;
  }
  return true;
}

function validateCat() {
  var category = document.getElementById("category");
  var selected = category.options[category.selectedIndex].value;
  if (selected == 0) {
    window.alert("Category not selected!");
    return false;
  }
  return true;
}

function validateDate() {
  var deadline = document.form1.deadline.value;
  if (deadline == "") {
    window.alert("Deadline not selected!");
    return false;
  }
  return true;
}

function calender() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  today = year + "-" + month + "-" + day;
  //document.getElementById("deadline").setAttribute("min", today);
}

window.addEventListener("load", date, false);
window.addEventListener("load", calender, false);

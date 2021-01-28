//PWA

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}

//UI ELEMENTS
var createAlertDialog = function () {
  var dialog = document.getElementById("my-alert-dialog");

  if (dialog) {
    dialog.show();
  } else {
    ons
      .createElement("alert-dialog.html", { append: true })
      .then(function (dialog) {
        dialog.show();
      });
  }
};

var hideAlertDialog = function () {
  document.getElementById("my-alert-dialog").hide();
};

var notify = function () {
  ons.notification.alert("This dialog was created with ons.notification");
};

/*

//Application Stuff
var id = window.location.search.replace("?", "").replace("=", "");
var source_simulation = new EventSource(
  "https://192.168.178.142:2222/" + id + "/stream"
);

source_simulation.onopen = function (e) {
  console.log("open");
};
source_simulation.addEventListener("message", function (e) {
  let message;
  try {
    message = JSON.parse(e.data);
  } catch {
    message = e.data;
  }

  document.getElementById("data").innerHTML = message;
});

*/

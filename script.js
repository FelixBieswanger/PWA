//PWA

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}

//Application Stuff
var id = window.location.search.replace("?", "").replace("=", "");
var source_simulation = new EventSource(
  "http://localhost:2222/" + id + "/stream"
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

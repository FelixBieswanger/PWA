//PWA

var chart;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}

/*
 ***************
 * UI Elements *
 ***************
 */

//Chart

$(document).ready(function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "doughnut",

    // The data for our dataset
    data: {
      labels: ["blue"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["rgb(54, 162, 235)"],
          data: [10, 213],
        },
      ],
    },

    // Configuration options go here
    options: {
      cutoutPercentage: 80,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
    },
  });
});

//Application Stuff

//var id = window.location.search.replace("?", "").replace("=", "");
var id = 69;
var source_simulation = new EventSource(
  "https://lit-fortress-34268.herokuapp.com/id" + id + "/stream"
);

source_simulation.onopen = function (e) {
  console.log("open");
};
source_simulation.addEventListener("message", function (e) {
  let message = e.data;
  chart.data.datasets[0].data[0] = message;
  chart.update();
});

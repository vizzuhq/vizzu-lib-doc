import data from "./data.js"
import Vizzu from '../../assets/dist/vizzu.min.js';


new Vizzu("testVizzuCanvas", { data }).initializing.then((chart) => {
  chart.animate({
    config: {
      x: "Count",
      y: "Sex",
      label: "Count",
      title: "Passengers of the Titanic",
    },
  });

  chart.animate({
    config: {
      x: ["Count", "Survived"],
      label: ["Count", "Survived"],
      color: "Survived",
    },
  });

  chart.animate({
    config: { x: "Count", y: ["Sex", "Survived"] },
  });

  chart.animate({
    config: {
      x: ["Count", "Sex", "Survived"],
      y: null,
      coordSystem: "polar",
    },
  });
});

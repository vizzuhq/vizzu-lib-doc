import data from "./data.js"
import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@0.7/dist/vizzu.min.js';

new Vizzu("testVizzuCanvas", { data }).initializing.then((chart) => {
  chart.animate({
    config: {
      title: "Music Revenue by Format 1973-2020",
      x: "Year",
      y: ["Format", "Revenue [m$]"],
      color: "Format",
      geometry: "area",
      align: "center",
    },
    style: {
      plot: {
        xAxis: { label: { fontSize: 9, angle: 2.0 } },
        marker: {
          colorPalette:
            "#b74c20FF #c47f58FF #1c9761FF" +
            " #ea4549FF #875792FF #3562b6FF" +
            " #ee7c34FF #efae3aFF",
        },
      },
    },
  });

  chart.animate(
    {
      config: {
        title: "Music Revenue by Format 1973-2020(%)",
        align: "stretch",
      },
    },
    {
      delay: 1,
    }
  );

  chart.animate(
    {
      config: {
        title: "Music Revenue by Format 1973-2020",
        align: "center",
      },
    },
    {
      delay: 1,
    }
  );

  chart.animate(
    {
      config: {
        split: true,
      },
    },
    {
      delay: 1,
    }
  );

  chart.animate(
    {
      data: {
        filter: (record) => {
          return record.Format === "Vinyl" || record.Format === "Streaming";
        },
      },
      config: {
        title: "Revenue of Vinyl & Streaming 1973-2020",
      },
    },
    {
      delay: 1,
    }
  );

  chart.animate(
    {
      data: { filter: null },
      config: {
        title: "Music Revenue by Format 1973-2020",
        split: false,
      },
    },
    {
      delay: 1,
    }
  );

  chart.animate(
    {
      config: {
        x: "Year",
        y: "Revenue [m$]",
        noop: "Format",
        align: "none",
        geometry: "line",
      },
    },
    {
      delay: 1,
    }
  );
});

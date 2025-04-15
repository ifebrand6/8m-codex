import type { SeriesLineOptions } from "highcharts";

export const highchartSeriesData: SeriesLineOptions[] = [
  {
    type: "line",
    name: "Cliveden House",
    data: [30, 45, 35], // Data can be capped at 50, but using sample values here
  },
  {
    type: "line",
    name: "Chewton Glen",
    data: [25, 50, 40], // Data capped at 50
  },
  {
    type: "line",
    name: "The Grove",
    data: [20, 30, 25], // D  ata capped at 50
  },
  {
    type: "line",
    name: "Gleneagles",
    data: [45, 50, 40], // Data capped at 50
  },
  {
    type: "line",
    name: "Old Course Hotel",
    data: [35, 40, 30], // Data capped at 50
  },
  {
    type: "line",
    name: "Beaverbrook Hotel",
    data: [15, 25, 20], // Data capped at 50
  },
  {
    type: "line",
    name: "Hedfield House",
    data: [50, 50, 50], // Data capped at 50
  },
  {
    type: "line",
    name: "Cameron House",
    data: [40, 35, 50], // Data capped at 50
  },
  {
    type: "line",
    name: "Coworth Park",
    data: [30, 20, 50], // Data capped at 50
  },
  {
    type: "line",
    name: "Four Seasons Hampshire",
    data: [0, 50, 45], // Data capped at 50
  },
   {
    type: "line",
    name: "Hampshire",
    data: [25, 50, 45], // Data capped at 50
  },
];

export const categories = ["2023-01", "2023-02", "2023-03"];

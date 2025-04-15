import { useRef } from "react";
import React from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { HighchartsReactRefObject } from "highcharts-react-official";

import 'highcharts/modules/heatmap'; // Module is auto-initialized in v12


interface Props {
  seriesData: Highcharts.SeriesHeatmapOptions[];
  categories: string[];
  yCategories: string[];
  heatmapEntries: any;
}

const HeatMapChart = ({ seriesData, categories, yCategories, heatmapEntries }: Props) => {
const chartRef = useRef<HighchartsReactRefObject>(null);

  const options = {
    chart: {
      type: 'heatmap',
      backgroundColor: "#18181b",
    },
    title: "",
    xAxis: {
      categories,
      accessibility: {
        rangeDescription: 'Range: Q2 2019 to Q2 2023', //TODO should be a variable
      },
      title: {
        text: 'Quarter',  //TODO should be a variable
        align: 'low',
        offset: 40,
        style: {
          color: '#d1d5db',
          fontWeight: 'normal',
        },
      },
      tickLength: 5,
      lineWidth: 1,
      labels: {
        rotation: 0,
        y: 20,
        style: { color: '#d1d5db' },
      },
    },
    yAxis: {
      categories: yCategories,
      title: {
        text: 'Hotels', //TODO should be a variable
        style: { color: '#d1d5db' },
      },
      labels: {
        style: { color: '#d1d5db' },
      },
    },
    colorAxis: {
  stops: [
    [0, '#BBDEFB'], // Light blue
    [0.33, '#4FC3F7'], // Cyan
    [0.66, '#FFCA28'], // Yellow
    [1, '#FF5722'], // Orange
  ],
  min: 1,
  max: 17,
  labels: {
    style: {
      fontSize: '12px',
      color: '#E5E7EB',
      fontWeight: 'normal',
    },
    formatter(this: Highcharts.AxisLabelsFormatterContextObject): string {
      return `<span style="color: #E5E7EB; font-size: 12px;">${this.value}</span>`;
    },
  },
},
    tooltip: {
      shared: true,
    },
    series: seriesData,
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      description: 'Heatmap showing quarterly search interest for hotels from Q2 2019 to Q2 2023.',
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef}/>;
};

export default HeatMapChart;

"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { HighchartsReactRefObject } from "highcharts-react-official";
import type { SeriesLineOptions } from "highcharts";

interface Props {
  seriesData: SeriesLineOptions[];
  categories: string[];
}

export default function MultiLineHighChart({ seriesData, categories }: Props) {
  const chartRef = useRef<HighchartsReactRefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      spacing: [20, 10, 15, 10],
      backgroundColor: 'transparent', // Black background
    },
    title: {
      text: "",
    },
    xAxis: {
      categories,
      accessibility: {
       rangeDescription: 'Range: 2010 to 2022'  //TODO should be a variable
      },
      title: {
        text: "Month",
        align: 'low',
        offset: 40,
        style: {
                fontWeight: 'normal'
            }
     },
     tickLength: 5,
     lineWidth: 1,
     labels: {
            rotation: 0, // Horizontal labels
            y: 20,// Position below ticks
           style: {
            color: '#ffffff' // Example: light gray, matching your existing axis labels
           }
        }
    },
    yAxis: {
      title: { text: "Search Interest", style: {
            color: '#ffffff' // Example: light gray, matching your existing axis labels
           } },  //TODO should be a variable
       labels: {style: {
            color: '#ffffff' // Example: light gray, matching your existing axis labels
           }}
    },
    tooltip: {
      shared: true,
    },
    series: seriesData,
    credits: {
      enabled: false,
    },
    legend: {
        enabled: true, // No legend
        itemStyle: {color: '#fff'}
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false // No markers
            },
            lineWidth: 2, // Thicker lines
            accessibility: {
                keyboardNavigation: {enabled: true}
            }
        }
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  );
}

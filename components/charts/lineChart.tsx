"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { HighchartsReactRefObject } from "highcharts-react-official";
import type { SeriesLineOptions } from "highcharts";

import 'highcharts/modules/accessibility';

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
    accessibility: {
      enabled: true,
      keyboardNavigation: {
        enabled: true,
        focusBorder: {
          enabled: true,
          style: {
            borderColor: '#ffffff',
            borderWidth: 2
          }
        }
      },
      screenReaderSection: {
        beforeChartFormat: '<h5>{chartTitle}</h5><div>{chartSubtitle}</div><div>{chartLongdesc}</div>',
        afterChartFormat: '<div>{chartCaption}</div>'
      },
      description: 'Line chart showing search interest trends over time. Each line represents a different data series.',
      point: {
        valueDescriptionFormat: '{point.name}: {point.y}'
      }
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
            color: '#ffffff'
           }
        }
    },
    yAxis: {
      title: { text: "Search Interest", style: {
            color: '#ffffff'
           } },  //TODO should be a variable
       labels: {style: {
            color: '#ffffff'
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
        itemStyle: {color: '#fff', fontSize: '12'},
        itemDistance: 30,
        itemMarginTop: 10,
        squareSymbol: true,
        symbolHeight: 15,
        symbolWidth: 15,
        symbolPadding: 5,
        symbolRadius: 2,
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

import { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { HighchartsReactRefObject } from 'highcharts-react-official';

import 'highcharts/modules/heatmap';
import 'highcharts/modules/accessibility';

interface Props {
  seriesData: Highcharts.SeriesHeatmapOptions[];
  categories: string[];
  yCategories: string[];
  heatmapEntries: any;
}

const HeatMapChart = ({ seriesData, categories, yCategories, heatmapEntries }: Props) => {
  const chartRef = useRef<HighchartsReactRefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: 'heatmap',
      backgroundColor: '#18181b',
      className: 'heatmap-chart', // Unique class for this chart
    },
    title: {
      text: '',
    },
    xAxis: {
      categories,
      accessibility: {
        rangeDescription: 'Range: Q2 2019 to Q2 2023',
      },
      title: {
        text: 'Quarter',
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
        text: 'Hotels',
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
      description: 'Heatmap showing quarterly search interest for hotels from Q2 2019 to Q2 2023. The color intensity represents the level of search interest, with darker colors indicating higher interest.',
      point: {
        valueDescriptionFormat: '{point.name}: {point.value}'
      }
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default HeatMapChart;

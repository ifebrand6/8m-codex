// src/data/heatmapData.ts

export const quarters = [
  'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
  'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q2 2022', 'Q3 2022',
  'Q4 2022', 'Q1 2023', 'Q2 2023',
];

export interface HeatmapEntry {
  hotel: string;
  points: number[];
}

export const heatmapData: HeatmapEntry[] = [
  {
    hotel: 'The Newt',
    points: [15, 3.5, 2.1, 1.2, 15, 3.5, 2.1, 1.2, 15, 3.5, 2.1, 1.2, 15, 3.5, 2.1, 1.2, 15],
  },
  {
    hotel: 'Four Seasons Hampshire',
    points: [8.5, 8.5, 7.2, 6.5, 8.5, 8.5, 7.2, 6.5, 8.5, 8.5, 7.2, 6.5, 8.5, 8.5, 7.2, 6.5, 8.5],
  },
  {
    hotel: 'Coworth Park',
    points: [7.4, 9.4, 8.9, 10.9, 7.4, 9.4, 8.9, 10.9, 7.4, 9.4, 8.9, 10.9, 7.4, 9.4, 8.9, 10.9, 7.4],
  },
  {
    hotel: 'Cameron House',
    points: [4.9, 7.8, 9, 10, 4.9, 7.8, 9, 10, 4.9, 7.8, 9, 10, 4.9, 7.8, 9, 10, 4.9],
  },
  {
    hotel: 'Heckfield House',
    points: [7.4, 3.4, 4.4, 5.4, 7.4, 3.4, 4.4, 5.4, 7.4, 3.4, 4.4, 5.4, 7.4, 3.4, 4.4, 5.4, 7.4],
  },
  {
    hotel: 'Beaverbrook Hotel',
    points: [4.3, 6.3, 8.3, 7.3, 4.3, 6.3, 8.3, 7.3, 4.3, 6.3, 8.3, 7.3, 4.3, 6.3, 8.3, 7.3, 4.3],
  },
  {
    hotel: 'Old Course Hotel',
    points: [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2],
  },
  {
    hotel: 'Gleneagles',
    points: [15.4, 16.4, 14.4, 14.4, 15.4, 16.4, 14.4, 14.4, 15.4, 16.4, 14.4, 14.4, 15.4, 16.4, 14.4, 14.4, 15.4],
  },
  {
    hotel: 'The Grove',
    points: [15, 15.1, 13.7, 13.3, 15, 15.1, 13.7, 13.3, 15, 15.1, 13.7, 13.3, 15, 15.1, 13.7, 13.3, 15],
  },
  {
    hotel: 'Chewton Glen',
    points: [16.5, 14.5, 13.5, 16.5, 16.5, 14.5, 13.5, 16.5, 16.5, 14.5, 13.5, 16.5, 16.5, 14.5, 13.5, 16.5, 16.5],
  },
  {
    hotel: 'Cliveden House',
    points: [16.5, 14, 15, 16, 16.5, 14, 15, 16, 16.5, 14, 15, 16, 16.5, 14, 15, 16, 16.5],
  },
];

export const hotelNames = heatmapData.map(entry => entry.hotel);

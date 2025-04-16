import { NextApiRequest, NextApiResponse } from 'next';

interface HeatmapData {
  data: Array<{
    x: number;
    y: number;
    value: number;
    name: string;
  }>;
  xCategories: string[];
  yCategories: string[];
}

const simulatedData: HeatmapData = {
  data: [
    { x: 0, y: 0, value: 75, name: "Q1 2023" },
    { x: 0, y: 1, value: 85, name: "Q2 2023" },
    { x: 0, y: 2, value: 90, name: "Q3 2023" },
    { x: 0, y: 3, value: 95, name: "Q4 2023" },
    { x: 1, y: 0, value: 65, name: "Q1 2023" },
    { x: 1, y: 1, value: 75, name: "Q2 2023" },
    { x: 1, y: 2, value: 80, name: "Q3 2023" },
    { x: 1, y: 3, value: 85, name: "Q4 2023" },
    { x: 2, y: 0, value: 55, name: "Q1 2023" },
    { x: 2, y: 1, value: 65, name: "Q2 2023" },
    { x: 2, y: 2, value: 70, name: "Q3 2023" },
    { x: 2, y: 3, value: 75, name: "Q4 2023" },
    { x: 3, y: 0, value: 45, name: "Q1 2023" },
    { x: 3, y: 1, value: 55, name: "Q2 2023" },
    { x: 3, y: 2, value: 60, name: "Q3 2023" },
    { x: 3, y: 3, value: 65, name: "Q4 2023" },
    { x: 4, y: 0, value: 35, name: "Q1 2023" },
    { x: 4, y: 1, value: 45, name: "Q2 2023" },
    { x: 4, y: 2, value: 50, name: "Q3 2023" },
    { x: 4, y: 3, value: 55, name: "Q4 2023" },
    { x: 5, y: 0, value: 25, name: "Q1 2023" },
    { x: 5, y: 1, value: 35, name: "Q2 2023" },
    { x: 5, y: 2, value: 40, name: "Q3 2023" },
    { x: 5, y: 3, value: 45, name: "Q4 2023" },
    { x: 6, y: 0, value: 15, name: "Q1 2023" },
    { x: 6, y: 1, value: 25, name: "Q2 2023" },
    { x: 6, y: 2, value: 30, name: "Q3 2023" },
    { x: 6, y: 3, value: 35, name: "Q4 2023" },
    { x: 7, y: 0, value: 5, name: "Q1 2023" },
    { x: 7, y: 1, value: 15, name: "Q2 2023" },
    { x: 7, y: 2, value: 20, name: "Q3 2023" },
    { x: 7, y: 3, value: 25, name: "Q4 2023" },
    { x: 8, y: 0, value: 0, name: "Q1 2023" },
    { x: 8, y: 1, value: 5, name: "Q2 2023" },
    { x: 8, y: 2, value: 10, name: "Q3 2023" },
    { x: 8, y: 3, value: 15, name: "Q4 2023" },
    { x: 9, y: 0, value: 0, name: "Q1 2023" },
    { x: 9, y: 1, value: 0, name: "Q2 2023" },
    { x: 9, y: 2, value: 5, name: "Q3 2023" },
    { x: 9, y: 3, value: 10, name: "Q4 2023" }
  ],
  xCategories: [
    "Cliveden House",
    "Chewton Glen",
    "The Grove",
    "Gleneagles",
    "Old Course Hotel",
    "Beaverbrook Hotel",
    "Hedfield House",
    "Cameron House",
    "Coworth Park",
    "Four Seasons Hampshire"
  ],
  yCategories: ["Q1", "Q2", "Q3", "Q4"]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Simulate network delay
  setTimeout(() => {
    res.status(200).json(simulatedData);
  }, 500);
}

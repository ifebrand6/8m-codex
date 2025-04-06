import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// import { useFocusRing } from '@react-aria/focus';
import {useFocusRing} from 'react-aria'

const Home: NextPage = () => {
  // State for dropdowns (mock data)
  const [client, setClient] = useState('General Mills');
  const [company, setCompany] = useState('Betty Crocker');
  const [website, setWebsite] = useState('Betty Crocker UK');
  const [segment, setSegment] = useState('Full site');
  const [report, setReport] = useState('Competitor Brand');

  // Accessibility for focus ring
  const { isFocusVisible, focusProps } = useFocusRing();
  console.log(isFocusVisible);

  return (
    <div>
      <Head>
        <title>Share of Search - Codex</title>
        <meta name="description" content="Share of Search dashboard for competitor analysis" />
      </Head>

      <header className="p-4 bg-darkBg flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">CODEX</h1>
        <nav aria-label="Main navigation">
          <ul className="flex space-x-4">
            {['Admin', 'Overview', 'Website Health', 'Search Visibility', 'Performance & Forecasting', 'Budget Tracker'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-lightText hover:text-white focus:outline-none focus:ring-2 focus:ring-accentPurple rounded px-2 py-1"
                  {...focusProps}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="p-6">
        {/* Filters Section */}
        <section className="flex space-x-4 mb-6" aria-label="Filters">
          <div>
            <label htmlFor="client" className="block text-sm font-medium mb-1">
              Client
            </label>
            <select
              id="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="bg-gray-800 text-lightText p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentPurple"
              {...focusProps}
            >
              <option>General Mills</option>
            </select>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company
            </label>
            <select
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-gray-800 text-lightText p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentPurple"
              {...focusProps}
            >
              <option>Betty Crocker</option>
            </select>
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1">
              Website
            </label>
            <select
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="bg-gray-800 text-lightText p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentPurple"
              {...focusProps}
            >
              <option>Betty Crocker UK</option>
            </select>
          </div>
          <div>
            <label htmlFor="segment" className="block text-sm font-medium mb-1">
              Segment
            </label>
            <select
              id="segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="bg-gray-800 text-lightText p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentPurple"
              {...focusProps}
            >
              <option>Full site</option>
            </select>
          </div>
        </section>

        {/* Share of Search Section */}
        <section aria-labelledby="share-of-search-heading">
          <h2 id="share-of-search-heading" className="text-3xl font-bold mb-2">
            Share Of Search
          </h2>
          <p className="text-lightText mb-4">See how competitor search has changed over time.</p>

          <div className="mb-6">
            <label htmlFor="report" className="block text-sm font-medium mb-1">
              Report
            </label>
            <select
              id="report"
              value={report}
              onChange={(e) => setReport(e.target.value)}
              className="bg-gray-800 text-lightText p-2 rounded focus:outline-none focus:ring-2 focus:ring-accentPurple"
              {...focusProps}
            >
              <option>Competitor Brand</option>
            </select>
          </div>

          {/* Placeholder for By Month Chart */}
          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Query - By Month</h3>
            <div
              className="h-64 bg-gray-800 rounded flex items-center justify-center"
              role="img"
              aria-label="Placeholder for Query by Month chart"
            >
              <span className="text-lightText">Chart Placeholder (Query - By Month)</span>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-2 mt-4" aria-label="Chart legend">
              {[
                { name: 'Cliveden House', color: 'bg-accentCyan' },
                { name: 'Chewton Glen', color: 'bg-purple-500' },
                { name: 'The Grove', color: 'bg-green-500' },
                { name: 'Gleneagles', color: 'bg-orange-500' },
                { name: 'Old Course Hotel', color: 'bg-purple-700' },
                { name: 'Beaverbrook Hotel', color: 'bg-yellow-500' },
                { name: 'Heckfield House', color: 'bg-blue-500' },
                { name: 'Cameron House', color: 'bg-red-500' },
                { name: 'Coworth Park', color: 'bg-blue-700' },
                { name: 'Four Seasons Hampshire', color: 'bg-teal-500' },
                { name: 'The Newt', color: 'bg-lime-500' },
              ].map((item) => (
                <div key={item.name} className="flex items-center">
                  <span className={`w-4 h-4 ${item.color} mr-2`} aria-hidden="true"></span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder for Quarterly Heatmap */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Query - Quarterly Heatmap</h3>
            <div
              className="h-64 bg-gray-800 rounded flex items-center justify-center"
              role="img"
              aria-label="Placeholder for Query Quarterly Heatmap"
            >
              <span className="text-lightText">Chart Placeholder (Query - Quarterly Heatmap)</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

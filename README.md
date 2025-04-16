# Codex Dashboard - Technical Assignment

This project is a take-home technical assignment that replicates the attached UI design for a "Share of Search" dashboard using modern web technologies. It includes interactive data visualizations (line chart and heatmap), filter controls(dummy), and adheres to best practices for accessibility, performance, and scalability.

## 🌐 Live Demo
Deployed on Vercel
🔗 [https://8m-codex-2tamw1gou-ifechukwu-udeogus-projects.vercel.app/]

## 🚀 Features

- **Tech Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Highcharts for data visualization

- **Data Visualization**
  - Interactive line charts
  - Heatmap visualizations
  - Responsive and accessible charts
  - Real-time data updates(simulated)

- **Accessibility**
  - ARIA attributes implementation
  - Keyboard navigation support
  - Screen reader optimizations
  - High contrast color schemes

- **Performance**
  - Component memoization
  - Dynamic imports
  - Efficient data fetching
  - Optimized rendering

## 🛠️ Technical Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Visualization**: Highcharts
- **State Management**: React Query
- **UI Components**: Custom built with accessibility in mind

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd codex-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Architecture

The application follows a modern client-server architecture:
- Frontend: Next.js with React Query for state management.
- Backend: Next.js API routes.
- Data Flow: Client-side caching with React Query

## 🏗️ Project Structure

```
codex-dashboard/
├── app/
│   ├── dashboard/          # Dashboard pages and layouts
│   └── layout.tsx          # Root layout
├── components/
│   ├── charts/            # Chart components
│   ├── ui/                # Reusable UI components
│   └── error-boundary.tsx # Error handling
├── lib/
│   └── hooks/             # Custom React hooks
└── public/                # Static assets
```

## 🔜 Future Improvements

- [ ] Add unit tests
- [ ] Implement end-to-end testing
- [ ] Add more interactive features
- [ ] Enhance data filtering capabilities
- [ ] Implement real-time data updates

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Highcharts Documentation](https://www.highcharts.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

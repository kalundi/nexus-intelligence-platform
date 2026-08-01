"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { populationTrend } from "../../data/healthcareMetrics";

export function PopulationChart() {
  return (
    <article className="observatory-panel chart-panel">
      <header>
        <span>POPULATION INTELLIGENCE</span>
        <h2>Population and older-adult trend</h2>
        <p>
          Illustrative index values demonstrating how the Observatory
          will present verified time-series data.
        </p>
      </header>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={330}>
          <LineChart data={populationTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dce6ee" />

            <XAxis dataKey="year" tick={{ fill: "#657788", fontSize: 12 }} />

            <YAxis tick={{ fill: "#657788", fontSize: 12 }} />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="population"
              name="Population index"
              stroke="#1685c8"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="olderAdults"
              name="Older-adult index"
              stroke="#1fa879"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-warning">
        Prototype visualization. Replace illustrative values with a
        documented source dataset before external publication.
      </div>
    </article>
  );
}

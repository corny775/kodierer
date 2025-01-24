"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Cursor from '../component/Cursor';
import { Navbar } from '../component/Navbar';

const PaperCupAnalysis = () => {
  const [analysisData] = useState([
    { month: 'Jan', cupsSaved: 500, carbonSaved: 25.5 },
    { month: 'Feb', cupsSaved: 750, carbonSaved: 38.2 },
    { month: 'Mar', cupsSaved: 1000, carbonSaved: 52.7 },
    { month: 'Apr', cupsSaved: 1100, carbonSaved: 61.5 },
    { month: 'May', cupsSaved: 1230, carbonSaved: 72.2 },
    { month: 'Jun', cupsSaved: 1275, carbonSaved: 77.7 },
    { month: 'Jul', cupsSaved: 1300, carbonSaved: 27.5 },
    { month: 'Aug', cupsSaved: 1411, carbonSaved: 120.2 },
    { month: 'Sep', cupsSaved: 1500, carbonSaved: 131.7 },
    { month: 'Oct', cupsSaved: 1512, carbonSaved: 151.5 },
    { month: 'Nov', cupsSaved: 1590, carbonSaved: 169.2 },
    { month: 'Dec', cupsSaved: 1630, carbonSaved: 180.7 }
  ]);
  
  const calculatedMetrics = {
    totalCupsSaved: analysisData.reduce((sum, entry) => sum + entry.cupsSaved, 0),
    carbonReduction: analysisData.reduce((sum, entry) => sum + entry.carbonSaved, 0).toFixed(2),
    progressPercentage: ((analysisData[analysisData.length - 1]?.cupsSaved / 1000) * 100).toFixed(1)
  };

  return (
    <div className="w-full max-w-4xl">
      <Navbar />
      <Cursor />
      <h2 className="text-2xl font-bold mb-4 pt-20 pl-8 text-green-700">Campus Paper Cup Reduction Analysis</h2>
      <div className="grid grid-cols-3 gap-4 mb-6 pl-8">
        <div className="bg-blue-50 p-4 rounded shadow-lg">
          <h3 className="text-sm font-semibold text-green-700">Total Cups Saved</h3>
          <p className="text-2xl font-bold">{calculatedMetrics.totalCupsSaved}</p>
        </div>
        <div className="bg-green-50 p-4 rounded shadow-lg">
          <h3 className="text-sm font-semibold text-green-700">Carbon Reduction (kg)</h3>
          <p className="text-2xl font-bold">{calculatedMetrics.carbonReduction}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded shadow-lg">
          <h3 className="text-sm font-semibold text-green-700">Progress</h3>
          <p className="text-2xl font-bold">{calculatedMetrics.progressPercentage}%</p>
        </div>
      </div>
      <LineChart width={600} height={300} data={analysisData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cupsSaved" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="carbonSaved" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default PaperCupAnalysis;

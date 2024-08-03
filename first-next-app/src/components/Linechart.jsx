"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Blood Sugar Level - Mg/DL',
          data: [],
          borderWidth: 1,
          fill: false,
          borderColor: 'rgba(0, 238, 131, 0.8)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Store the chart instance
    setChart(newChart);

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  const addData = () => {
    if (!chart) return; // Exit if chart is not initialized

    const label = document.getElementById('labelInput').value;
    const number = parseInt(document.getElementById('numberInput').value, 10);
    const borderColor = number < 70 || number > 99 ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 238, 131, 0.8)';

    if (label !== "" && !isNaN(number)) {
      const index = chart.data.labels.findIndex(existingLabel => label > existingLabel);

      if (index === -1) {
        chart.data.labels.push(label);
        chart.data.datasets[0].data.push(number);
      } else {
        chart.data.labels.splice(index, 0, label);
        chart.data.datasets[0].data.splice(index, 0, number);
      }

      chart.data.datasets[0].borderColor = borderColor;

      chart.update();
    } else {
      alert("Please enter both label and a valid number.");
    }
  };

  return (
    <div>
      <canvas ref={chartRef} id="lineChart" width="400" height="200"></canvas>
      <input id="labelInput" type="text" placeholder="Enter label" />
      <input id="numberInput" type="number" placeholder="Enter number" />
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default LineChart;
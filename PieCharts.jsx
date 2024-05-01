// PieCharts.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieCharts = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store chart instance

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: data.labels,

          datasets: [
            {
              data: data.values,

              backgroundColor: data.colors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy chart instance on component unmount
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width={200} height={200} />;
};

export default PieCharts;

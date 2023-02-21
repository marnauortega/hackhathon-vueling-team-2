import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Rechart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const [chartData2, setChartData2] = useState({
    datasets: [],
  });
  const [chartOptions2, setChartOptions2] = useState({});

  const drawchart = () => {
    setChartData({
      labels: ["Jardinera", "Equipaje", "Coordinacion"],
      datasets: [
        {
          label: "Datos de gastos logísticos Full Time",
          data: [6, 7.25, 10],
          borderColor: "rgb(168, 235, 52)",
          backgroundColor: ["rgba(142, 149, 44, 0.6)"],
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Datos de gastos logísticos",
        },
      },
    });
    setChartData2({
      labels: ["Jardinera", "Equipaje", "Coordinacion"],
      datasets: [
        {
          label: "Datos de gastos logísticos Part Time",
          data: [7.25, 7, 10],
          borderColor: "rgb(18, 84, 216)",
          backgroundColor: ["rgba(34, 83, 206, 0.6)"],
        },
      ],
    });

    setChartOptions2({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Datos de gastos logísticos Part Time",
        },
      },
    });
  };

  useEffect(() => {
    drawchart();
  }, []);

  return (
    <>
      <div>ChartExample</div>
      <Bar options={chartOptions} data={chartData}></Bar>
      <Bar options={chartOptions2} data={chartData2}></Bar>
    </>
  );
};

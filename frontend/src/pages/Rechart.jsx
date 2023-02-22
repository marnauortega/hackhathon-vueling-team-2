import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import styles from "../styles/Chart.module.css";

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
          label: "Gastos Full Time",
          data: [6, 7.25, 10],
          borderColor: "rgb(168, 235, 52)",
          backgroundColor: ["rgba(255, 204, 0, 1)"],
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    });
    setChartData2({
      labels: ["Jardinera", "Equipaje", "Coordinacion"],
      datasets: [
        {
          label: "Gastos Part Time",
          data: [7.25, 7, 10],
          borderColor: "rgb(18, 84, 216)",
          backgroundColor: ["rgba(255, 145, 61, 1)"],
        },
      ],
    });

    setChartOptions2({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
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

      <div className={styles.chart}>
        <Bar options={chartOptions} data={chartData}></Bar>
        <Bar options={chartOptions2} data={chartData2}></Bar>
      </div>
    </>
  );
};

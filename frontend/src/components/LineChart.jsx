import { Line } from "react-chartjs-2";

// This next line is needed to render the chart
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { useRouteLoaderData } from "react-router-dom";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { roundNumber, useIsItDay } from "../utils/functions";

function LineChart() {
  const { overcastWeatherData, currentWeatherData } =
    useRouteLoaderData("weather-layout");

  const hours = overcastWeatherData.list
    .map((hour) => {
      return `${new Date(
        (hour.dt + overcastWeatherData.city.timezone) * 1000
      ).getUTCHours()}h`;
    })
    .slice(0, 8);

  const isItDay = useIsItDay(
    currentWeatherData.dt,
    currentWeatherData.sys.sunrise,
    currentWeatherData.sys.sunset,
    currentWeatherData.timezone
  );

  const temperature = overcastWeatherData.list
    .map((hour) => {
      return roundNumber(hour.main.temp);
    })
    .slice(0, 8);

  const maxY = Math.max(...temperature) + 2;

  const chartData = {
    labels: hours,
    datasets: [
      {
        label: "Temperature",
        borderJoinStyle: "round",
        data: temperature,
        indexAxis: "x",
        tension: 0.3,
        backgroundColor: "#4f6079",
        borderColor: "#4f6079",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        display: true,
        ticks: {
          display: true,
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        max: maxY,

        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      datalabels: {
        color: isItDay ? "#231f20" : "#f5f5f5",
        anchor: "end",
        align: "top",
      },
      tooltip: {
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
}

export default LineChart;

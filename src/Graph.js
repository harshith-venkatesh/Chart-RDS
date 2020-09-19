import React from "react";
import "./styles.css";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const series = [
    {
      name: "Debit",
      data: [30, 40, 50, 20, 80, 20, 70]
    },
    {
      name: "Credit",
      data: [100, 40, 60, 20, 180, 160, 100]
    }
  ];

  const options = {
    markers: {
      colors: ["#f39c12", "#bdc3c7", "#e67e22"]
    },
    theme: {
      colors: ["#f39c12", "#bdc3c7", "#e67e22"]
    },
    chart: {
      height: 350,
      width: 300,
      type: "area"
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#f39c12", "#bdc3c7", "#e67e22"]
      }
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-03-19T00:00:00.000Z",
        "2018-04-19T01:30:00.000Z",
        "2018-05-19T02:30:00.000Z",
        "2018-06-19T03:30:00.000Z",
        "2018-07-19T04:30:00.000Z",
        "2018-08-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  };
  return (
    <>
      <img
        src="https://i.pinimg.com/originals/7b/b1/06/7bb106279febcb95ac85b29e1b97d727.jpg"
        alt="Lakshmi Devi"
        className="logo-god"
      />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </>
  );
}

export default Graph;

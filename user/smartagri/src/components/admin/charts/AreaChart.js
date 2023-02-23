import axios from "axios";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import AppURL from "../../../api/AppURL";

export class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],

      chartOptions: {
        chart: {
            toolbar: {
              show: false,
            },
            dropShadow: {
              enabled: true,
              top: 13,
              left: 0,
              blur: 10,
              opacity: 0.1,
              color: "#4318FF",
            },
          },
          colors: ["#4318FF", "#39B8FF"],
          markers: {
            size: 0,
            colors: "white",
            strokeColors: "#7551FF",
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            shape: "circle",
            radius: 2,
            offsetX: 0,
            offsetY: 0,
            showNullDataPoints: true,
          },
          tooltip: {
            theme: "dark",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            type: "line",
          },
          xaxis: {
            type: "numeric",
            categories: ["JUN", "FEB", "MAR","APR","MAY","JUNE","JUL","AUG", "SEP", "OCT", "NOV","DEC"],
            labels: {
              style: {
                colors: "#A3AED0",
                fontSize: "12px",
                fontWeight: "500",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
          grid: {
            show: false,
            column: {
              color: ["#7551FF", "#39B8FF"],
              opacity: 0.5,
            },
          },
          color: ["#7551FF", "#39B8FF"],
      },
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.UserAreaChartData)
      .then((response) => {
        this.setState({ chartData: response.data });
      })
      .catch((error) => {});
  }

  pieChartOptions = {};

  render() {
    console.log(this.state.chartData)
    return (
      <ReactApexChart
      options={this.state.chartOptions}
      series={this.state.chartData}
      type='area'
      width='100%'
      height='100%'
      />
    );
  }
}

export default AreaChart;

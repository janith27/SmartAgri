import axios from "axios";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import AppURL from "../../../api/AppURL";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],

      chartOptions: {
        labels: ["Farmers", "Instructors", "Suppliers"],
        colors: ["#EC9611", "#F132D1", "#DE0310"],
        chart: {
          width: "50px",
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
        legend: {
          show: true,
        },
        dataLabels: {
          enabled: true,
        },
        hover: { mode: null },
        plotOptions: {
          donut: {
            expandOnClick: false,
            donut: {
              labels: {
                show: false,
              },
            },
          },
        },
        fill: {
          colors: ["#EC9611", "#F132D1", "#DE0310"],
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
      },
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.UserPieChartData)
      .then((response) => {
        this.setState({ chartData: response.data });
      })
      .catch((error) => {});
  }

  pieChartOptions = {};

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        // lables={this.state.lables}
        type="donut"
        width="400px"
      />
    );
  }
}

export default PieChart;

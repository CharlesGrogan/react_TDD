import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "",
      chartData: {
        labels: [
          "Cleveland",
          "Cincinnati",
          "Columbus",
          "Chillocothe",
          "Athens",
          "Wooster",
          "Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [298753, 290201, 305498, 129375, 61302, 16302, 31943],
            backgroundColor: [
              "blue",
              "green",
              "red",
              "yellow",
              "purple",
              "orange",
              "pink"
            ],
            borderWidth: 1,
            borderColor: "black",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    };
  }

  render() {
    return (
      <Doughnut
        //header={this.state.header}
        data={this.state.chartData}
        width={100}
        height={50}
        options={{
          // maintainAspectRatio: false,
          title: {
            display: true,
            text: "O-H-I-O",
            fontSize: 25
          },

          layout: {
            padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: 10
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "#000"
              }
            }
          }
        }}
      />
    );
  }
}

export default Chart;

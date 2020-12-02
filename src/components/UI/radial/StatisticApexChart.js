import ReactApexChart from 'react-apexcharts'
import firebase from "firebase";
import React from 'react'


class StatisticApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Шахсий кабул',
        data: []
      }, {
        name: 'Ёзма мурожатлар',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 33, 45]
      }, {
        name: 'Электрон мурожатлар',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 33,39,]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
      states: []
    };
  }
  async componentDidMount() {
    const statistic = []
    try {
      const response = (await firebase.database().ref(`/users/states`).once('value')).val()
      const states = []
      Object.keys(response).forEach(key => {
        states.push({
          name: response[key].name,
          id: key,
        })
        statistic.push({
          statistic1: response[key].all.statistic1,
          statistic2: response[key].all.statistic2,
          statistic3: response[key].all.statistic3,
        })
        
      })
      this.setState(prevState => ({
        
      }))
      console.log(Object.values(statistic))
    } catch (e) {
      console.log(e)
    }

  }   
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={600} />
      </div>
    )
  }
}
export default StatisticApexChart
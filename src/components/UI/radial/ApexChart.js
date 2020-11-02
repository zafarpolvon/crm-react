import React from 'react'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
  state = {    
    series: [44, 55, 67],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['NOXXI', 'NOXXI', 'NOXXI']
    }
  }
  render() {
    
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
        </div>
      </div>
    )
  }
} 
export default ApexChart
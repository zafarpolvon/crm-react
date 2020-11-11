import React from 'react'
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {   
      series: [],
      all: 0,
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
                label: 'Барчаси',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return (Number(props.props.statistic1) + Number(props.props.statistic2) + Number(props.props.statistic3))
                }
              }
            }
          }
        },
        labels: ['Шахсий қабул', 'Ёзма мурожаатлар', 'Электрон мурожаатлар']
      }
    }
  }
  componentWillMount() {
    const series = [
      String((Number(this.props.props.statistic1) * 100)/ (Number(this.props.props.statistic1) + Number(this.props.props.statistic2) + Number(this.props.props.statistic3))).slice(0, 2), 
      String((Number(this.props.props.statistic2) * 100)/ (Number(this.props.props.statistic1) + Number(this.props.props.statistic2) + Number(this.props.props.statistic3))).slice(0, 2), 
      String((Number(this.props.props.statistic3) * 100)/ (Number(this.props.props.statistic1) + Number(this.props.props.statistic2) + Number(this.props.props.statistic3))).slice(0, 2),
    ]
    this.setState({
      series
    })
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
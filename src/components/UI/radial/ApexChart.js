import React from 'react'
import ReactApexChart from 'react-apexcharts'
class ApexChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {   
      series: [],
        options: {
          chart: {
            width: 400,
            type: 'pie',
          },
          labels: ['Шахсий қабул', 'Ёзма мурожаатлар', 'Электрон мурожаатлар'],
          responsive: [{
            breakpoint: 450,
            options: {
              chart: {
                width: 240
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          
      }
    }
  }
  componentWillMount() {
    const series = [(Number(this.props.props.statistic1)), (Number(this.props.props.statistic2)), (Number(this.props.props.statistic3))]
    this.setState({
      series
    })
  }
  componentWillReceiveProps(nextProps) {
    const series = [(Number(this.props.props.statistic1)), (Number(this.props.props.statistic2)), (Number(this.props.props.statistic3))]
    if(this.props.props != nextProps) {
      this.setState({
        series
      })
    }
  }

  render() {
    return (
      <div>
        <div id="chart" className="text-4xl">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={450} />
        </div>
      </div>
    )
  }
} 
export default ApexChart
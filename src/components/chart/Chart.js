import React, {Component} from 'react'
import ApexChart from '../UI/radial/ApexChart'

class Chart extends Component {
  render() {
    return (
      <div>
        <div className="grid grid-cols-10 gap-2 bg-gray-300 mx-2 rounded-xl mt-8 mb-12">
          <div className="col-span-4 pl-4">
            <ApexChart props={this.props.props} />
          </div>
          <div className="col-span-6 text-gray-800 font-semibold block pl-12">
            <div className="flex mt-8">
              <div style={{background: 'rgba(0, 143, 251, 0.85)'}} className="w-6 h-6 mr-4"></div>
              <div>
                <h3>Шахсий қабул: <b>{this.props.props.statistic1}</b></h3>
              </div>
            </div>
            <div className="flex mt-8">
              <div style={{background: 'rgba(254, 176, 25, 0.85)'}} className="w-6 h-6 mr-4"></div>
              <div>
              <h3>Ёзма мурожаатлар: <b>{this.props.props.statistic2}</b></h3>
              </div>
            </div>
            <div className="flex mt-8">
              <div style={{background: 'rgba(0, 227, 150, 0.85)'}} className="w-6 h-6 mr-4"></div>
              <div>
                <h3>Электрон мурожаатлар: <b>{this.props.props.statistic3}</b></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button style={{background: 'rgba(0, 143, 251, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl ml-3">Посещаемость</button>
          <button style={{background: 'rgba(254, 176, 25, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl">Экзамен</button>
          <button style={{background: 'rgba(0, 227, 150, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl mr-3">Домашние задания</button>
        </div>
      </div>
    )
  }
}
export default Chart

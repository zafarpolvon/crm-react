import React, {Component} from 'react'
import ApexChart from '../UI/radial/ApexChart'

class Chart extends Component {
  render() {
    return (
      <div className="grid grid-cols-10 gap-2 bg-gray-300 mx-2 rounded-xl mt-8 mb-12">
        <div className="col-span-4 pl-4">
          <ApexChart />
        </div>
        <div className="col-span-6 text-gray-800 font-semibold block pl-12">
          <div className="flex mt-8">
            <div style={{background: 'rgba(0, 143, 251, 0.85)'}} className="w-6 h-6 mr-4"></div>
            <div>
              <h3>Посещаемость</h3>
            </div>
          </div>
          <div className="flex mt-8">
            <div style={{background: 'rgba(254, 176, 25, 0.85)'}} className="w-6 h-6 mr-4"></div>
            <div>
              <h3>Экзамен</h3>
            </div>
          </div>
          <div className="flex mt-8">
            <div style={{background: 'rgba(0, 227, 150, 0.85)'}} className="w-6 h-6 mr-4"></div>
            <div>
              <h3>Домашние задания</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Chart

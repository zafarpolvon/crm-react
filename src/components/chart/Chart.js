import React, {Component} from 'react'
import ApexChart from '../UI/radial/ApexChart'
import {NavLink} from 'react-router-dom'


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="grid grid-cols-10 gap-2 bg-gray-300 mx-2 rounded-xl mt-8 mb-12">
          <div className="col-span-4 pl-4">
            <ApexChart props={this.props.props} />
          </div>
          <div className="col-span-6 text-gray-800 font-semibold block pl-12">
            <div className="flex mt-10">
              <div>
                <h3><b>{this.props.props.statistic1}</b></h3>
              </div>
            </div>
            <div className="flex mt-8">
              <div>
              <h3><b>{this.props.props.statistic2}</b></h3>
              </div>
            </div>
            <div className="flex mt-8">
              <div>
                <h3><b>{this.props.props.statistic3}</b></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Chart

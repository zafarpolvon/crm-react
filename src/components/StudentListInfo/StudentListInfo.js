import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class StudentListInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    
  }
  render() {
    return (
      <div className="">
        <nav className="block px-4 pb-2">
          <NavLink className="text-center border-gray-600" to={'/changestatistic/' + this.props.props}>
              <div>
                <h2 className="text-gray-800 ml-12 mb-3 font-bold">Курсаткич</h2>
              </div> 
          </NavLink>
        </nav>    
      </div>
    )
  }
}
export default StudentListInfo
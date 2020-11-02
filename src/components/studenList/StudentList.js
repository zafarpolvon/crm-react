import React, {Component} from 'react'
import List from '../list/List'

class StudentList extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-300 mt-4 rounded-xl pl-8 mx-2">
          <List 
            name={this.props.name}
            img={this.props.img}
            index={this.props.index}
          />
        </div>
      </div>
    )
  }
}
export default StudentList
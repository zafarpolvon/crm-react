import React, {Component} from 'react'

class List extends Component {
  render() {

    return (
      <div className="grid grid-cols-6 gap-2 py-2">
        <div className="col-span-2">
          <img className="object-cover h-16 w-16 rounded-full" src={this.props.img} alt={this.props.index} />
        </div>
        <div className="col-span-4 pt-4 text-gray-800 font-semibold">
          <h2>{ this.props.name }</h2>
        </div>
      </div>
    )
  }
}
export default List
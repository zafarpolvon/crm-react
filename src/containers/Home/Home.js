import React, {Component} from 'react'
import StudentList from '../../components/studenList/StudentList'
import Messages from '../../components/messages/Messages'
import Chart from '../../components/chart/Chart' 

class Home extends Component {
  state = {
    students: [
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 1
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 2
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 3
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
    ]
  }
  render() {
    let users = null
    users = this.state.students.map((car, index) => {
      return (
        <StudentList 
          name={car.name}
          img={car.img}
          index={index}
          key={index}
        />
      )
    })

    return (
      <div className="grid grid-cols-12 gap-2 h-screen">
        <div className="col-span-3 bg-gray-100">
          <div className="mt-8 pl-8 block">
            <h2 className="text-blue-500 text-4xl font-bold">CRM</h2>
          </div>
          <div className="bg-gray-300 mt-4 rounded-xl pl-8 mx-2">
            <Messages />
          </div>
        </div>
        <div className="col-span-6 bg-gray-100">
          <div className="mt-8 text-right">
            <i className="fas fa-cog text-right text-gray-800 text-4xl mr-4"></i>
          </div>
          <div>
            <Chart />
            <div className="flex justify-between">
              <button style={{background: 'rgba(0, 143, 251, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl ml-3">Посещаемость</button>
              <button style={{background: 'rgba(254, 176, 25, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl">Экзамен</button>
              <button style={{background: 'rgba(0, 227, 150, 0.85)'}} className="w-56 h-12 text-white text-xl font-semibold outline-none rounded-xl mr-3">Домашние задания</button>
            </div>

          </div>
        </div>
        <div className="col-span-3 bg-gray-100 overflow-y-auto h-full">
          <h2 className="mt-8 mb-8 pl-2 font-semibold text-gray-800 text-2xl">Ученики:</h2>
          { users }
        </div>
      </div>
    )
  }
}
export default Home
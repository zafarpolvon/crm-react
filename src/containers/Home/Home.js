import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import StudentList from '../../components/studenList/StudentList'
import Student from '../student/Student'
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
        name: 'Sevara Mahmudjonova',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 2
      },
      {
        name: 'Zafarbek Polvonboyev',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 3
      },
      {
        name: 'Ruhsora Polvonboyeva',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Habibullaev Shaxzod',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Habibullaev Mirzohid',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Sadullaev Rasulbek',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
      {
        name: 'Rahimova Feruza',
        img: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        id: 4
      },
    ]
  }
  render() {
    // let users = null
    // users = this.state.students.map((car, index) => {
    //   return (
    //     <StudentList 
    //       name={car.name}
    //       img={car.img}
    //       id={car.id}
    //       key={index}
    //     />
    //   )
    // })
    let routes = (
        <Switch>
          <Route 
            path="/student/:id" 
            component={Student}
          />
        </Switch>
    )
    return (
      <div>
        <div className="grid grid-cols-12 gap-2 h-screen">
          <div className="col-span-9 overflow-y-auto h-full bg-gray-100 pl-16 pr-2 pb-8">
            <h3 className="text-center text-gray-800 mt-4 text-3xl font-semibold">Асосий кўрсаткичлар</h3>
            { routes }
          </div>
          <div className="col-span-3 bg-gray-100 overflow-y-auto h-full px-2">
            <h2 className="mt-8 mb-8 pl-2 font-semibold text-gray-800 text-2xl">Список городов:</h2>
            <StudentList props={this.state.students} />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
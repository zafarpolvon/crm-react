import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from 'firebase'
import StudentListInfo from '../StudentListInfo/StudentListInfo';
import Loader from 'react-loader-spinner'


class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      students: [],
      loading: true
    };
  }

  toggleClass(index, e) {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index
    });
  }
  async componentDidMount() {
    try {
      const response = (await firebase.database().ref(`/users/states`).once('value')).val()
      const students = [] 
      Object.keys(response).forEach(key => {
        students.push({
          name: response[key].name,
          downloadURL: response[key].downloadURL,
          district: response[key].district,
          id: key
        })
      })

      this.setState({
        students,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div className="">
        { this.state.loading ?
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //3 secs
            className="ml-32"
        
          />
          :this.state.students.map((quiz, index) => {
            return (
              <div
                className="bg-gray-300 px-4 rounded-xl mb-4"
                key={quiz.id}
              >
                <div>
                  <div className="flex justify-between py-2 cursor-pointer" >
                    <img className="object-cover h-16 w-16 rounded-full" src={quiz.downloadURL} alt="" />
                    <NavLink to={'/student/' + quiz.id} key={quiz.id} className="pt-4 text-gray-800 font-semibold">
                      <h2>{quiz.name}</h2>
                    </NavLink>
                    <button type="button" class="text-white hover:text-gray-400 focus:text-gray-200 focus:outline-none" onClick={this.toggleClass.bind(this, index)}>
                      {this.state.activeIndex  === index 
                        ?<i class="fas fa-caret-down text-gray-800 text-2xl"></i> 
                        :<i class="fas fa-caret-left text-gray-800 text-2xl"></i>
                      }
                    </button> 
                  </div>
                  {this.state.activeIndex === index && (
                    <StudentListInfo props={quiz.id} />
                  )}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default StudentList 
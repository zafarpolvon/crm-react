import React, {Component} from 'react'
import axios from 'axios'
import Chart from '../../components/chart/Chart'
import StudentList from '../../components/studenList/StudentList';
import Loader from 'react-loader-spinner'



class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
     student: {},
     loading: true
    };
  }
  async componentDidMount() {
      try {
        const response = await axios.get(`https://crm-react-school.firebaseio.com/users/states/${this.props.match.params.id}.json`)
        const student = response.data
        this.setState({
          student,
          loading: false
        })
      } catch(e) {
        console.log(e)
      }
  }
  async componentDidUpdate() {
    try {
      const response = await axios.get(`https://crm-react-school.firebaseio.com/users/states/${this.props.match.params.id}.json`)
      const student = response.data
      this.setState({
        student,
        loading: false
      })      
    } catch(e) {
      console.log(e)
    }
    return
  }
  render() {
    return (
      <div>
        <div class="grid grid-cols-12 gap-2 h-screen">
          { this.state.loading?
            <div className="col-span-9 overflow-y-auto h-full bg-gray-100 pl-16 pr-2 pb-8">
              <div className="ml-64 mt-64">
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000} //3 secs
                  className="ml-64"
                />
              </div>
            </div>
            :<div class="col-span-9 overflow-y-auto h-full bg-gray-100 pl-16 pr-2 pb-8">
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-3 flex pt-8">
                  <div className="block">
                    <img className="w-24 h-24 object-cover mx-4 rounded-full" src={this.state.student.downloadURL} alt="" />
                  </div>
                  <div className="block">
                    <h2 className="text-2xl  font-semibold ml-4 text-gray-800 mt-6">{this.state.student.name}</h2>
                    <p className="ml-4 text-gray-800">Давлат солиқ бошқармаси</p>
                  </div>
                </div>
                <div className="col-span-3 mt-6">
                  <p className="text-xl text-center text-gray-800 mt-8"><b className="font-semibold">Адрес:</b> {this.state.student.address}</p>
                </div>
              </div>
              <div className="pl-4 pt-8">
                <h2 className="text-2xl text-gray-800 font-semibold">Алока</h2>
                <div className="flex text-gray-800 text-xl">
                  <i class="fas fa-phone-square-alt pt-2 pr-2"></i>
                  <p>Телефон: {this.state.student.number}</p>
                </div>
                <div className="flex text-gray-800 text-xl">
                  <i class="fas fa-envelope pt-2 pr-2"></i>
                  <p>E-mail: {this.state.student.email}</p>
                </div>
                <h2 className="text-2xl text-gray-800 font-semibold mt-4">Раҳбарият</h2>
                <div className="flex text-gray-800 text-xl">
                  <i class="fas fa-user pt-1 pr-2"></i>
                  <p className="text-sm pt-1">Давлат солиқ бошқармаси бошлиғи <br/> <b className="text-xl">{this.state.student.director}</b></p>
                </div>
                <div className="flex text-gray-800 text-xl">
                  <i class="fas fa-user pt-1 pr-2"></i>
                  <p className="text-sm pt-1">Бошлиқнинг биринчи ўринбосари  <br/> <b className="text-xl">{this.state.student.director2}</b></p>
                </div>
              </div>
              <Chart props={this.state.student.all} />
            </div>
          }
          <div class="col-span-3 bg-gray-100 overflow-y-auto h-full px-2">
            <h2 className="mt-8 mb-8 pl-2 font-semibold text-gray-800 text-2xl">Ҳудудий органлар</h2>
            <StudentList />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    )
  }
}
export default Student
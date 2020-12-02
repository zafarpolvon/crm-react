import React, {Component} from 'react'
import firebase from "firebase";
import StatisticApexChart from '../../components/UI/radial/StatisticApexChart'

class Statistics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],      
    }
  }
  // async componentDidMount() {
  //   try {
  //     const response = (await firebase.database().ref(`/users/states`).once('value')).val()
  //     const states = [] 
  //     Object.keys(response).forEach(key => {
  //       states.push({
  //         name: response[key].name,
  //         id: key,
  //         statistic1: response[key].statistic1,
  //         statistic2: response[key].statistic2,
  //         statistic3: response[key].statistic3,
  //       })
  //     })
  //     // const state = response.data
  //     // const value1 = state.all.statistic1
  //     // const value2 = state.all.statistic2
  //     // const value3 = state.all.statistic3
  //     this.setState(prevState => ({
  //       // formControls: {
  //       //   ...prevState.formControls,
  //       //   statistic1: {
  //       //     ...prevState.statistic1,
  //       //     value: value1,
  //       //     label: '1. Шахсий кабул'
  //       //   },
  //       //   statistic2: {
  //       //     ...prevState.statistic2,
  //       //     value: value2,
  //       //     label: '2. Ёзма мурожат'
  //       //   },
  //       //   statistic3: {
  //       //     ...prevState.statistic3,
  //       //     value: value3,
  //       //     label: '3. Электрон мурожат'

  //       //   }
  //       // },
  //       states
  //     }))
  //   } catch (e) {
  //     console.log(e)
  //   }

  // }   


  render() {
    console.log(this.state.states)
    return(
      <div>
        <h2 className="text-center text-2xl text-gray-800 font-semibold mb-4">Ҳудудий органларни статистикаси</h2>
        <div className="pl-16 pt-8">
          <StatisticApexChart />
        </div>
      </div>
    )
  } 
}

export default Statistics

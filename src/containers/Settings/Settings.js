import React, { Component } from 'react'
import firebase from 'firebase'
import StudentList from '../../components/studenList/StudentList'
import { NavLink } from 'react-router-dom'

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        userName: {
          value: '',
          type: 'text',
          label: 'Исм Фамилия',
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        }
      },
			hasAccount: false,
			data: {}
    }
	}
	componentDidMount = async () => {
		const uid = this.getUid()
		try {
			const info = (await firebase.database().ref(`/users/info/${uid}`).once('value')).val() || {}
			this.setState({
				data: info
			})
		} catch (e) {
			console.log(e)
		}
  }
  componentDidUpdate = async () => {
		const uid = this.getUid()
		try {
			const info = (await firebase.database().ref(`/users/info/${uid}`).once('value')).val() || {}
			this.setState({
				data: info
			})
		} catch (e) {
			console.log(e)
		}
	}
	getUid() {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
	}
	logout = async (event) => {
    await firebase.auth().signOut()
    event.preventDefault();
	}
  render() {
    return (
      <div>
				<div className="grid grid-cols-12 gap-2 h-screen">
          <div className="col-span-9 overflow-y-auto h-full bg-gray-100 pl-16 pr-2 pb-8">
            <h3 className="text-center text-gray-800 mt-4 text-3xl font-semibold">Асосий кўрсаткичлар</h3>
						<div className="grid grid-cols-6 pt-20">
						<div className="col-span-2">
							<img className="w-32 h-32 object-cover rounded-full mx-auto" src="https://cache.net-a-porter.com/content/images/story-body-content-V1-0-1537350316166.jpeg/w1900_q65.jpeg" alt="img" />
						</div>
						<div className="col-span-3">
							<div className="block">
								<h4 className="text-2xl text-gray-800 font-semibold">{this.state.data.name}</h4>
								<p className="text-gray-800 text-xl">E-mail: {this.state.data.email}</p>
							</div>
						</div>
						<div className="col-span-1">
							<NavLink to="/auth" onClick={this.logout}>
							<i class="fas fa-sign-out-alt text-2xl pt-1 text-gray-800"></i>
							</NavLink>
						</div>
						</div>
          </div>
          <div className="col-span-3 bg-gray-100 overflow-y-auto h-full px-2">
            <h2 className="mt-8 mb-8 pl-2 font-semibold text-gray-800 text-2xl">Ученики:</h2>
            <StudentList />
          </div>
        </div>
      </div>
    )
  }
}
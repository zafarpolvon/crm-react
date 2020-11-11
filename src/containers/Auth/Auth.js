import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import firebase from 'firebase'
import { NavLink } from 'react-router-dom'

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          label: 'Email',
          errorMessage: 'Введите корректный email',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          label: 'Пароль',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      },
      hasAccount: false
    }
  }
  componentDidMount() {
    var user = firebase.auth().currentUser;
    console.log(user)
  }
  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }
  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }
  loginHandler = async () => {
    const formData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value
    }
    try {
      await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      
      this.setState({
        hasAccount: true
      })
    } catch (e) {
      console.log(e)
    }
    const user = firebase.auth().currentUser;
      console.log(user)
  }
  render() {
    return (
      <div className="px-24 pt-20">
        <div className="bg-white shadow-2xl rounded pt-6 pb-8 mb-4 flex flex-col px-24 w-3/6 mx-auto">
          <img className="w-24 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/crm-react-school.appspot.com/o/logo.png?alt=media&token=8cdd2ebe-556a-4bf5-ae56-0c7fcfb61037" />
          <h2 className="text-center text-gray-800 font-semibold mb-8 text-2xl">Сайтга кириш</h2>
            <div className="mb-4">
              {this.renderInputs()}
            </div>
            <div className="text-center">
              <NavLink
                to="/settings"  
                className="bg-blue hover:bg-blue-dark text-white font-bold py-3 bg-green-500 px-8 rounded" 
                type="button"
                onClick={this.loginHandler}
              >
                Кириш
              </NavLink>
            </div>
        </div>
      </div>
    )
  }
}
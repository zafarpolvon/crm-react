import React, {Component} from 'react'
import firebase from "firebase";
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import {NavLink} from 'react-router-dom'

import axios from 'axios'

class Statistics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        statistic1: {
          value: props.val,
          type: 'number',
          label: '',
          errorMessage: 'Введите корректный email',
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        },
        statistic2: {
          value: '',
          type: 'number',
          label: '',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        },
        statistic3: {
          value: '',
          type: 'number',
          label: '',
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        },
      },
      state: {},
    }
  }
  async componentDidMount() {
    try {
        const response = await axios.get(`https://crm-react-school.firebaseio.com/users/states/${this.props.match.params.id}.json`)
        const state = response.data
        const value1 = state.all.statistic1
        const value2 = state.all.statistic2
        const value3 = state.all.statistic3

        this.setState(prevState => ({
          formControls: {
            ...prevState.formControls,
            statistic1: {
              ...prevState.statistic1,
              value: value1,
              label: '1. Шахсий кабул'
            },
            statistic2: {
              ...prevState.statistic2,
              value: value2,
              label: '2. Ёзма мурожат'
            },
            statistic3: {
              ...prevState.statistic3,
              value: value3,
              label: '3. Электрон мурожат'

            }
          },state
        }))
      } catch(e) {
        console.log(e)
      }
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
  createStateHandler = async () => {
    if(!this.validateControl()) {
      this.setState({
        isFormValid: false
      })
      return
    }
    const uid = this.props.match.params.id
    await firebase.database().ref(`/users/states/${uid}/all`).update({
      statistic1: this.state.formControls.statistic1.value,
      statistic2: this.state.formControls.statistic2.value,
      statistic3: this.state.formControls.statistic3.value
    })
  }
  render() {
    return(
      <div>
        <h2 className="text-center text-2xl text-gray-800 font-semibold mb-4">{this.state.state.name} статистикаси</h2>
        <div className="grid grid-cols-1 gap-4 h-full pt-8 pl-24 pr-8">

          {this.renderInputs()}
          <div className="text-left">
            <NavLink to={'/student/' + this.props.match.params.id} type="button" class="mt-8 bg-blue-500 text-gray-100 rounded hover:bg-blue-400 px-6 py-2 w-40 text-xl focus:outline-none" onClick={this.createStateHandler}>Юклаш</NavLink>
          </div>
        </div>
      </div>
    )
  } 
}

export default Statistics

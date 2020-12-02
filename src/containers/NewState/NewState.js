import React, {Component} from 'react'
import firebase from "firebase";
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

class NewDocument extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        name: {
          value: '',
          type: 'text',
          label: '1. Худуд номи',
          errorMessage: 'Худуд номи 5 та харфдан куп булиши керак!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5
          }
        },
        address: {
          value: '',
          type: 'text',
          label: '2. Манзил',
          errorMessage: 'Манзил номи 5 та харфдан куп булиши керак!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5
          }
        },
        number: {
          value: '',
          type: 'tel',
          label: '3. Телефон номер +998977654321',
          errorMessage: 'Телефон ракам +998977654321 булиши керак!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 13,
            maxLength: 13
          }
        },
        email: {
          value: '',
          type: 'email',
          label: '4. E-mail',
          errorMessage: 'Хато Email!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        director: {
          value: '',
          type: 'text',
          label: '5. Давлат солиқ бошқармаси бошлиғи',
          errorMessage: '5 та харфдан куп булиши керак!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5,
          }
        },
        director2: {
          value: '',
          type: 'text',
          label: '6. Бошлиқнинг биринчи ўринбосари',
          errorMessage: '5 та харфдан куп булиши керак!',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5,
          }
        },
      },
      downloadURL: null,
      showResults: false
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('https://crm-react-school.firebaseio.com/users/students.json')
      const states = [] 
      Object.values(response.data).forEach((key, index) => {
        states.push({
          id: index,
          name: key.name,
          states: key.states
        })
      })
      this.setState({
        states
      })
    } catch (e) {
      console.log(e)
    }
  }   
  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }
    const state = this.s

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid, state
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
    if (validation.maxLength) {
      isValid = value.length <= validation.maxLength && isValid
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
    await firebase.database().ref(`/users/states`).push({
      name: this.state.formControls.name.value,
      director: this.state.formControls.director.value,
      director2: this.state.formControls.director2.value,
      address: this.state.formControls.address.value,
      email: this.state.formControls.email.value,
      number: this.state.formControls.number.value,
      downloadURL: this.state.downloadURL,
      all: {
        statistic1: 0,
        statistic2: 0,
        statistic3: 0,
      },
      district: [
        {}
      ]
    })
  }
  onFileSelected = (event) => {
    const file = event.target.files[0]
    var storageRef = firebase.storage().ref(`users/states` + file.name);
    let uploadTask = storageRef.put(file);
    uploadTask.on('state_changed', (snapshot) =>{
      console.log(snapshot)
    }, (error) => {
      console.log(error)
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.setState({
          downloadURL
        })        
      })
    })
  }
  check = () => {
    this.setState({
      showResults: true
    })
  }
  render() {
    console.log(this.state.downloadURL)
    return(
      <div>
        <h2 className="text-center text-2xl text-gray-800 font-semibold mb-4">Ҳудудий органларни кушиш</h2>
        <div className="grid grid-cols-2 gap-4 h-full pl-24 pr-8">
          {this.renderInputs()}
          <div>
            <label className="text-gray-800 text-xl font-semibold">8. Расм</label>
            <img className="object-cover w-24 h-24 mb-4 mt-2 rounded-full bg-gray-500" src={this.state.downloadURL} alt="" />
            <input onChange={this.onFileSelected} type="file" class="w-full h-12 text-gray-700 px-3 py-2 border rounded"></input>
          </div>
          <div className="text-left">
            { this.state.isFormValid ?
              <NavLink to="/" type="button" class="mt-24 bg-green-500 text-gray-100 rounded hover:bg-green-400 px-6 py-2 w-40 text-xl focus:outline-none" onClick={this.createStateHandler}>Юклаш</NavLink>
              :<div>
                {this.state.showResults ?
                  <p className="-mt-4 mb-4 text-red-600">Поле не должно быть пустым!</p>
                  : null
                }
                <button type="button" class="mt-24 bg-green-500 text-gray-100 rounded hover:bg-green-400 px-6 py-2 w-40 text-xl focus:outline-none" onClick={this.check}>Юклаш</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  } 
}

export default NewDocument

import React, {Component} from 'react'
import firebase from "firebase";
import Input from '../../components/UI/Input/Input'
import Loader from 'react-loader-spinner'
import { BitlyClient } from 'bitly-react';
import { NavLink } from 'react-router-dom';
const bitly = new BitlyClient('4c3e6621742c3211995816d24d7996ccc600c958', {});

class NewDocument extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFormValid: false,
      formControls: {
        name: {
          value: '',
          type: 'text',
          label: '1. Кодекс',
          errorMessage: 'Кодекс номи 5 та харфдан куп булиши керак',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5
          }
        },
        name2: {
          value: '',
          type: 'text',
          label: '2. Манба',
          errorMessage: 'Манба номи 5 та харфдан куп булиши керак',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 5
          }
        },
        name3: {
          value: '',
          type: 'date',
          label: '3. Кучга кириш санаси',
          errorMessage: 'Введите корректный Время',
          valid: false,
          touched: false,
          validation: {
            required: true,
          }
        }
      },
      downloadURL: null,
      active: '',
      loading: false,
      showResults: false

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
  createStateHandler = async () => {
    await firebase.database().ref(`/users/documents`).push({
      name: this.state.formControls.name.value,
      name2: this.state.formControls.name2.value,
      name3: this.state.formControls.name3.value,
      active: this.state.active,
      downloadURL: this.state.downloadURL,
    })
  }
  onFileSelected = async (event) => {
    this.setState({
      loading: true
    })
    const file = event.target.files[0]
    var storageRef = firebase.storage().ref(`users/documents` + file.name);
    let uploadTask = storageRef.put(file);
    uploadTask.on('state_changed', (snapshot) =>{
      console.log(snapshot)
    }, (error) => {
      console.log(error)
    }, () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        bitly.shorten(downloadURL)
          .then((result) => {
            const downloadURL = result.url
            this.setState({
              downloadURL,
              loading: false
            })
          })
          .catch(function(error) {
            console.error(error);
          });
      })
    })
    
  }
  onChangeFunc = (event) => {
    const active = event.target.value
    this.setState({
      active
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
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 pt-8">Хужжат юклаш</h2>
        </div>
        <div className="pl-24 pr-8">
          {this.renderInputs()}
          <div class="flex">
            <div class="flex items-center mb-2 mr-4">
              <input onChange={this.onChangeFunc} value="true" type="radio" id="radio-example-1" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
              <label for="radio-example-1" class="text-gray-600">Кучда</label>
            </div>
            <div class="flex items-center mb-2">
              <input onChange={this.onChangeFunc} value="false" type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
              <label for="radio-example-2" class="text-gray-600">Кучини йокатган</label>
            </div>
          </div>
          <input onChange={this.onFileSelected} type="file" className="w-full text-gray-700 px-3 py-2 border rounded" />
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={50}
            className="absolute -mt-2"
            visible={this.state.loading}
          />
          { this.state.isFormValid ?
            <NavLink to="/documents" type="button" class="mt-8 bg-green-500 text-gray-100 rounded hover:bg-green-400 px-6 py-2 w-40 text-xl focus:outline-none" onClick={this.createStateHandler}>Юклаш</NavLink>
            :<div>
              {this.state.showResults ?
                <p className=" mb-4 text-red-600">Поле не должно быть пустым!</p>
                : null
              }
              <button type="button" class="mt-8 bg-green-500 text-gray-100 rounded hover:bg-green-400 px-6 py-2 w-40 text-xl focus:outline-none" onClick={this.check}>Юклаш</button>
            </div>
          }
        </div>
      </div>
    )
  } 
}

export default NewDocument

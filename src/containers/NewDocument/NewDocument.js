import React, {Component} from 'react'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class NewDocument extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      info: "",
      date: "",
      isUploading: false,
      isActive: true,
      fileUrl: ""
    }
  }
  render() {
    return(
      <div>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 pt-8">Хужжат юклаш</h2>
        </div>
        <div className="pl-24 pr-8">
          <label className="text-gray-800 text-xl font-semibold">Кодекс</label>
          <input type='text' placeholder="Кодекс" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
          <label className="text-gray-800 text-xl font-semibold">Манба</label>
          <input type='text' placeholder="Кодекс" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
          <label className="text-gray-800 text-xl font-semibold">Кучга кириш санаси</label>
          <input type='text' placeholder="Кодекс" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500" />
          <div class="flex">
            <div class="flex items-center mb-2 mr-4">
              <input type="radio" id="radio-example-1" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
              <label for="radio-example-1" class="text-gray-600">Кучда</label>
            </div>
            <div class="flex items-center mb-2">
              <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
              <label for="radio-example-2" class="text-gray-600">Кучини йокатган</label>
            </div>
          </div>
          <input type="file" className="w-full text-gray-700 px-3 py-2 border rounded" />
          <button type="button" class="mt-8 bg-green-500 text-gray-100 rounded hover:bg-green-400 px-6 py-2 text-xl focus:outline-none">Юклаш</button>
        </div>
      </div>
    )
  } 
}

export default NewDocument

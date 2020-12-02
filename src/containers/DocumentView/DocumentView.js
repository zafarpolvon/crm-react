import React, {Component} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { Link } from 'react-router-dom';



class DocumnetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     document: {},
     loading: true
    };
  }
  async componentDidMount() {
      try {
        const response = await axios.get(`https://crm-react-school.firebaseio.com/users/documents/${this.props.match.params.id}.json`)
        const document = response.data
        this.setState({
          document,
          loading: false
        })
      } catch(e) {
        console.log(e)
      }
  }
  render() {
    return (
      <div>
        <div className="grid grid-cols-12 gap-2 h-screen pl-20 bg-gray-100">
          <div className="col-span-8 overflow-y-auto h-full">
            <div className="h-full">
              <iframe
                className="w-full h-full"
                src={`http://docs.google.com/gview?url=${this.state.document.downloadURL}&embedded=true`}
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="block px-8">
              <h2 className="text-gray-800 text-3xl font-semibold">Документ</h2>
              <h3 className="text-gray-800 text-2xl font-semibold mt-4">Кодекс: {this.state.document.name}</h3>
              <p className="text-gray-800 text-xl mt-4">Манба: {this.state.document.name2}</p>
              <p className="text-gray-800 text-xl mb-4">Кучга кириш санаси: {this.state.document.name3}</p>
              { this.state.document.active === "true" ?
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 mb-8 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative text-xs">Кучда</span>
                </span>
                : 
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 mb-8 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                  <span className="relative text-xs">Муддати утган</span>
                </span>
              }
              <hr/>
              <div className="mt-8">
                <a href={this.state.document.downloadURL}>
                  <button className="bg-green-400 text-white px-4 rounded-md py-2">Кучириб олиш</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DocumnetView
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import firebase from 'firebase'

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      loading: true,
      filteredData: [],
      query: '',
    };
  }
  handleInputChange = event => {
    const query = event.target.value;
    this.setState({
      query
    })
    
  };
  getData = async() => {
    try {
      const response = (await firebase.database().ref(`/users/documents`).once('value')).val()
      const documents = [] 
      Object.keys(response).forEach(key => {
        documents.push({
          name: response[key].name,
          name2: response[key].name2,
          name3: response[key].name3,
          active: response[key].active,
          id: key
        })
      })
      const { query } = this.state;
      const filteredData = documents.filter((element, key) => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({
        loading: false,
        filteredData
      })
    } catch (e) {
      console.log(e)
    }
  }
  componentWillUpdate() {
    this.getData();
  }
  componentWillMount() {
    this.getData();
  }
  render() {
    return(
      <div>
        <div className="mx-auto">
          <div className="mx-auto">
            <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg pl-20">
              <div className="flex justify-between">
                  <div className="inline-flex border rounded w-2/5 h-12 bg-transparent">
                      <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                        <div className="flex">
                            <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-dark text-sm">
                            <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <input 
                              value={this.state.query}
                              onChange={this.handleInputChange} 
                              type="text" 
                              className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xl  text-gray-500 font-thin" placeholder="Кидириш" 
                        />
                      </div>
                  </div>
              </div>
            </div>
          </div>
            <div className="overflow-x-auto pl-12">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Кодекс</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Манба</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Кучда</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Кучга кириш санаси</th>
                      <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                    </tr>
                  </thead>
                  {
                    this.state.filteredData.map((doc, index) => {

                      return (
                        <tbody className="bg-white">
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm leading-5 text-gray-800">{index + 1}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4  border-b border-gray-500">
                              <div className="text-sm leading-5 text-blue-900">{doc.name}</div>
                            </td>
                            <td className="px-6 py-4 border-b text-blue-900 border-gray-500 text-sm leading-5">{doc.name2}</td>
                            { doc.active === "true"
                            ?
                              <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">Кучда</span>
                              </span>
                              </td> 
                            : <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                  <span className="relative text-xs">Муддати утган</span>
                                </span>
                              </td>
                            }
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{doc.name3}</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                              <NavLink to={'/documentview/' + doc.id} key={doc.id}>
                                <button className="px-5 py-2 border-blue-500 border text-blue-400 rounded transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">Куриш</button>
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      )
                    })
                  }
                  <div className="absolute right-0 bottom-0">
                    <NavLink to={'/NewDocument'}>
                      <button  className="text-white w-16 h-16 rounded-full bg-blue-500 mb-6 mr-6 ">
                        <i class="fas fa-plus text-2xl"></i>
                      </button>
                    </NavLink>
                  </div>
              </table>
            </div>
            
          </div>
        </div>
      </div>
    )
  } 
}

export default Documents

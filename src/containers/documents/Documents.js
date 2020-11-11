import React, {Component} from 'react'
import Search from '../../components/UI/Search/Search'
import {NavLink} from 'react-router-dom'

class Documents extends Component {
  render() {
    return(
      <div>
        <div className="mx-auto">
          <Search />
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
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm leading-5 text-gray-800">#1</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-blue-900">Ўзбекистон Республикасининг Солиқ кодекси</div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">Манба: ҚҲММБ, 31.12.2019 й., 02/19/СК/4256-сон</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span className="relative text-xs">Кучда</span>
                      </span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">01.01.2020</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button className="px-5 py-2 border-blue-500 border text-blue-400 rounded transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">Куриш</button>
                      </td>
                    </tr>
                    
                  </tbody>
              </table>
            </div>
            <div className="absolute right-0 bottom-0">
              <NavLink to={'/NewDocument'}>
                <button  className="text-white w-16 h-16 rounded-full bg-blue-500 mb-6 mr-6 ">
                  <i class="fas fa-plus text-2xl"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default Documents

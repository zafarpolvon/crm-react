import React, {Component} from 'react'
class Search extends Component {
  render() {
    return(
      <div>
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
                    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xl  text-gray-500 font-thin" placeholder="Search" />
                  </div>
              </div>
          </div>
      </div>
        </div>
      </div>
    )
  } 
}

export default Search

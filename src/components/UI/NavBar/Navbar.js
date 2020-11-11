import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    return (
      <nav className="flex absolute h-full w-auto">
        <div className="flex px-4 py-3 p-0 bg-blue-500">
          <div className="block z-20">
            <button type="button" class="block text-white hover:text-gray-400 focus:text-gray-200 focus:outline-none" onClick={this.toggle}>
              <i className="fas fa-bars text-4xl"></i>
            </button>
            <NavLink to="/" className="bottom-0 mb-6 ml-2 left-0 absolute">
              <img className="w-12" alt="" src="https://firebasestorage.googleapis.com/v0/b/crm-react-school.appspot.com/o/logo.png?alt=media&token=8cdd2ebe-556a-4bf5-ae56-0c7fcfb61037" />
            </NavLink>
          </div>
        </div>
          {this.state.on && (
            <nav style={{width: "320px"}} className="block bg-blue-500 absolute h-full pt-20 z-10 px-4">
              <NavLink onClick={this.toggle} to="/" className="text-left flex mt-6 border-gray-600">
                <i class="fas fa-home pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold ">Бош сахифа</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/authcreate" className="text-left flex mt-6">
                <i class="fas fa-user pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Регистрация</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/auth" className="text-left flex mt-6">
                <i class="fas fa-sign-in-alt pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Сайтга кириш</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/Documents" className="text-left flex mt-6">
                <i class="fas fa-file-word pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Меъёрий ҳужжатлар</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/NewState" className="text-left flex mt-6">
                <i class="fas fa-atlas pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Ҳудудий органлар</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/statistics" className="text-left flex mt-6">
                <i class="fas fa-chart-pie pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Кўрсаткичлар</h2>
              </NavLink>
              <NavLink onClick={this.toggle} to="/settings" className="text-left flex mt-6">
                <i class="fas fa-cog pr-3 pt-2 text-white text-xl"></i>
                <h2 className="text-white text-xl font-bold">Созламалар</h2>
              </NavLink>
            </nav>
          )}
      </nav>
    )
  }
}
export default Navbar

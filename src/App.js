import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/Home/Home'
import Documents from './containers/documents/Documents'
import Navbar from './components/UI/NavBar/Navbar'
import NewDocument from './containers/NewDocument/NewDocument'
import Student from './containers/student/Student'
import Chart from './components/chart/Chart'
import Auth from './containers/Auth/Auth'
import NewState from './containers/NewState/NewState'
import EditState from './containers/EditState/EditState'
import AuthCreate from './containers/AuthCreate/AuthCreate'
import Settings from './containers/Settings/Settings'
import Statistics from './containers/Statistics/Statistics'
import ChangeStatistic from './containers/ChangeStatistic/ChangeStatistic'

import firebase from 'firebase'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     auth: null
  //   }
  // }
  // async componentDidMount() {
  //   const auth = await firebase.auth().currentUser
  //   this.setState({
  //     auth: auth
  //   })
  // }
   
  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/authcreate" exact component={AuthCreate} />
    //     <Route path="/auth" exact component={Auth} />
    //   </Switch>
    // )
    // if(this.state.auth) {
      let routes = (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Documents" component={Documents} />
          <Route exact path="/" component={Chart} />
          <Route path="/auth" exact component={Auth} />
          <Route exact path="/NewState" component={NewState} />
          <Route exact path="/editstate" component={EditState} />
          <Route path="/changestatistic/:id" component={ChangeStatistic} />
          <Route exact path="/statistics" component={Statistics} />
          <Route path="/settings" component={Settings} />
          <Route path="/authcreate" exact component={AuthCreate} />
          <Route path="/NewDocument" exact component={NewDocument} />
          <Route path="/student/:id" exact component={Student} />
        </Switch>
      )
      // }
    return(
      <BrowserRouter>
        <Navbar />
        { routes }
      </BrowserRouter> 
    )
  }
}


export default App

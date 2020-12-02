import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
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
import DocumentView from './containers/DocumentView/DocumentView'

   
import firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
  };

  this.authListener = this.authListener.bind(this);

}

componentDidMount() {
  this.authListener();
}

authListener() {
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
          this.setState({
              loggedIn: true
          })
      } else {
        // No user is signed in.
          this.setState({
              loggedIn: false
          });
      }
  });

}
  render() {
    console.log(this.state.loggedIn)
    let routes = (
      <Switch>
        <Route path="/authcreate" exact component={AuthCreate} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    )
    let routes1 = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Documents" component={Documents} />
        <Route exact path="/" component={Chart} />
        <Route path="/auth" exact component={Auth} />
        <Route exact path="/NewState" component={NewState} />
        <Route exact path="/editstate" component={EditState} />
        <Route path="/changestatistic/:id" component={ChangeStatistic} />
        <Route path="/documentview/:id" component={DocumentView} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/settings" component={Settings} />
        <Route path="/authcreate" exact component={AuthCreate} />
        <Route path="/NewDocument" exact component={NewDocument} />
        <Route path="/student/:id" exact component={Student} />
      </Switch>
    )
    return(
      <div>
        <Navbar auth={this.state.loggedIn} />
        {!this.state.loggedIn ?
        routes
        : routes1
      }
      </div>
    )
  }
}


export default App

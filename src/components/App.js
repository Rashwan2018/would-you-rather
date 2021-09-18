import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'

import 'semantic-ui-css/semantic.min.css';

import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import HomePage from './HomePage';                          
import NewQuestion from './NewQuestion';
import LogIn from './LogIn';
import LeaderboardBox from './LeaderboardBox';
import Err from './Err'
import ViewQuestion from './viewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
      return (
      <Router>
         <Fragment>
           <LoadingBar />
            <Nav/> 
              {this.props.notAuthenticated === true
                ? (<Route path ='/' component={LogIn}/>)
                :
                <Switch>
                    <Route path ='/' exact component={LogIn}/>
                    <Route path ='/home' exact component={HomePage}/>
                    <Route path ='/add'  exact component={NewQuestion}/>
                    <Route path='/questions/:id' exact component={ViewQuestion} />
                    <Route path='/leaderboard' exact component={LeaderboardBox} /> 
                    <Route path ='/err' exact component={Err}/>
                  </Switch>
              }
        </Fragment>
    </Router>  
    );
  }
}
  
function mapStateToProps ({authedUser}) {
  return {
    notAuthenticated: authedUser === null
  }
}
export default connect(mapStateToProps)(App)

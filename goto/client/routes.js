import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {GameBoard, ProfilePage, SingleStage} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route
          exact
          path="/stage-1"
          render={props => <SingleStage {...props} topic="Where You'll Live" />}
        />
        <Route
          exact
          path="/stage-2"
          render={props => <SingleStage {...props} topic="What You'll Make" />}
        />
        <Route
          exact
          path="/stage-3"
          render={props => <SingleStage {...props} topic="How You'll Live" />}
        />
        <Route component={GameBoard} />
      </Switch>
    )
  }
}

export default withRouter(Routes)

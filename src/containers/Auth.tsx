import { Spinner } from '@blueprintjs/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Center from 'Components/Center'
import Twitch from 'Libs/Twitch'
import { setTokens } from 'Store/ducks/user'
import { ApplicationState } from 'Store/reducers'
import { getIsLoggedIn } from 'Store/selectors/user'

/**
 * React State.
 */
const initialState = { authDidFail: false }
type State = Readonly<typeof initialState>

/**
 * Auth Component.
 */
class Auth extends React.Component<Props, State> {
  public state: State = initialState

  /**
   * Lifecycle: componentDidMount.
   */
  public async componentDidMount() {
    try {
      const tokens = Twitch.getAuthTokens(this.props.location.hash)

      const idToken = await Twitch.verifyIdToken(tokens.id)

      this.props.setTokens(tokens.access, idToken)
    } catch (error) {
      this.setState(() => ({ authDidFail: true }))
    }
  }

  /**
   * Renders the component.
   * @return Element to render.
   */
  public render() {
    if (this.state.authDidFail) {
      return <Redirect to="/login" />
    } else if (this.props.isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <Center>
        <Spinner large />
      </Center>
    )
  }
}

export default connect<StateProps, DispatchProps, OwnProps, ApplicationState>(
  (state) => ({
    isLoggedIn: getIsLoggedIn(state),
  }),
  { setTokens }
)(Auth)

/**
 * React Props.
 */
type StateProps = {
  isLoggedIn: ReturnType<typeof getIsLoggedIn>
}

/**
 * React Props.
 */
type DispatchProps = {
  setTokens: typeof setTokens
}

/**
 * React Props.
 */
type OwnProps = {
  location: Location
}

/**
 * React Props.
 */
type Props = StateProps & DispatchProps & OwnProps
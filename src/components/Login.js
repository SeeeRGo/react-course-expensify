import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class Login extends React.Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control</p>
        <button className="button-main" onClick={this.props.startLogin}>Login With Google</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(null, mapDispatchToProps)(Login)
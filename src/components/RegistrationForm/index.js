import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    isUser: false,
    isPsk: false,
    view: false,
  }

  passwordBlur = event => {
    if (event.target.value === '') {
      this.setState({isPsk: true})
    } else {
      this.setState({isPsk: false})
    }
  }

  inputBlur = event => {
    if (event.target.value === '') {
      this.setState({isUser: true})
    } else {
      this.setState({isUser: false})
    }
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePsk = event => {
    this.setState({password: event.target.value})
  }

  changeView = () => {
    this.setState({view: false})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '') {
      this.setState({isUser: true})
    }
    if (password === '') {
      this.setState({isPsk: true})
    }
    if (username !== '' && password !== '') {
      this.setState({view: true})
    }
  }

  render() {
    const {username, password, isPsk, isUser, view} = this.state

    return (
      <div className="main-bg">
        <h1 className="heading">Registration</h1>
        {!view ? (
          <form className="form-cont" onSubmit={this.onSubmitDetails}>
            <div>
              <label className="label" htmlFor="username">
                FIRST NAME
              </label>
              <br />
              <input
                id="username"
                value={username}
                type="text"
                placeholder="First name"
                onBlur={this.inputBlur}
                onChange={this.onChangeUser}
                className="input"
              />
              {isUser && <p className="error">Required</p>}
            </div>
            <div>
              <label className="label" htmlFor="password">
                LAST NAME
              </label>
              <br />
              <input
                id="password"
                value={password}
                type="text"
                placeholder="Last name"
                onBlur={this.passwordBlur}
                onChange={this.onChangePsk}
                className="input"
              />
              {isPsk && <p className="error">Required</p>}
            </div>
            <div className="row">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <div className="row">
              <button type="submit" className="btn" onClick={this.changeView}>
                Submit Another Response
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm

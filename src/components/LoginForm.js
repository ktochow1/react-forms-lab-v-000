import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    if(!this.state.username || !this.state.password ){
      console.log('sorry')
    } else {
      this.props.handleLogin()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              onChange={this.handleChange}
              id="username" 
              name="username" 
              value={this.state.username} 
              type="text" 

            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              onChange={this.handleChange}
              id="password" 
              name="password" 
              value={this.state.password} 
              type="password" 

            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    let characterCounter = this.props.maxChars - this.state.message.length
    return (
      <div>
      {/* <form> */}
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.message} type="text" name="message" id="message" />
        {characterCounter}
      {/* </form> */}
      </div>

    );
  }
}

export default TwitterMessage;

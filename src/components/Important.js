import React, { Component } from 'react';

class Important extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {
      isImportant: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div className="squaredFour">
          <label className="squaredFour">
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
      </form>
    );
  }
}

export default Important;

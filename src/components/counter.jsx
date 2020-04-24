import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ['tag0', 'tag1', 'tag2', 'tag3']
  }

  style = {
    fontSize: 20,
    fontWeight: 'bold'
  }
  
  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </React.Fragment>
    );
  }


  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    
    return count;
  }
}

export default Counter;
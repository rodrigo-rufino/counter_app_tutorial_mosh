import React, { Component } from 'react';

class Counter extends Component {

  style = {
    fontSize: 20,
    fontWeight: 'bold'
  }
  
  render() {
    return (
      <React.Fragment>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    
    return value;
  }
}

export default Counter;
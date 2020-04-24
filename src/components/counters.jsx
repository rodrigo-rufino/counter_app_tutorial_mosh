import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 0},
      { id: 3, value: 0},
      { id: 4, value: 0},
    ]
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  render () {
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2">Reset</button>
        { this.state.counters.map(counter => 
          (<div key={counter.id}>
            <Counter
              counter={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
            <br/>
            <br/>
          </div>
          ) 
          ) }
      </div>
    );
  }
}

export default Counters;
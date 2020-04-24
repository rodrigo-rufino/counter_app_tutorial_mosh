import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render () {
    const { onDelete, onReset, onIncrement, counters } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
        { counters.map(counter => 
          (<div key={counter.id}>
            <Counter
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
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
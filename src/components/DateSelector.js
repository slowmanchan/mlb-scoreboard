import React, {Component} from 'react';

class DateSelector extends Component {
  render() {
    return (
      <form id='dateSelector'>
        <input type="date" onChange={this.props.handleChange} />
      </form>
    )
  }
}

export default DateSelector;

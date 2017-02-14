import React, { Component, PropTypes } from 'react';
/*
 * This component renders an HTML5 date selector element
 * The value from onChange is passed to a callback in the parent
 * Compoenent
 */
class DateSelector extends Component {
  render() {
    return (
      <form id="dateSelector">
        <input type="date" onChange={this.props.handleChange} />
      </form>
    );
  }
}

DateSelector.propTypes = {
  handleChange: PropTypes.func,
};

export default DateSelector;

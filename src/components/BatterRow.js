import React, { Component, PropTypes } from 'react';
/*
 * Component responsible for creating rows for the batter stats
 * takes a batter object and render the various batter stats
 */
class BatterRow extends Component {
  render() {
    const {
      name_display_first_last, ab, r, h, rbi, bb, hr, so, avg
    } = this.props.batter;

    return (
      <tr>
        <td>{name_display_first_last}</td>
        <td>{ab}</td>
        <td>{r}</td>
        <td>{h}</td>
        <td>{rbi}</td>
        <td>{bb}</td>
        <td>{hr}</td>
        <td>{so}</td>
        <td>{avg}</td>
      </tr>
    );
  }
}

BatterRow.propTypes = {
  batter: PropTypes.object,
  name_display_first_last: PropTypes.string,
  ab: PropTypes.string,
  r: PropTypes.string,
  h: PropTypes.string,
  rbi: PropTypes.string,
  bb: PropTypes.string,
  hr: PropTypes.string,
  so: PropTypes.string,
  avg: PropTypes.string,
};

export default BatterRow;

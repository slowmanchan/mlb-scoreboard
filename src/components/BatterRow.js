import React, { Component } from 'react';
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
    )
  }
}

export default BatterRow;

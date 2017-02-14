import React, { Component } from 'react';
import BatterRow from './BatterRow';
/*
 * Component responsible for rendering the batter stats table
 * creates a row of batter components and pass a batter object to each
 */
class BatterTable extends Component {
  render() {
    var rows = [];

    this.props.details.batting[(this.props.teamIndex)].batter.forEach((batter, idx) => {
      rows.push(<BatterRow batter={batter} key={idx}/>)
    })

    return (
      <table id="batterTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>AB</th>
            <th>R</th>
            <th>H</th>
            <th>RBI</th>
            <th>BB</th>
            <th>HR</th>
            <th>SO</th>
            <th>AVG</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default BatterTable;

import React, { Component } from 'react'

// Simple Component (função)
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

// Simple Component (função)
const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    )
  }

// components can be nested in other components, and simple and class components can be mixed.
// Class Component
  class Table2 extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

  export default Table2

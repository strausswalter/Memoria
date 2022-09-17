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

// Simple Component (função) recebendo dados via Props
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
    return (
      // You should always use keys when making lists in React, as they help identify each list item.
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}


// components can be nested in other components, and simple and class components can be mixed.
// Class Component
  class Table03 extends Component {
    render() {
      const { characterData } = this.props

      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }

  export default Table03

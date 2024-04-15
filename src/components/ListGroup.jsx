import { useState } from "react"
import { Fragment } from "react/jsx-runtime"

function ListGroup({ items, heading, onSelectItem }) {
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1) //will display data

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index), onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default ListGroup

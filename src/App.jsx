import { Fragment, useState, memo } from "react"
import "./App.css"
import { useEffect } from "react"

// eslint-disable-next-line react/display-name
const ListItem = memo(
  ({ item, selected, onClick }) => (
    <li
      className={`List__item List__item--${item.color} ${
        selected ? "List__item--selected" : ""
      }`}
      onClick={onClick}
    >
      {item.name}
    </li>
  ),
  (prevProps, nextProps) => {
    // Only re-render if the selected state or item reference changes
    return prevProps.selected === nextProps.selected
  }
)

const List = () => {
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    console.log("selectedItems", selectedItems)
  }, [selectedItems])

  const handleItemClick = (itemName) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter((item) => item !== itemName)
      } else {
        return [...prevSelectedItems, itemName]
      }
    })
  }

  return (
    <Fragment>
      <div className="selected-item-container">
      <p>Selected Items: ({selectedItems.length} / {items.length})</p>
      <ol className='selected-item-list'>
        {selectedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      </div>
      <ul className='List'>
        {items.map((item) => (
          <ListItem
            key={item.name}
            item={item}
            selected={selectedItems.includes(item.name)}
            onClick={() => handleItemClick(item.name)}
          />
        ))}
      </ul>
    </Fragment>
  )
}

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ["tiny", "small", "medium", "large", "huge"]
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
]
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
]

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
)

export default List

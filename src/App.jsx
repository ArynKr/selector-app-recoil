import { Fragment } from "react"
import ListItem from "./ListItem"
import SelectedItemsList from "./SelectedItemsList"
import { useRecoilValue } from "recoil"
import { itemsState } from "./atoms"

const List = () => {
  const items = useRecoilValue(itemsState)

  return (
    <Fragment>
      <SelectedItemsList />
      <ul className='List'>
        {items.map((item) => (
          <ListItem
            key={item.name}
            id={item.name}
            color={item.color}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default List

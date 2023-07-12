import { useRecoilState } from "recoil"
import { itemWithId } from "./utils";

const ListItem = ({ id, color }) => {
  const [itemState, setItemState] = useRecoilState(itemWithId(id, color));
  return (
    <li
      className={`List__item List__item--${itemState.color} ${
        itemState.selected ? "List__item--selected" : ""
      }`}
      onClick={() =>
        setItemState((prevItemState) => ({
          ...prevItemState,
          selected: !prevItemState.selected,
        }))
      }
    >
      {id}
    </li>
  )
}

export default ListItem

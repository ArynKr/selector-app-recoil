import { selector } from "recoil"
import { itemWithId } from "./utils"
import { itemsState } from "./atoms"
import { useRecoilValue } from "recoil"

const selectedItemsNames = selector({
  key: 'selectedItemsState',
  get: ({ get }) => {
    const items = get(itemsState)
    const selectedNames = items.map((item) => {
      const itemState = get(itemWithId(item.name, item.color))
      return itemState.selected ? item.name : null
    })
    return selectedNames.filter((item) => item !== null)
  },
})

const SelectedItemsList = () => {
  const selectedItemsState = useRecoilValue(selectedItemsNames)
  const items = useRecoilValue(itemsState)

  return (
    <div className='selected-item-container'>
      <p>
        Selected Items: ({selectedItemsState?.length} / {items?.length})
      </p>
      <ol className='selected-item-list'>
        {selectedItemsState?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default SelectedItemsList

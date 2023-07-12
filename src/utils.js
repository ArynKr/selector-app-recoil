import memoize from "lodash.memoize"
import { atom } from "recoil"

export const itemWithId = memoize((id, color) => atom({
    key: `item${id.split(" ").join("")}`,
    default: {
      selected: false,
      color,
    },
  }))
  
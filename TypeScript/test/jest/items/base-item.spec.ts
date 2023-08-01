import {ConjuredItem} from "@/items/conjured-item";
import {BaseItem} from "@/items/base-item";

describe("BaseItem", () => {
  describe('Quality', () => {
    it("Should decrease before the sell date", () => {
      const item = new BaseItem("foo", 1, 4)

      item.updateQuality()

      expect(item.getQuality()).toBe(3)
    })
  })
})

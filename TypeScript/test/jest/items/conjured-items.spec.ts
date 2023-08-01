import {ConjuredItem} from "@/items/conjured-item";

describe("Conjured", () => {
  describe('SellIn', () => {
    it("Should decrease every day", () => {
      const item = new ConjuredItem("foo", 1, 2)

      item.updateQuality()

      expect(item.getSellIn()).toBe(0)
    })
  });
  describe('Quality', () => {
    // TODO 2 Add tests
    // For normal items quality degrades 1 unit per day.
    // For conjured items this is twice as fast.
    // Quality degrades twice as fast after the sell date for all items.
    //

    it("Should decrease twice as fast before the sell date", () => {
      const item = new ConjuredItem("foo", 1, 4)

      item.updateQuality()

      expect(item.getQuality()).toBe(2)
    })
    it("Should decrease twice as fast on the sell date", () => {
      const item = new ConjuredItem("foo", 0, 8)

      item.updateQuality()

      expect(item.getQuality()).toBe(6)
    })
    it("Should decrease four times as fast after the sell date", () => {
      const item = new ConjuredItem("foo", -1, 4)

      item.updateQuality()

      expect(item.getQuality()).toBe(0)
    })
    it("The quality should never be negative", () => {
      const item = new ConjuredItem("foo", -1, 2)

      item.updateQuality()

      expect(item.getQuality()).toBe(0)
    })
  })
})

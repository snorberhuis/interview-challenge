import {InventoryItem} from "@/items/base-item";

/**
 * GildedRose is our inventory tracking system.
 * It can update the values of our inventory.
 */
export class GildedRose {
  items: Array<InventoryItem>;

  constructor(items = [] as Array<InventoryItem>) {
    this.items = items;
  }

  // TODO 3 This function is unclear. How can it be improved?
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality()
    }

    return this.items;
  }
}



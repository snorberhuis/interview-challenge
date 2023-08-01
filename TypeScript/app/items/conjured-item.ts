import {BaseItem, InventoryItem} from "@/items/base-item";

/**
 * ConjuredItems degrade in Quality twice as fast as normal items.
 */
export class ConjuredItem extends BaseItem implements InventoryItem{

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)


  }

  // TODO 2. Implement quality degradation always twice as fast.  First implement the respective tests.

}

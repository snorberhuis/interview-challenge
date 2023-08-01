import {BaseItem, InventoryItem} from "@/items/base-item";

/**
 * ConjuredItems degrade in Quality twice as fast as normal items.
 */
export class ConjuredItem extends BaseItem implements InventoryItem{

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)


  }

  // TODO 2. Implement quality degradation always twice as fast.  First implement the respective tests.
  /**
   * updateQualityEndOfDay should degrade quality twice as fast as other base items.
   * It returns the number of Quality that was degraded.
   * @protected
   */
  protected updateQualityEndOfDay(): number {
    const degradation = super.updateQualityEndOfDay()
    this.quality -= degradation
    return 2 * degradation
  }

}

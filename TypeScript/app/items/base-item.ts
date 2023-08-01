export interface InventoryItem {
  /**
   * updateQuality updates the Quality and SellIn values for the inventory index.ts
   */
  updateQuality()

  /**
   * getQuality returns the current Quality Value of InventoryItem
   */
  getQuality() : number

  /**
   * getSellIn returns the current SellIn value of the InventoryItem
   */
  getSellIn() : number

  /**
   * getName returns the name of the Inventory Item.
   */
  getName(): string;
}


/**
 * BaseItem provides standard behavior for InventoryItems.
 */
export class BaseItem implements InventoryItem{
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  getQuality(): number {
    return this.quality
  }
  getSellIn(): number {
    return this.sellIn
  }

  /**
   * updateSellInEndOfDay updates using the standard behaviour
   * @protected
   */
  protected updateSellInEndOfDay() {
    this.sellIn -= 1
  }

  /**
   * updateQualityEndOfDay updates the Quality with the standard behaviour.
   * It returns how much the quality was degraded.
   * @protected
   */
  protected updateQualityEndOfDay() : number{
    // Degrade twice as fast after sellIn date
    const degradation = (this.sellIn < 0) ? 2 : 1
    this.quality -= degradation
    return degradation
  }

  /**
   * enforceQualityConstraint enforces the Quality Constraint to be zero.
   * @protected
   */
  protected enforceQualityConstraint() {
    // TODO 1 Enforce the quality constraint
    this.quality = (this.quality < 0) ? 0 : this.quality
  }

  getName(): string {
    return this.name
  }

  updateQuality() {
    this.updateQualityEndOfDay()
    this.updateSellInEndOfDay()
    this.enforceQualityConstraint()
  }

}

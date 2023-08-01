import {BaseItem} from "@/items/base-item";

/**
 * LegacyItem represents an index.ts that GildedRose sells.
 * This is the legacy implementation that provides behavior for all items.
 *
 * it has the following properties:
 *  - SellIn: value which denotes the number of days we have to sell the index.ts
 *  - Quality: value which denotes how valuable the index.ts is
 */
export class LegacyItem extends BaseItem {

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    // Check for special cases of quality.
    if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.quality > 0) {
        if (this.name != 'Sulfuras, Hand of Ragnaros') {
          this.quality = this.quality - 1
        }
      }
    } else {
      // Reduce quality
      if (this.quality < 50) {
        this.quality = this.quality + 1
        if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sellIn < 11) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1
            }
          }
        }
      }
    }
    // Reduce SellIn value
    if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }
    // Reduce quality twice as fast.
    if (this.sellIn < 0) {
      if (this.name != 'Aged Brie') {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
              this.quality = this.quality - 1
            }
          }
        } else {
          this.quality = this.quality - this.quality
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1
        }
      }
    }
  }
}

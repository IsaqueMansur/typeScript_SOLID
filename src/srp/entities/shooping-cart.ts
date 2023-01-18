import { CartItem } from './interfaces/cart-item';

export default class ShoopingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  clear(): void {
    this._items.length = 0;
  }

  total(): number {
    return +this._items.reduce((total, nextValue) => total + nextValue.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): CartItem[] {
    return this._items;
  }
}

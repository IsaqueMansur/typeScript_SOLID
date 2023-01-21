import { CartItem } from './cart-item';

export interface ShoopingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;

  removeItem(index: number): void;

  clear(): void;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;
}

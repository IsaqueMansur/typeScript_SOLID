type CartItem = {name: string, price: number};
type OrderStatus = 'open' | 'closed';

export default class ShoopingCartLegacy {
  private readonly _items: CartItem[] = [];

  private _orderStatus: 'open' | 'closed' = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): CartItem[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, nextValue) => total + nextValue.price, 0).toFixed(2);
  }

  sendMessage(msg: string): void { // eslint-disable-line
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void { // eslint-disable-line
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho limpo');
  }

  checkout(): string | null {
    if (this.isEmpty()) return 'Carrinho vázio';
    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
    return null;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoopingCart1 = new ShoopingCartLegacy();
shoopingCart1.addItem({ name: 'Bike', price: 5 });
shoopingCart1.addItem({ name: 'TV', price: 10 });
console.log(shoopingCart1.items);
console.log(shoopingCart1.total());
shoopingCart1.checkout();
shoopingCart1.clear();
console.log(shoopingCart1.total());
console.log(shoopingCart1.orderStatus);

/* eslint no-useless-constructor: 0 */

import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/costumer-protocol';
import { ShoopingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoopingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus { //
    return this._orderStatus;
  }

  checkout(): string | null {
    if (this.cart.isEmpty()) return 'Carrinho vázio';

    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido no valor de ${this.cart.totalWithDiscount()} foi recebido !`);

    this.persistency.saveOrder();
    this.cart.clear();
    console.log(`O cliente é ${this.customer.getName()}, ${this.customer.getIDN()}`);
    return null;
  }
}

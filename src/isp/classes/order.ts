/* eslint no-useless-constructor: 0 */

import { OrderStatus } from './interfaces/order-status';
import Messaging from '../services/messaging';
import Persistency from '../services/persistency';
import ShoopingCart from './shooping-cart';
import { CustomerOrder } from './interfaces/costumer-protocol';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoopingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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

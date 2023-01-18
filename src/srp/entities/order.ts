/* eslint no-useless-constructor: 0 */

import { OrderStatus } from './interfaces/order-status';
import Messaging from '../services/messaging';
import Persistency from '../services/persistency';
import ShoopingCart from './shooping-cart';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoopingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus { //
    return this._orderStatus;
  }

  checkout(): string | null {
    if (this.cart.isEmpty()) return 'Carrinho vázio';
    this._orderStatus = 'closed';
    this.messaging.sendMessage('Seu pedido foi recebido');
    this.persistency.saveOrder();
    this.cart.clear();
    return null;
  }
}

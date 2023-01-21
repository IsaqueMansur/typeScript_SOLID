import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoopingCart from './classes/shooping-cart';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const tenPercentDiscount = new TenPercentDiscount();
const shoopingCart1 = new ShoopingCart(tenPercentDiscount);
const persistency1 = new Persistency();
const individualCustomer = new IndividualCustomer('Isaque', 'Mansur', '157.191.376-96');

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo Mock');
  }
}

const messaginMock = new MessagingMock();
messaginMock.sendMessage();

const order = new Order(shoopingCart1, messaginMock, persistency1, individualCustomer);

shoopingCart1.addItem(new Product('Hornet', 30000));
shoopingCart1.addItem(new Product('XJ6', 27000));
shoopingCart1.addItem(new Product('Bis', 14000));

console.log(shoopingCart1.items);
console.log(shoopingCart1.totalWithDiscount());
console.log(order.orderStatus);
console.log(order.orderStatus);

import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoopingCart from './classes/shooping-cart';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const tenPercentDiscount = new TenPercentDiscount();
const shoopingCart1 = new ShoopingCart(tenPercentDiscount);
const messaging1 = new Messaging();
const persistency1 = new Persistency();
const individualCustomer = new IndividualCustomer('Isaque', 'Mansur', '157.191.376-96');
const order = new Order(shoopingCart1, messaging1, persistency1, individualCustomer);

shoopingCart1.addItem(new Product('Hornet', 30000));
shoopingCart1.addItem(new Product('XJ6', 27000));
shoopingCart1.addItem(new Product('Bis', 14000));

console.log(shoopingCart1.items);
console.log(shoopingCart1.totalWithDiscount());
console.log(order.orderStatus);
console.log(order.orderStatus);

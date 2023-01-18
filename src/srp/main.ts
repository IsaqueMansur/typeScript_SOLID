import Messaging from './services/messaging';
import Order from './entities/order';
import Persistency from './services/persistency';
import Product from './entities/product';
import ShoopingCart from './entities/shooping-cart';

const shoopingCart1 = new ShoopingCart();
const messaging1 = new Messaging();
const persistency1 = new Persistency();
const order = new Order(shoopingCart1, messaging1, persistency1);

shoopingCart1.addItem(new Product('Hornet', 30000));
shoopingCart1.addItem(new Product('XJ6', 27000));
shoopingCart1.addItem(new Product('Bis', 14000));

console.log(shoopingCart1.items);
console.log(shoopingCart1.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

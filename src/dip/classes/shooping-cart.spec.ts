import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import ShoopingCart from './shooping-cart';

const createSut = () => {
  class DiscountMock extends Discount {}
  const discountMock = new DiscountMock();
  const sut = new ShoopingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {} //eslint-disable-line
  }
  return new CartItemMock(name, price);
};

const createSutWithTwoProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta1', 10);
  const cartItem2 = createCartItem('Camiseta2', 20);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('Shooping cart', () => {
  afterEach(() => jest.clearAllMocks());

  it('verify if shooping cart are empty when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithTwoProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithTwoProducts();
    expect(sut.items.length).toBeCloseTo(2);
    sut.clear();
    expect(sut.items.length).toBeCloseTo(0);
  });

  it('should remove a product', () => {
    const { sut } = createSutWithTwoProducts();
    expect(sut.items.length).toBeCloseTo(2);
    sut.removeItem(1);
    expect(sut.items.length).toBeCloseTo(1);
  });

  it('should call discount calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithTwoProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });
});

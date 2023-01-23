/* eslint-disable @typescript-eslint/no-empty-function */
import { CartItem } from './interfaces/cart-item';
import { CustomerOrder } from './interfaces/costumer-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoopingCartProtocol } from './interfaces/shopping-cart-protocol';
import Order from './order';

class ShoopingCartMock implements ShoopingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }

  addItem(item: CartItem): void {}

  removeItem(index: number): void {}

  total(): number {
    return 1;
  }

  totalWithDiscount(): number {
    return 2;
  }

  isEmpty(): boolean {
    return false;
  }

  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }

  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoopingCartMock = new ShoopingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoopingCartMock, messagingMock, persistencyMock, customerMock);

  return {
    sut, shoopingCartMock, messagingMock, persistencyMock,
  };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoopingCartMock } = createSut();
    const shoopingCartMockSpy = jest.spyOn(shoopingCartMock, 'isEmpty')
      .mockReturnValue(true);
    sut.checkout();
    expect(shoopingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoopingCartMock } = createSut();
    const shoopingCartMockSpy = jest.spyOn(shoopingCartMock, 'isEmpty')
      .mockReturnValue(false);
    sut.checkout();
    expect(shoopingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });
});

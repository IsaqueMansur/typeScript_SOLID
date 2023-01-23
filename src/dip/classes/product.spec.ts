import Product from './product';

function createSut(name: string, price: number): Product {
  return new Product(name, price);
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have property price equal 39,9', () => {
    const sut = createSut('Camiseta', 39.9);
    expect(sut.price).toBeCloseTo(39.9);
  });
});

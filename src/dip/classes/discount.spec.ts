import {
  Discount, FiftyercentDiscount, NoDiscount, TenPercentDiscount,
} from './discount';

function createSut(ClassName: new () => Discount): Discount {
  return new ClassName();
}
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should dont have discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount', () => {
    const sut = createSut(FiftyercentDiscount);
    expect(sut.calculate(150)).toBe(75);
  });

  it('should apply 10% discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(150)).toBe(135);
  });
});

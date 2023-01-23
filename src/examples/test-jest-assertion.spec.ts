describe('Primitive values', () => {
  it('should test jest assertions with primitive values', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeCloseTo(11, -1);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Isaque', lastName: 'Mansur' };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person.name).toBe('Isaque');
  });
});

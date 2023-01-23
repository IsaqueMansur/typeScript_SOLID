import { IndividualCustomer, EnterpriseCustomer } from './customer';

function createIndividualCustomer(
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer {
  return new IndividualCustomer(firstName, lastName, cpf);
}

function createEnterpriseCustomer(
  orgName: string,
  cnpj: string,
): EnterpriseCustomer {
  return new EnterpriseCustomer(orgName, cnpj);
}

afterEach(() => jest.clearAllMocks());

describe('Individual customer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Isaque', 'Mansur', '11111111111');
    expect(sut.getName()).toBe('Isaque Mansur');
    expect(sut.cpf).not.toBeUndefined();
  });
});

describe('Enterprise customer', () => {
  const orgName = 'Guina';
  it('should have orgname, and cnpj', () => {
    const sut = createEnterpriseCustomer('Guina', '12345678912345');
    expect(sut.getName()).toBe(orgName);
    expect(sut.cnpj).not.toBeUndefined();
  });
});

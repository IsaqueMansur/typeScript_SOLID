import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from './interfaces/costumer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;

  lastName: string;

  cpf: string;

  constructor(
    firstName: string,

    lastName: string,

    cpf: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return this.cpf;
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  orgName: string;

  cnpj: string;

  constructor(
    orgName: string,

    cnpj: string,
  ) {
    this.orgName = orgName;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.orgName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}

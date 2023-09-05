export interface userModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: company;
  [key: string] : any
}

interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface company {
  name: string;
  catchPhrase: string;
  designation: string;
  bs: string;
}

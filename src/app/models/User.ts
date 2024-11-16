import { Address } from "./Address";

export class User {

  private  _id: string;
  private _email: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _phone: string;
  private _address: Address;
  private static idNumber: number = 1000;

  constructor(
    // id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: Address
  ) {
    this._id = "USE" + User.idNumber;
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._address = address;
    User.idNumber += 37;
  }
  public login(): void {
    // Implement login logic here
  }

  public logout(): void {
    // Implement logout logic here
  }

  public updateProfile(email: string, firstName: string, lastName: string, phone: string, address: Address): void {
    /*todo Add logic changing this Address*/
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._address = address;
  }
  /*todo Add logic for the encryptage*/
  public changePassword(password:string): void {
    //logic for the encryptage
    this._password = password;
  }

  /*getter*/

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get phone(): string {
    return this._phone;
  }

  get address(): Address {
    return this._address;
  }
}

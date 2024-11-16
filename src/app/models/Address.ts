export class Address {
  private _address: string;
  private _city: string;
  private _province: string;
  private _postalCode: string;
  private _country: string;

  constructor(address: string, city: string, province: string, postalCode: string, country: string) {
    this._address = address;
    this._city = city;
    this._province = province;
    this._postalCode = postalCode;
    this._country = country;
  }

  public confirmAddress(): void {
    // Implement confirm address logic here
  }

  // Getters and setters
  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get province(): string {
    return this._province;
  }

  set province(value: string) {
    this._province = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}

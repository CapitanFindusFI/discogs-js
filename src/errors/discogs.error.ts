export class DiscogsError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, DiscogsError.prototype);
  }
}

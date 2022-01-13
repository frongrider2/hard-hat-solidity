export const enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export declare class Currency {
  readonly decimals: number;
  readonly symbol?: string;
  readonly name?: string;
  /**
   * The only instance of the base class `Currency`.
   */
  static readonly ETHER: Currency;
  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string);
}

export declare class Token extends Currency {
  readonly chainId: ChainId;
  readonly address: string;
  readonly projectLink?: string;
  constructor(
    chainId: ChainId,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
    projectLink?: string
  );
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  equals(other: Token): boolean;
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  sortsBefore(other: Token): boolean;
}

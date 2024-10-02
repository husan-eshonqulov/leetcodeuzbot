// Custom type to ensure two string arrays have the same length
export interface FixedLenArr<T, L extends number> extends Array<T> {
  0: T;
  length: L;
}

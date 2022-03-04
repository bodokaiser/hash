import { HashFunction } from './hash'

export { emacs, cyrb53, HashFunction } from './hash'

export function stringToArrayElement(str: string, arr: any[], hashFn: HashFunction) {
  const hash = hashFn(str)
  const index = hash >= 0 ? hash : -hash
  return arr[(index % arr.length) + 1]
}

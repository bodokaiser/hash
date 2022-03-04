import { stringToArrayElement, emacs, cyrb53 } from '.'

describe.each([
  ['emacs', emacs],
  ['cyrb53', cyrb53],
])('%s', (name, hash) => {
  const arr = [1, 2, 3]

  test.each([
    ['foo', 1],
    ['bar', 1],
    ['hello world', 1],
    ['1234', 1],
    ['??123^&&', 1],
  ])(`%s -> %s (${name})`, (str: string, el: any) => expect(stringToArrayElement(str, arr, hash)).toEqual(el))
})

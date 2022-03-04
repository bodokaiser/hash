import { cyrb53, emacs } from './hash'

describe.each([
  ['emacs', emacs],
  ['cyrb53', cyrb53],
])('%s', (name, hash) => {
  test.each([['foo'], ['bar'], ['hello world'], ['1234'], ['??123^&&']])(
    `${name}(%s) returns number greater than zero`,
    (str: string) => expect(hash(str)).toEqual(expect.any(Number)),
  )
  test(`${name} to be deterministic`, () => {
    const str = 'foobar'
    const res = hash(str)

    for (let i = 0; i < 100; i++) {
      expect(hash(str)).toEqual(res)
    }
  })
})

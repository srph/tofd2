import FormData from 'form-data'
import tofd from '../index'

const object = {
  a: 'some_random_a',
  b: 'some_random_b',
  users: [{name: 'john doe'}],
  hello: {
    world: Buffer.from([1, 2, 3])
  },
  bla: {
    bla: {
      bla: 'bla'
    }
  }
}

describe('tofd', () => {
  it('should convert an object to a fd representation', () => {
    const converted = tofd(object)
    expect(converted instanceof FormData).toBe(true)
  })

  it('should convert a flat object', () => {
    const converted = tofd(object)
    expect(converted.get('a')).toEqual('some_random_a')
    expect(converted.get('b')).toEqual('some_random_b')
  })

  it('should convert a nested object', () => {
    const converted = tofd(object)
    expect(converted.get('bla[bla][bla]')).toEqual('bla')
  })

  it('should convert a nested object / array', () => {
    const converted = tofd(object)
    expect(converted.get('users[0][name]')).toEqual('john doe')
  })

  it('should ignore Buffer and File', () => {
    const converted = tofd(object)
    expect(converted.get('hello[world]') instanceof Buffer).toEqual(true)
  })
})

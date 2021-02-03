import { toSnakeCase } from "../lib/toSnakeCase";

describe('toSnakeCase', () => {
  it('should return the mapped to snakecase object', () => {
    expect(toSnakeCase({
      cloudName: 'demo',
      someThingLong: 'test'
    })).toEqual({
      cloud_name: 'demo',
      some_thing_long: 'test'
    })
  });

  it('should merge snakecase properties', () => {
    expect(toSnakeCase({
      cloudName: 'demo',
      cloud_name: 'maya'
    })).toEqual({
      cloud_name: 'maya'
    })
  });

  it('should return empty object on empty input', () => {
    expect(toSnakeCase('')).toEqual({})
  });
});
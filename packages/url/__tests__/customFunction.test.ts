import { customFunction } from '../lib/transformers/customFunc'

describe('customFunc', () => {
  it('should return empty string if there is no type or source', () => {
    expect(customFunction({ source: '', type: 'remote' })).toBe('')
  });

  it('should return formatted custome Function', () => {
    expect(customFunction({ type: 'remote', source: 'my_example'})).toBe('fn_remote:my_example')
  });
});
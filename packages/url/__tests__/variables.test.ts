import { computeVariable, variables } from '../lib/transformers/variables'
import { StringValue, Variable } from '../lib/types/transformation/Variable';

describe('computeVariable()', () => {
  it('should return formatted str with number input', () => {
    const variable:Variable = {
      name: 'small',
      value: 10
    }

    expect(computeVariable(variable)).toBe('$small_10')
  });  

  it('should return formatted str with array of numbers', () => {
    const variable:Variable = {
      name: 'small',
      value: [10, 20, 30]
    }

    expect(computeVariable(variable)).toBe('$small_10:20:30')
  });

  it('should return formatted str with assigned field', () => {
    const variable:Variable = {
      name: 'small',
      value: 20,
      assignFrom: 'context'
    }

    expect(computeVariable(variable)).toBe('$small_ctx:20')
  });

  it('should return formatted str with StringValue', () => {
    const variable:Variable = {
      name: 'small',
      value: {
        expression: 'breadth',
        formatAs: 'float'
      }
    }

    expect(computeVariable(variable)).toBe('$small_!breadth!_to_f')
  });

  it('should return empty string if no expression', () => {
    expect(computeVariable({
      name: 'small',
      value: {
        expression: ''
      }
    })).toBe('')
  });

  it('should return mapped expression from array', () => {
    expect(computeVariable({
      name: 'small',
      value: {
        expression: ['a', 'b']
      }
    })).toBe('$small_!a:b!')
  });
});

describe('variables()', () => {
  it('should not return a formatted if no input', () => {
    expect(variables()).toBe('')
  });

  it('should not return a formatted if empty array', () => {
    expect(variables([])).toBe('')
  });

  it('should return formatted variable if valid input', () => {
    expect(variables({
      name: 'small',
      value: {
        expression: 'breadth',
        formatAs: 'float'
      }
    })).toBe('$small_!breadth!_to_f')
  })

  it('should return formatted variables for array of input', () => {
    const input:Variable[] = [{
      name: 'small',
      value: {
        expression: 'breadth',
        formatAs: 'float'
      }
    }, {
      name: 'big',
      value: {
        expression: '2 * $small'
      }
    }]
    expect(variables(input)).toBe('$small_!breadth!_to_f,$big_2_mul_$small')
  })  
});
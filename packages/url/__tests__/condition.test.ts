import { computeConditionExpression, computeCondition, condition } from '../lib/transformers/condition'

describe('Condition modifier', () => {
  describe('condition()', () => {
    it('should return empty string if nothing passed', () => {
      expect(condition()).toBe('')
    });

    it('should return empty string if condition.if does not exist', () => {
      expect(condition({
        if: {
          transformations: [{ rotate: 20 }]
        }
      })).toBe('')
    });

    it('should return if condition string', () => {
      expect(condition({
        if: {
          expression: [{
            characteristic: "width",
            operator: 'equal',
            value: 200
          }],
          transformations: [{ rotate: 20 }]
        }
      })).toEqual(['if_w_eq_200/a_20/if_end'])
    });

    it('should return if and else condition string', () => {
      expect(condition({
        if: {
          expression: [{
            characteristic: "width",
            operator: 'equal',
            value: 200
          }],
          transformations: [{ rotate: 20 }]
        },
        else: {
          transformations: [{
            resize: {
              width: 120,
              height: 120,
              type: 'fill'
            }
          }]
        }
      })).toEqual(['if_w_eq_200/a_20/if_else/c_fill,w_120,h_120/if_end'])
    });
    it('should return if value expression with mapped', () => {
      expect(condition({
        if: {
          expression: [{
            characteristic: "width",
            operator: 'equal',
            value: 'shoes'
          }],
          transformations: [{ rotate: 20 }]
        },
      })).toEqual(['if_w_eq_!shoes!/a_20/if_end'])
    });
  });

  describe('computeConditionExpression()', () => {
    it('should map all characteristic together', () => {
      expect(computeConditionExpression({
        characteristic: ['width', 'height'],
        operator: 'include',
        value: 'shoes'
      })).toBe('w:h_in_!shoes!')
    });
  });

  describe('computeCondition()', () => {
    it('should map multiple conditions together', () => {
      expect(computeCondition({
        expression: [{
          characteristic: 'aspectRatio',
          operator: 'greaterThan',
          value: 3
        }, {
          characteristic: 'width',
          operator: 'greaterOrEqual',
          value: 300
        }, {
          characteristic: 'height',
          operator: 'lessThan',
          value: 20
        }],
        transformations: [{
          resize: {
            width: 300,
            height: 200,
            type: 'crop'
          }
        }]
      })).toEqual({
        expression: 'ar_gt_3_and_w_gte_300_and_h_lt_20',
        transformations: 'c_crop,w_300,h_200'
      })
    });
  });
});
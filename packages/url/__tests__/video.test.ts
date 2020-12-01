import { fps } from "../lib/transformers/video/fps";
import { offset } from "../lib/transformers/video/offset";

describe('Video transformation', () => {
  describe('fps()', () => {
    it('should map the fps accordingly', () => {
      expect(fps(90)).toBe('fps_90')
    });

    it('should return empty if there is no input', () => {
      expect(fps()).toBe('')
    });

    it('should map fps with min', () => {
      expect(fps({
        min: 90
      })).toBe('fps_90')
    });

    it('should map fps with max and min', () => {
      expect(fps({
        min: 90,
        max: 100
      })).toBe('fps_90-100')
    });
  });

  describe('offset()', () => {
    it('should return empty string when no input', () => {
      expect(offset()).toBe('')
    });

    it('should return start offset', () => {
      expect(offset({
        start: 10
      })).toBe('so_10')
    });

    it('should return start offset', () => {
      expect(offset({
        end: 10
      })).toBe('eo_10')
    });

    it('should return start, end offset', () => {
      expect(offset({
        start: 10,
        end: 10
      })).toBe('so_10,eo_10')
    });

    it('should return start, end offset and duration', () => {
      expect(offset({
        start: 10,
        end: 10,
        duration: "70"
      })).toBe('so_10,eo_10,du_70')
    });
  });
});
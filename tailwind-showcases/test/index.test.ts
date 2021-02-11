import chai from 'chai/chai.js';
import { extractClassSuffixes } from '../src/theme-helpers';
const expect = chai.expect;

describe('Class names', function () {
  it('should extract correct color class suffixes', function () {
    const theme = JSON.parse(`
    {
      "colors": {
        "transparent": "transparent",
        "current": "currentColor",
        "black": "#000",
        "gray": {
          "50": "#f9fafb",
          "100": "#f3f4f6"
        },
        "red": {
          "800": "#991b1b",
          "900": "#7f1d1d"
        }
      }
    }`);

    expect(extractClassSuffixes('colors', theme)).to.deep.equal([
      '-transparent',
      '-current',
      '-black',
      '-gray-50',
      '-gray-100',
      '-red-800',
      '-red-900',
    ]);
  });
});

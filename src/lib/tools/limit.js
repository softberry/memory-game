/**
 * @classdesc Helper class for having correctly defined matrix
 * @moule
 * @class
 */
export class Limits {
  /**
   *
   * @param {number} min Minimum number of columns and rows
   * @param {number} max Maximum number of columsn and rows
   * @param {string} matrix 'x' separated string. For example ``"3x4"``
   */
  constructor(min, max, matrix) {
    this.min = min;
    this.max = max;
    this.matrix = matrix;
  }
  /**
   * @summary Checks if matrix defined in correct form
   * @return {boolean} true if defined false otherwise
   */
  defined() {
    const matrix = this.matrix;
    if (matrix.indexOf('x') < 0) return false;
    if (matrix.split('x').length !== 2) return false;
    const [min, max] = matrix.split('x');
    if (isNaN(parseInt(min, 10))) return false;
    if (isNaN(parseInt(max, 10))) return false;
    return true;
  }

  /**
   * @summary Checks if columns and rows are in defined minimum
   * and maximum range.
   * @return {boolean} true on exceed
   */
  exceeded() {
    const self = this;
    let hasError = false;
    this.matrix.split('x').forEach((e) => {
      e < self.min || e > self.max ? (hasError = true) : false;
    });
    return hasError;
  }
}

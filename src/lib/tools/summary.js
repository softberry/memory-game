/**
 * @module
 * @param {{}} scores Score information to be styled.
 * @return {string} Styled HTML content of level summary
 */
export function levelSummary(scores) {
  let strSummary = '';
  const length = Object.keys(scores).length;

  Object.keys(scores).forEach((key, i) => {
    strSummary += `<p style="font-size: ${10 - (length - i) * 2}vh;
    opacity:${(1 / (length - i)).toFixed(2)}">${key.slice(1)} ${
  scores[key][0].strDiff
}</p>`;
  });
  return strSummary;
}

/**
 * Loads manifest.json
 * @module
 * @return {{}} fetch promise that loads manifest.json
 */
export default function() {
  return fetch('./manifest.json')
    .then((response) => {
      return response.json();
    })
    .then((manifest) => {
      return manifest;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

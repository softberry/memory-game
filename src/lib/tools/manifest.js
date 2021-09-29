/**
 * Loads manifest.json
 * @module
 * @return {{}} fetch promise that loads manifest.json
 */
export default function () {
  return fetch('./manifest.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Can not load manifest.json');
      }
    })
    .then((manifest) => {
      return manifest;
    })
    .catch((err) => {
      console.log(err);
    });
}

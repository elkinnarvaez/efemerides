export async function fetchAllOrbitalElements() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/api/orbital-elements/fetch-all', {
        method: 'GET',
      });
      const json = await response.json();
      if (response.ok) {
        return resolve(json.orbitalElements);
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      return reject(err);
    }
  });
}

export async function fetchAllOrbitalElements() {
  return await fetch('/api/orbital-elements/fetch-all', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (!response.ok) {
        throw response.error;
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

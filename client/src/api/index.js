export async function searchPlanets({ name }) {
  return await fetch(`/api/homepage/getPlanets/${name}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

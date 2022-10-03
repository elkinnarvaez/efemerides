export async function fetchAllOrbitalElements() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/api/orbital-elements/fetch-all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await response.json();
      if (response.ok) {
        let id = 1;
        json.orbitalElements.forEach((element) => {
          element.id = id;
          id += 1;
        });
        return resolve(json.orbitalElements);
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      return reject(err);
    }
  });
}

export async function updateOrbitalElement({ row, oldPlanetName }) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('/api/orbital-elements/update-record', {
        method: 'POST',
        body: JSON.stringify({ row, oldPlanetName }),
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await response.json();
      if (response.ok) {
        return resolve(true);
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      return reject(err);
    }
  });
}

export async function createNewRecord(row) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(row);
      const response = await fetch('/api/orbital-elements/create-record', {
        method: 'POST',
        body: JSON.stringify({ row }),
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await response.json();
      if (response.ok) {
        return resolve(true);
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      return reject(err);
    }
  });
}

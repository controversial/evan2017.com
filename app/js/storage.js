// Totally insecure! Please don't delete my data

const dataUrl = 'https://api.myjson.com/bins/150k9l';

window.data = {
  // Retrieve data
  get: () => fetch(dataUrl).then(r => r.json()),

  // Add items to data
  add: info => window.data.get().then((existingData) => {
    // After downloading existing list, modify the object with a new item
    existingData.push(info);
    // PUT request to update JSON on server
    return fetch(dataUrl, {
      method: 'PUT',
      body: JSON.stringify(existingData),
      headers: { 'Content-Type': 'application/json' },
    }).then(r => r.json());
  }),
};

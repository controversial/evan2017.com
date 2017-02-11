// Totally insecure! Please don't delete my data

const dataUrl = 'https://api.myjson.com/bins/150k9l';

window.data = {
  // Retrieve data
  get: () => fetch(dataUrl).then(r => r.json()),

  add: (info) => {
    window.data.get().then((existingData) => {
      // Add new item
      existingData.push(info);
      // PUT to update JSON on server
      fetch(dataUrl, {
        method: 'PUT',
        body: JSON.stringify(existingData),
        headers: { 'Content-Type': 'application/json' },
      }).then(r => r.json);
    });
  },
};

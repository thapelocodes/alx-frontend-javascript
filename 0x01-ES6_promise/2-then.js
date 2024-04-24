function handleResponseFromAPI = (promise) =>
  promise
    .then(() => ({ body: 'success', status: 200 }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));

export default handleResponseFromAPI;

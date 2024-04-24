export default function (success) {
  return new Promise((resolve, reject) => {
    const object = {
      body: 'Success',
      status: 200,
    };

    if (success === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

const myPromise = new Promise((resolve, reject) => {
    // Perform an async operation
    let success = 1; // Simulating success or failure
    if (success) {
        resolve('Operation successful');
    } else {
        reject('Operation failed');
    }
});
myPromise.then(
    value => console.log(value));
// myPromise.catch(value => console.log(value));
const task1 = new Promise((resolve, reject) => {
  // Simulate an async task
  setTimeout(() => {
    resolve("Task 1 completed with a value");
  }, 1000);
});

task1.then((value) => console.log(value));

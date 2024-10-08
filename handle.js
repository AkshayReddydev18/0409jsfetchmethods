const task4 = new Promise((resolve, reject) => {
  // Simulate an error in async task
  setTimeout(() => {
    reject(new Error("Task 4 encountered an error"));
  }, 1000);
});

task4
  .then((value) => console.log(value))
  .catch((error) => console.error("Caught:", error.message))
  .finally(() => console.log("Task 4: Finished, error or success"));

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Task 2 failed with an error"));
  }, 1000);
});

task2.catch((error) => console.log(error.message));

const task3 = new Promise((resolve, reject) => {
  // Simulate an async task
  setTimeout(() => {
    resolve("Task 3 - Step 1 completed");
  }, 1000);
});

task3
  .then((value) => {
    console.log(value); // Log step 1 completion
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Task 3 - Step 2 completed"), 1000);
    });
  })
  .then((value) => {
    console.log(value); // Log step 2 completion
    return "Task 3 - All steps completed";
  })
  .then((value) => console.log(value)); // Final log

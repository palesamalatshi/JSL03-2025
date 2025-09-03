// ----------------------
// JSL03: Console-Based Task Manager
// ----------------------

// Initial set of tasks (P2.21)
const tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// ----------------------
// Function: Add up to 3 new tasks (P2.22, P2.23, P2.24, P2.25)
// ----------------------
function addNewTasks() {
  const maxNewTasks = 3; // limit of new tasks
  let tasksAdded = 0;

  while (tasksAdded < maxNewTasks) {
    const addTask = confirm("Would you like to add a new task?");
    if (!addTask) break;

    // Prompt user for task details (P2.24)
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    const status = prompt(
      "Enter task status (todo, doing, or done):"
    ).toLowerCase();

    // Validation: ensure inputs are not empty
    if (!title || !description || !["todo", "doing", "done"].includes(status)) {
      alert("Invalid input. Please try again.");
      continue; // skip invalid entries
    }

    // Generate unique incremental ID (P2.23)
    const newId = tasks[tasks.length - 1].id + 1;

    // Create new task object
    const newTask = { id: newId, title, description, status };

    // Add task to array
    tasks.push(newTask);
    tasksAdded++;

    // If the user has added the last allowed task → alert (P2.25)
    if (tasksAdded === maxNewTasks) {
      alert(
        "There are enough tasks on your board, please check them in the console."
      );
    }
  }
}

// ----------------------
// Function: Filter completed tasks (P2.26)
// ----------------------
function getCompletedTasks() {
  return tasks.filter((task) => task.status === "done");
}

// ----------------------
// Log all tasks & completed tasks (P2.27, P2.28)
// ----------------------
function displayTasks() {
  console.log("📋 All tasks:", tasks);
  console.log("✅ Completed tasks:", getCompletedTasks());
}

// ----------------------
// Run the program
// ----------------------
addNewTasks();
displayTasks();

/*
P2.29 & P2.30
- Descriptive variable and function names have been used
- Clear comments explain the purpose of each block of code
*/

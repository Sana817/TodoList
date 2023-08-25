const host = "http://localhost:8000";

// Fetching all tasks
const getAllTasks = async () => {
  const response = await fetch(host, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
  });
  const jsonResponse = await response.json();
  console.log("json response in get all tasks:", jsonResponse);
  return jsonResponse;
};

// Fetching to add task
const addTask = async (newTask) => {
  const response = await fetch(host + "/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
    body: JSON.stringify(newTask),
  });
  const jsonResponse = await response.json();
  console.log("json response in  add new Task:", jsonResponse);
  return jsonResponse;
};

// Fetching to remove a task
const removeTask = async (id) => {
  console.log("remove task id in frontend".id);
  const response = await fetch(host + `/removeTask/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
  });
  const jsonResponse = await response.json();
  console.log("json response in remove a task:", jsonResponse);
  return jsonResponse;
};

// Fetching to update a task
const updateTask = async (newTask) => {
  console.log("update task id in frontend", newTask._id);
  const response = await fetch(host + `/updateTask/${newTask._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
    body: JSON.stringify(newTask),
  });
  const jsonResponse = await response.json();
  console.log("json response in updateTask:", jsonResponse);
  return jsonResponse;
};

// Login
const login = async (user) => {
  const response = await fetch(host + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const jsonResponse = await response.json();
  console.log("json response in login:", jsonResponse, jsonResponse.token);
  return jsonResponse.token;
};
const signup = async (user) => {
  const response = await fetch(host + "/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const jsonResponse = await response.json();
  console.log("json response in login:", jsonResponse);
  return jsonResponse;
};

module.exports = {
  addTask,
  getAllTasks,
  removeTask,
  updateTask,
  login,
  signup,
};

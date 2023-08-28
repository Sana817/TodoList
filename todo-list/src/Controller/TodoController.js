const host = "http://localhost:8000";

const getAllTasks = async () => {
  const response = await fetch(host, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

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
  return jsonResponse;
};

const removeTask = async (id) => {
  const response = await fetch(host + `/removeTask/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const updateTask = async (newTask) => {
  const response = await fetch(host + `/updateTask/${newTask._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "user-authentication": localStorage.getItem("user-authentication"),
    },
    body: JSON.stringify(newTask),
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const login = async (user) => {
  const response = await fetch(host + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const jsonResponse = await response.json();
  return jsonResponse.token;
};
const signup = async (user) => {
  const response = await fetch(host + "/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const jsonResponse = await response.json();
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

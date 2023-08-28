const host = "http://localhost:8000";

const getAllTasks = async () => {
  const response = await fetch(host, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};

const addTask = async (newTask) => {
  const response = await fetch(host + "/addTask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};

const removeTask = async (id) => {
  const response = await fetch(host + `/removeTask/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};

const updateTask = async (newTask) => {
  const response = await fetch(host + `/updateTask/${newTask._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};
module.exports = {
  addTask,
  getAllTasks,
  removeTask,
  updateTask,
};

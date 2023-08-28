export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    task: task,
  };
};
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    id: id,
  };
};
export const editTask = (id) => {
  return {
    type: "EDIT_TASK",
    id: id,
  };
};
export const updateTask = (id, updatedTask) => {
  return {
    type: "UPDATE_TASK",
    id: id,
    updatedTask: updatedTask,
  };
};

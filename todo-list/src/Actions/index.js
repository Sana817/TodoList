// actions are what should be done
export const addTask = (item) => {
  return {
    type: "ADD_TASK",
    item: item,
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
export const updateTask = (id, value) => {
  return {
    type: "UPDATE_TASK",
    id: id,
    value: value,
  };
};

const initalTodoState = [];
const todoTaskReducer = (state = initalTodoState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.task]);
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, editing: !task.editing } : task
      );
    case "UPDATE_TASK":
      return state.map((task) => {
        if (task.id === action.id) {
          return { ...task, task: action.updatedTask, editing: !task.editing };
        } else {
          return task;
        }
      });
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

export default todoTaskReducer;

// resucers are how it should be done
const initalState = [];
const changeTasks = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return state.concat([action.item]);
    case "EDIT_TASK":
      return state.map((item) =>
        item.id === action.id ? { ...item, editing: !item.editing } : item
      );
    case "UPDATE_TASK":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, item: action.value, editing: !item.editing };
        } else {
          return item;
        }
      });
    case "DELETE_TASK":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
export default changeTasks;

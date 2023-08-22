import { hookstate, useHookstate } from "@hookstate/core";

import { nanoid } from "nanoid";

const globalTodoList = hookstate([]); // global state

export const useTaskState = () => useHookstate(globalTodoList);
export const taskHandler = (state) => {
  // custom hooks

  return {
    addTask(newTask) {
      return state.set((tasks) => [...tasks, { ...newTask, id: nanoid() }]);
    },

    removeTask(id) {
      console.log("remove the item" + id);
      return state.set((tasks) => tasks.filter((task) => task.id !== id));
    },
    editTask(id) {
      console.log("edit the item" + id);
      return state.set((tasks) =>
        tasks.map((task) =>
          task.id === id ? { ...task, editing: !task.editing } : task
        )
      );
    },
    updateTask(id, updatedValue) {
      return state.set((tasks) =>
        tasks.map((task) =>
          task.id === id
            ? { ...task, item: updatedValue, editing: !task.editing }
            : task
        )
      );
    },

    get getTasks() {
      return state.get({ noproxy: true });
    },
  };
};
export const taskController = taskHandler(globalTodoList);

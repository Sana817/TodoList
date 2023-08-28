import { hookstate, useHookstate } from "@hookstate/core";

import { nanoid } from "nanoid";

const globalTodoList = hookstate([]);

export const useTaskState = () => useHookstate(globalTodoList);
export const taskHandler = (state) => {
  return {
    addTask(newTask) {
      return state.set((tasks) => [...tasks, { ...newTask, id: nanoid() }]);
    },

    removeTask(id) {
      return state.set((tasks) => tasks.filter((task) => task.id !== id));
    },
    editTask(id) {
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
            ? { ...task, name: updatedValue, editing: !task.editing }
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

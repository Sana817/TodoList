import { hookstate, useHookstate } from "@hookstate/core";

import { nanoid } from "nanoid";

const globalTodoList = hookstate([]); // global state

export function useTaskState() {
  // custom hooks

  const state = useHookstate(globalTodoList); // local state to manage global state
  return {
    addTask(newTask) {
      console.log("value in state addtask: " + newTask.item);
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
      console.log("in updating the item is " + id + " " + updatedValue);
      return state.set((tasks) =>
        tasks.map((task) =>
          task.id === id
            ? { ...task, item: updatedValue, editing: !task.editing }
            : task
        )
      );
    },

    get getTasks() {
      return state.get();
    },
  };
}

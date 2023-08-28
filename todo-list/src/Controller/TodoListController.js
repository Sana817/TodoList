import { hookstate, useHookstate } from "@hookstate/core";

const host = "http://localhost:8000";
const globalTodoList = hookstate([]); // global state

export const useTaskState = () => useHookstate(globalTodoList);
export const taskHandler = (state) => {
  // custom hooks

  return {
    // get all tasks from backend
    async getTasks() {
      try {
        const response = await fetch(host, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "user-authentication": localStorage.getItem("user-authentication"),
          },
        });
        const jsonResponse = await response.json();
        console.log("json response in get all tasks:", jsonResponse);

        if (jsonResponse) {
          globalTodoList.set(jsonResponse);
          console.log(
            "get all tasks from backend global state  ",
            globalTodoList.get({ noproxy: true })
          );

          return state.get({ noproxy: true }); // ask
        }
      } catch (error) {
        console.error("error while fetching from getting all tasks ", error);
        throw error;
      }
    },

    // call backend add task
    async addTask(newTask) {
      try {
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
      } catch (error) {
        console.error("Error in adding new Task ", error);
        throw error;
      }
    },

    // call backend remove task
    async removeTask(id) {
      try {
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
      } catch (error) {
        console.error("Error in removing a Task ", error);
        throw error;
      }
    },

    // call backend to update task
    async updateTask(newTask) {
      try {
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
      } catch (error) {
        console.error("Error in updating a Task ", error);
        throw error;
      }
    },
    async login(user) {
      try {
        const response = await fetch(host + "/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const jsonResponse = await response.json();
        console.log(
          "json response in login:",
          jsonResponse,
          jsonResponse.token
        );
        return jsonResponse.token;
      } catch (error) {
        console.error("Error in login  ", error);
        throw error;
      }
    },
    async signup(user) {
      try {
        const response = await fetch(host + "/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const jsonResponse = await response.json();
        console.log("json response in login:", jsonResponse);
        return jsonResponse;
      } catch (error) {
        console.error("Error in signup  ", error);
        throw error;
      }
    },
  };
};
export const taskController = taskHandler(globalTodoList);

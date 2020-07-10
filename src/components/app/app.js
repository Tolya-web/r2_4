import React from "react";
import Header from "../app-header";
import InputSearch from "../input-search";
import TaskFilter from "../task-filter";
import ToDoList from "../todo-list";
import CreateNewElement from "../create-new-element";
import Statistics from "../statistics";

import "./app.scss";

class App extends React.Component {
  maxId = 100;
  state = {
    todolist: [
      { message: "Task 1", important: false, done: false, id: 1 },
      { message: "Task 2", important: false, done: false, id: 2 },
      { message: "Task 3", important: false, done: false, id: 3 },
    ],
    filterWord: "all_tasks",
    keyWord: "",
  };

  onDelete = (id) => {
    this.setState((prev) => {
      const todos = this.state.todolist.filter((todo) => {
        return todo.id !== id;
      });
      return {
        todolist: todos,
      };
    });
  };

  onAdded = (message) => {
    this.setState((prev) => {
      return {
        todolist: [
          ...prev.todolist,
          { message, important: false, done: false, id: ++this.maxId },
        ],
      };
    });
  };

  onToggle = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  onImportant = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todolist.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todolist: todos,
      };
    });
  };

  filterTask = (filterWord) => {
    this.setState({ filterWord });
  };

  filterFunc = (array, word) => {
    const filtered = array.filter((todo) => {
      switch (word) {
        case "all_tasks":
          return todo;
        case "important_tasks":
          if (todo.important) return todo;
          else break;
        case "done_tasks":
          if (todo.done) return todo;
          else break;
        default:
          throw new Error("no filter" + word);
      }
    });
    return filtered;
  };

  searchTask = (keyWord) => {
    this.setState({ keyWord });
  };

  render() {
    const { todolist, filterWord, keyWord } = this.state;
    const doneResult = todolist.filter((todo) => todo.done).length;
    const activeResult = todolist.length - doneResult;
    const todoSearch = todolist.filter((todo) => {
      if (todo.message.toLowerCase().includes(keyWord.toLowerCase()))
        return todo;
    });
    const todoFiltered = this.filterFunc(todoSearch, filterWord);

    return (
      <div className="wrapper">
        <Header />
        <hr />
        <InputSearch onSearch={this.searchTask} />
        <TaskFilter filterTask={this.filterTask} />
        <ToDoList
          todos={todoFiltered}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
          onImportant={this.onImportant}
        />

        <CreateNewElement onAdded={this.onAdded} />
        <hr />
        <Statistics done={doneResult} todo={activeResult} />
      </div>
    );
  }
}

export default App;

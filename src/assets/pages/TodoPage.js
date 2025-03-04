import React from "react";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";

const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-lg p-3 mb-5 rounded">
            <div className="card-header bg-transparent ">
              <h3 className="text-center">To Do List</h3>
            </div>
            <div className="card-body">
              <CreateTodo />
              <hr></hr>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

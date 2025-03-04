import React from "react";
import { useSelector } from "react-redux";
import { TodoRemoveAlert } from "./TodoRemoveAlert";
import TodoEditAlert from "./TodoEditAlert";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <table className="table text-center">
            <thead className="">
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="">
              {todoItems.map((item, index) => {
                return (
                  <tr key={index.toString()}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          TodoEditAlert(index, item);
                        }}
                      >
                        Edit
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          TodoRemoveAlert(index);
                        }}
                      >
                        Remove
                      </button>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

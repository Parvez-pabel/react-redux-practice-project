import React from "react";

const TodoList = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead className="">
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="">
              <td>1</td>
              <td>Task Name</td>
              <td>
                {" "}
                <button className="btn btn-primary">Edit</button>{" "}
              </td>
              <td>
                {" "}
                <button className="btn btn-danger">Remove</button>{" "}
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

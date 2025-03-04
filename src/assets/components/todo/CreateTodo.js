import React from "react";

const CreateTodo = () => {
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="col-md-10">
          <input
            type="text"
            placeholder="Add your Task"
            className="form-control"
            id=""
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Add task</button>
        </div>
          </div>
          
    </div>
  );
};

export default CreateTodo;

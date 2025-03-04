import React, { useRef } from "react";
import { AddTodo } from "../../redux/state/todo/TodoSlice";
import { useDispatch } from "react-redux";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="col-md-10">
          <input
            type="text"
            placeholder="Add your Task"
            className="form-control"
            id=""
            ref={inputRef}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(AddTodo(inputRef.current.value))}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;

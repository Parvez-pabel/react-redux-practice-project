import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  setTop1,
  setTop2,
  setTop3,
} from "../../redux/state/Counter/CounterSlice";

const SellTarget = () => {
  const dispatch = useDispatch();
  const { totalSell, avgSell, finalTarget } = useSelector(
    (state) => state.sell
  );

  return (
    <div className="container mt-5 text-center w-50 bg-warning bg-gradient p-5 rounded">
      <h2 className="card card-body bg-primary text-white">
        Approximate Sell Target
      </h2>

      <h1>Top 3 seller Total = {totalSell.toFixed(2)}</h1>
      <h1>Top 3 seller Avg = {avgSell.toFixed(2)}</h1>
      <h1>Final target will be = {finalTarget.toFixed(2)}</h1>

      <div className="d-flex justify-content-center gap-3 mt-5">
        <input
          className="form-control w-25"
          type="number"
          onChange={(e) => dispatch(setTop1(Number(e.target.value)))}
        />
        <button
          onClick={() => dispatch(setTop1(0))}
          className="btn btn-primary "
        >
          Top 1
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-5">
        <input
          className="form-control w-25"
          type="number"
          onChange={(e) => dispatch(setTop2(Number(e.target.value)))}
        />
        <button
          onClick={() => dispatch(setTop2(0))}
          className="btn btn-primary "
        >
          Top 2
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-5">
        <input
          className="form-control w-25"
          type="number"
          onChange={(e) => dispatch(setTop3(Number(e.target.value)))}
        />
        <button
          onClick={() => dispatch(setTop3(0))}
          className="btn btn-primary "
        >
          Top 3
        </button>
      </div>

      <br />
      <button
        onClick={() => dispatch(reset())}
        className=" btn btn-primary w-50"
      >
        Reset
      </button>
    </div>
  );
};

export default SellTarget;

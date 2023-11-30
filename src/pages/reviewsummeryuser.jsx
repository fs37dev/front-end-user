import React from "react";
import ReviewSummary from "../components/reviewsummery";

function ReviewSummeryUser() {
  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none">
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a
            className="btn btn-ghost normal-case text-2xl"
            onClick={() => Navigate("/")}
          >
            Review Summary
          </a>
        </div>
      </div>
      <ReviewSummary />
    </>
  );
}

export default ReviewSummeryUser;

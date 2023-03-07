import error from "../images/error.svg";
import React from "react";

export default function Error() {
  return (
    <div className="error">
      <img src={error} alt="error" />
    </div>
  );
}
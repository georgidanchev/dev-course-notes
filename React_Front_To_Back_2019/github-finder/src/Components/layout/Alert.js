import React from "react";

const Alert = ({ showAlert, alertContent }) => {
  return (
    showAlert === true && (
      <div className={`alert alert-${alertContent.type}`}>
        <i class="fas fa-info-circle"></i>{" "}
        {alertContent.msg}
      </div>
    )
  );
};

export default Alert;

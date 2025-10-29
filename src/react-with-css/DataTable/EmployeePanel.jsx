import React from "react";
import "./EmployeeTable.css";

const EmployeePanel = ({ employee, onClose }) => {
    return (
        <div className="side-panel">
            <button className="close-btn" onClick={onClose}>
                ✕
            </button>
            <h2>Employee Details</h2>
            <p><strong>ID:</strong> {employee.EmployeeId}</p>
            <p><strong>Name:</strong> {employee.EmployeeName}</p>
            <p><strong>Address:</strong> {employee.EmployeeAddress}</p>
        </div>
    );
};

export default EmployeePanel;

import React, { useEffect, useState } from "react";
import "./EmployeeCircle.css";
import EmployeePanel from "./EmployeePanel";

const EmployeeCircle = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        // ✅ Hardcoded employee data
        const employeeData = [
            { EmployeeId: 101, EmployeeName: "Amit Sharma", EmployeeAddress: "New Delhi, India" },
            { EmployeeId: 102, EmployeeName: "Priya Verma", EmployeeAddress: "Mumbai, India" },
            { EmployeeId: 103, EmployeeName: "Rahul Mehta", EmployeeAddress: "Pune, India" },
            { EmployeeId: 104, EmployeeName: "Sneha Kapoor", EmployeeAddress: "Bangalore, India" },
            { EmployeeId: 105, EmployeeName: "Vikram Singh", EmployeeAddress: "Hyderabad, India" },
            { EmployeeId: 106, EmployeeName: "Riya Das", EmployeeAddress: "Kolkata, India" },
        ];
        setEmployees(employeeData);
    }, []);

    const handleCircleClick = (emp) => {
        setSelectedEmployee(emp);
    };

    const closePanel = () => setSelectedEmployee(null);

    return (
        <div className="circle-container">
            <div className="main-circle">
                {employees.map((emp, index) => {
                    const angle = (index / employees.length) * 2 * Math.PI;
                    const radius = 150; // distance from center
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <div
                            key={emp.EmployeeId}
                            className="employee-node"
                            style={{
                                transform: `translate(${x}px, ${y}px)`
                            }}
                            onClick={() => handleCircleClick(emp)}
                            title={emp.EmployeeName}
                        >
                            <div className="node-circle"></div>
                            <span className="node-name">{emp.EmployeeName}</span>
                        </div>
                    );
                })}
            </div>

            {selectedEmployee && (
                <EmployeePanel employee={selectedEmployee} onClose={closePanel} />
            )}
        </div>
    );
};

export default EmployeeCircle;

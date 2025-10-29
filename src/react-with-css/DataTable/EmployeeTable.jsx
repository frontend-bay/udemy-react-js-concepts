import React, { useEffect, useState } from "react";
import "./EmployeeTable.css";
import EmployeePanel from "./EmployeePanel";

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // useEffect(() => {
    //     // Fetch data from your server (dummy API used here)
    //     fetch("https://mocki.io/v1/bcf1b316-40f7-4ff1-9e1f-f8cba2d75cf8")
    //         .then((res) => res.json())
    //         .then((data) => setEmployees(data))
    //         .catch((err) => console.error("Error fetching employees:", err));
    // }, []);

    useEffect(() => {
        // ✅ Hardcoded employee data
        const employeeData = [
            {
                EmployeeId: 101,
                EmployeeName: "Amit Sharma",
                EmployeeAddress: "New Delhi, India",
            },
            {
                EmployeeId: 102,
                EmployeeName: "Priya Verma",
                EmployeeAddress: "Mumbai, India",
            },
            {
                EmployeeId: 103,
                EmployeeName: "Rahul Mehta",
                EmployeeAddress: "Pune, India",
            },
            {
                EmployeeId: 104,
                EmployeeName: "Sneha Kapoor",
                EmployeeAddress: "Bangalore, India",
            },
            {
                EmployeeId: 105,
                EmployeeName: "Vikram Singh",
                EmployeeAddress: "Hyderabad, India",
            },
        ];

        setEmployees(employeeData);
    }, []);

    const handleAddressClick = (employee) => {
        setSelectedEmployee(employee);
    };

    const closePanel = () => {
        setSelectedEmployee(null);
    };

    return (
        <div className="employee-container">
            <table className="employee-table">
                <thead>
                <tr>
                    <th>EmployeeId</th>
                    <th>EmployeeName</th>
                    <th>EmployeeAddress</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((emp) => (
                    <tr key={emp.EmployeeId}>
                        <td>{emp.EmployeeId}</td>
                        <td>{emp.EmployeeName}</td>
                        <td
                            className="address-link"
                            onClick={() => handleAddressClick(emp)}
                        >
                            {emp.EmployeeAddress}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {selectedEmployee && (
                <EmployeePanel
                    employee={selectedEmployee}
                    onClose={closePanel}
                />
            )}
        </div>
    );
};

export default EmployeeTable;

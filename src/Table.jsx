import React from "react";
import "./Table.css";

const data = {
  loggedIn: {
    empId: 123,

    name: "Abdul",

    dept: "Accounts",

    isAdmin: true,
  },

  employees: [
    {
      empId: 123,

      name: "Abdul",

      email: "abdul@email.com",

      joinDate: "27-09-2024",

      dept: "Accounts",

      isAdmin: true,
    },

    {
      empId: 456,

      name: "Aswathy",

      email: "aswathy@email.com",

      joinDate: "05-01-2024",

      dept: "Technical",

      isAdmin: true,
    },

    {
      empId: 1224,

      name: "Farsana",

      email: "farsana@email.com",

      joinDate: "18-01-2025",

      dept: "Marketing",

      isAdmin: false,
    },

    {
      empId: 2334,

      name: "Gokul",

      email: "gokul@email.com",

      joinDate: "01-02-2025",

      dept: "Technical",

      isAdmin: false,
    },
  ],
};

function Table() {
  return (
    <>
      <table className="table">
        <thead className="row tableHead">
          <tr>
            <th align="center" className="items">
              Id
            </th>
            <th align="center" className="items">
              Name
            </th>
            <th align="center" className="items">
              Email
            </th>
            <th align="center" className="items">
              Joined On
            </th>
            <th align="center" className="items">
              Department
            </th>
            <th align="center" className="items">
              Access
            </th>
          </tr>
        </thead>
        {data.employees?.map((user, i) => (
          <tbody key={user.empId} className="tableBody">
            <tr className={`row tableBody ${i % 2 == 0 ? "odd" : "even"}`}>
              <td align="center" className="items center">
                {user.empId}
              </td>
              <td align="center" className="items">
                {user.name}
              </td>
              <td align="center" className="items">
                {user.email}
              </td>
              <td align="center" className="items">
                {user.joinDate}
              </td>
              <td align="center" className="items">
                {user.dept}
              </td>
              <td
                align="center"
                className={`items ${user.isAdmin ? "admin" : "user"}`}
              >
                {user.isAdmin ? "Admin" : "User"}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;

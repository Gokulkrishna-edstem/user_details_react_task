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

function Head() {
  return (
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
  );
}

function Content({ id, name, email, date, dept, admin, i }) {
  return (
    <tbody className="tableBody">
      <tr className={`row tableBody ${i % 2 == 0 ? "odd" : "even"}`}>
        <td align="center" className="items center">
          {id}
        </td>
        <td align="center" className="items">
          {name}
        </td>
        <td align="center" className="items">
          {email}
        </td>
        <td align="center" className="items">
          {date}
        </td>
        <td align="center" className="items">
          {dept}
        </td>
        <td align="center" className={`items ${admin ? "admin" : "user"}`}>
          {admin ? "Admin" : "User"}
        </td>
      </tr>
    </tbody>
  );
}

function Table() {
  return (
    <>
      <table className="table">
        <Head />
        {data.employees?.map((user, i) => (
          <Content
            id={user.empId}
            name={user.name}
            email={user.email}
            date={user.joinDate}
            dept={user.dept}
            admin={user.isAdmin}
            key={user.empId}
            i={i}
          />
        ))}
      </table>
    </>
  );
}

export default Table;

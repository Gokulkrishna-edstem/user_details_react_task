import React from "react";
import "./Table.css";
import data from "./data";

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
  const [day, month, year] = date.split("-");

  // Map month number to short month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Convert month number (e.g., "09") to index (0-based)
  const formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  return (
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
        {formattedDate}
      </td>
      <td align="center" className="items">
        {dept}
      </td>
      <td align="center" className={`items ${admin ? "admin" : "user"}`}>
        {admin ? "Admin" : "User"}
      </td>
    </tr>
  );
}

function Table() {
  return (
    <>
      <table className="table">
        <Head />
        {data.employees?.map((user, i) => (
          <tbody key={user.empId} className="tableBody">
            <Content
              id={user.empId}
              name={user.name}
              email={user.email}
              date={user.joinDate}
              dept={user.dept}
              admin={user.isAdmin}
              i={i}
            />
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;

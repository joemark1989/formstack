import React from "react";

const UserTable = props => (
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th style={{width: 180}}></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-info mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

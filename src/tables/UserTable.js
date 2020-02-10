import React, { useState } from "react";

const UserTable = props => {
  const [user, setUser] = useState(props.users);

  // handles the sorting of the firstname

  const handleSortedNamesChange = event => {
    const { firstname, value } = event.target;
    setUser({ ...user, [firstname]: value });
    props.users.sort((a, b) => a.firstname.localeCompare(b.firstname));
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th style={{ width: 180 }}>
            <button
              className="btn btn-link p-0"
              onClick={handleSortedNamesChange}
            >
              <i className="fa fa-pencil text-white"></i>
            </button>
          </th>
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
                    console.log(props);
                    props.editRow(user);
                  }}
                  className="btn btn-primary mr-2"
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
            <td>No users. Please add users to your list.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;

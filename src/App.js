import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import Layout from "./Layout";

const App = () => {
  // Data
  const usersData = [
    { id: 1, firstname: "John", lastname: "Wiliams" },
    { id: 2, firstname: "Craig", lastname: "Anderson" },
    { id: 3, firstname: "Tj", lastname: "Homeslice" }
  ];

  const initialFormState = { id: null, name: "", username: "" };
  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname
    });
  };

  return (
    <Layout>
      <div className="col-12">
        {editing ? (
          <Fragment>
            <h2 className="mb-4">Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="mb-4">Add user</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      <div className="col-12">
        <h2 className="mb-4 mt-4">View users</h2>
        <UserTable
          users={users}
          editRow={editRow}
          deleteUser={deleteUser}
        />
      </div>
    </Layout>
  );
};

export default App;

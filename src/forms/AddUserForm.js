import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.firstname || !user.lastname) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary mt-2">Add new user</button>
    </form>
  );
};

export default AddUserForm;

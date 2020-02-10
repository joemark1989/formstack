import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          className="form-control col"
          type="text"
          name="firstname"
          value={user.firstname}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          className="form-control col"
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
      </div>
      <button className="btn btn-primary mr-2">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;

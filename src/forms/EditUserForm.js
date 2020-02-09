import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
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
      <label className="mr-2">First Name</label>
      <input
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={handleInputChange}
      />
      <label className="mr-2 ml-2">Last Name</label>
      <input
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary mr-2 mt-2">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger mt-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;

import React, { useState } from "react";

function Form(props) {
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    event.persist();
    setValues(() => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("This should update the state in App with", values);
    props.addMember(values);
    setValues({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={values.role}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

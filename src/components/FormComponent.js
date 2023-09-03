import React, { useState } from "react";

const FormComponent = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here, e.g., send data to a server or perform some action
  //   console.log(formData);
  // };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
  });
  console.log("🚀 ~ file: FormComponent.js:27 ~ FormComponent ~ form:", form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <h1 className="text-light">React Bootstrap Form</h1>
      <form className="text-light">
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            // value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            // value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            // value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Address */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            // value={formData.name}
            onChange={handleChange}
          />
        </div>
        {/* Zip Code */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zipCode"
            name="zipCode"
            // value={formData.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;

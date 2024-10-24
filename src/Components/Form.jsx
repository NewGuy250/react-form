import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    resume: null,
    url: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to clear the form?")) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        resume: null,
        url: "",
        comments: "",
      });
    }
  };

  const validatePhoneNumber = (number) => {
    const regex =
      /^(?:\+?\d{1,3})?\s?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}(?:\s?(?:x|ext|extension)\s?\d+)?$/i;
    return regex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.contact)) {
      alert("Please enter a valid phone number.");
      return;
    }
    console.log(formData);
    console.log("Git Change");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="information-container">
        <label htmlFor="firstName">
          First Name<span className="required">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="information-container">
        <label htmlFor="lastName">
          Last Name<span className="required">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="information-container">
        <label htmlFor="email">
          Email<span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="information-container">
        <label htmlFor="contact">
          Contact Number<span className="required">*</span>
        </label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div className="information-container">
        <label htmlFor="gender">
          Gender<span className="required">*</span>
        </label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="information-container">
        <label htmlFor="resume">
          Resume<span className="required">*</span>
        </label>
        <input
          type="file"
          name="resume"
          id="resume"
          onChange={handleFileChange}
          required
        />
      </div>

      <div className="information-container">
        <label htmlFor="url">Website URL</label>
        <input
          type="url"
          name="url"
          id="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>

      <div className="information-container">
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          value={formData.comments}
          onChange={handleChange}
          maxLength={200}
        />
      </div>

      <div className="button-container">
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;

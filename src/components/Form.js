import React from "react";

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    showFirstName: false,
    lastName: "",
    showLastName: false,
    email: "",
    showEmail: false,
    gender: "",
    showGender: false,
    address: "",
    showAddress: false,
    bio: "",
    showBio: false,
    showHeader: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(function (prevFormData) {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData(function (prevFormData) {
      return {
        ...prevFormData,
        showFirstName: true,
        showLastName: true,
        showEmail: true,
        showGender: true,
        showAddress: true,
        showBio: true,
        showHeader: true,
      };
    });

    setTimeout(() => {
      setFormData(function (prevFormData) {
        return {
          ...prevFormData,
          showFirstName: false,
          showLastName: false,
          showEmail: false,
          showGender: false,
          showAddress: false,
          showBio: false,
          showHeader: false,
        };
      });
    }, 6000);
  }

  function displayFormData() {
    console.log(formData);
  }

  return (
    <>
      <div className="form">
        <div className="input-display">
          {formData.showHeader && <h2>FORM DATA COLLECTED</h2>}
          {formData.showFirstName && (
            <p className="display">
              <b>First Name:</b> {formData.firstName}{" "}
            </p>
          )}

          {formData.showLastName && (
            <p className="display">
              <b>LastName:</b> {formData.lastName}{" "}
            </p>
          )}
          {formData.showEmail && (
            <p className="display">
              <b>Email:</b> {formData.email}{" "}
            </p>
          )}
          {formData.showGender && (
            <p className="display">
              <b>Gender:</b> {formData.gender}{" "}
            </p>
          )}
          {formData.showAddress && (
            <p className="display">
              <b>Address:</b> {formData.address}{" "}
            </p>
          )}

          {formData.showBio && (
            <p className="display">
              <b>Bio-Data:</b> {formData.bio}{" "}
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <h2>LOGIN FORM</h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />

          <fieldset>
            <legend>Select Gender</legend>

            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <br />

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <br />

            <input
              type="radio"
              id="others"
              name="gender"
              value="others"
              checked={formData.gender === "others"}
              onChange={handleChange}
            />
            <label htmlFor="others">Others</label>
            <br />
          </fieldset>

          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />

          <textarea
            placeholder="Enter Bio Data here"
            name="bio"
            onChange={handleChange}
            value={formData.comment}
          />

          <button className="btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;

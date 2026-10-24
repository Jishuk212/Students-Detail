// import { useReducer } from "react";
import formDataContext from "../store/formData";
import { useContext } from "react";
import { registerStudents } from "../services/studentServices";

const sec = ["A", "B", "C", "D", "E", "F", "G"];

const AddStudent = () => {
  const { dispatch, formData } = useContext(formDataContext);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerStudents(formData);
    console.log("Student Data:", formData);
    dispatch({ type: "RESET_FORM" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="add-student-container">
      <div className="add-student-header">
        <h1 className="add-student-title">Add Student</h1>
        <p className="add-student-description">Enter student details below</p>
      </div>

      <form className="add-student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="studentName">
            Student Name
          </label>
          <input
            className="form-input student-name-input"
            id="studentName"
            type="text"
            name="studentName"
            placeholder="Enter student name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="rollNumber">
            Roll Number
          </label>
          <input
            className="form-input roll-number-input"
            id="rollNumber"
            type="text"
            name="rollNumber"
            placeholder="Enter Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-input email-input"
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            className="form-input age-input"
            id="age"
            type="number"
            name="age"
            placeholder="Enter Age"
            min="1"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="form-input dob-input"
            id="dob"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="section">
            Section
          </label>
          <select
            className="form-select section-select"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Section
            </option>

            {sec.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button className="submit-student-btn" type="submit">
            Add Student
          </button>

          <button
            className="reset-student-btn"
            type="button"
            onClick={handleReset}
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;

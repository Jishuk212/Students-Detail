import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

import { studentsDetail } from "../services/studentServices";

const ShowStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await studentsDetail();
      if (response.success) {
        setStudents(response.data);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="show-students-container">
      <div className="show-students-header">
        <h1 className="show-students-title">All Students</h1>

        <p className="show-students-description">
          View all registered student details.
        </p>

        <p className="total-students">Total Students: {students.length}</p>
      </div>

      <div className="students-list">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard
              key={student._id ?? student.rollNumber}
              student={student}
            />
          ))
        ) : (
          <div className="no-students">
            <h2 className="no-students-title">No Students Found</h2>

            <p className="no-students-message">
              Add a student to see their details here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowStudents;

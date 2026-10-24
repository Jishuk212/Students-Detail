import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Loading from "./Loading";

import { studentsDetail } from "../services/studentServices";

const ShowStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchStudents = async () => {
        const response = await studentsDetail();
        if (response.success) {
          setStudents(response.data);
          setLoading(false);
        }
      };
      fetchStudents();
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
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
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default ShowStudents;

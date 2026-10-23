const StudentCard = ({ student }) => {
  const { studentName, rollNumber, email, age, dob, section } = student;

  return (
    <div className="student-card">
      <div className="student-card-header">
        <div className="student-avatar">
          {studentName
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <div className="student-basic-info">
          <h2 className="student-name">{studentName}</h2>
          <p className="student-roll-number">Roll No: {rollNumber}</p>
        </div>

        <span className="student-section">Section {section}</span>
      </div>

      <div className="student-details">
        <p className="student-email">
          <strong>Email:</strong> {email}
        </p>

        <p className="student-age">
          <strong>Age:</strong> {age} years
        </p>

        <p className="student-dob">
          <strong>Date of Birth:</strong> {dob}
        </p>

        <p className="student-section-detail">
          <strong>Section:</strong> {section}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;

import api from "./api.js";

const registerStudents = async (userData) => {
  const response = await api.post("/students", userData);
  return response.data;
};

const studentsDetail = async () => {
  const response = await api.get("/students");
  return response.data;
};

export { registerStudents, studentsDetail };

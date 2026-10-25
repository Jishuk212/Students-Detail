import "./App.css";
import HomePageButton from "./components/HomePageButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddStudent from "./components/AddStudent";
import ShowStudents from "./components/ShowStudents";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
function App() {
  return (
    <>
      <Header></Header>
      <HomePageButton></HomePageButton>
      <Routes>
        <Route path="/" element={<ShowStudents />} />
        <Route path="/show-students" element={<ShowStudents />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="*" element={<ShowStudents />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

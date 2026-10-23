import { IoPersonAdd } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
const homePageContent = [
  {
    name: "Add Students",
    path: "/add-student",
    icon: <IoPersonAdd />,
  },
  {
    name: "Show Students",
    path: "/show-students",
    icon: <IoPeopleSharp />,
  },
];
import { Link } from "react-router-dom";

const HomePageButton = () => {
  return (
    <>
      <div className="button-container">
        {homePageContent.map((item) => {
          return (
            <Link key={item.name} to={item.path}>
              <div className="button-item">
                <div className="button-icon">{item.icon}</div>
                <h1 className="button-name">{item.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePageButton;

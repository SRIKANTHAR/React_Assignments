import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { employee, title } = props;

  return (
    <div className="container App ">
      {/* Start your React code here */}
      <div className = 'content'>
      <div className="profile-image-container">
        <img
          className="profile"
          src={employee.profileImg}
          width="150"
          height="150"
          alt="profile image"
        ></img>
      </div>
      
      <div className = 'title'>
        <h1>{employee.name}</h1>
      </div>

      <div className = 'profile-info'>
        <label>Location</label>
        <strong>{employee.location}</strong>
      </div>

      <div className = 'profile-info'>
        <label>Blood group</label>
        <strong>{employee.bloodGroup}</strong>
      </div>

      
      <div className = 'profile-info'>
        <label>Age</label>
        <strong>{employee.age}</strong>
      </div>
      </div>
    </div>
  );
}

export default App;

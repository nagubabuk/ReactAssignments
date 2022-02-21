import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  
    <div className="profile-img-container">
    <img className="profile" src={employee.profileImg} width="100" height="100" alt="profile image"/>
    </div>
    <div className='title'>
      <h1>{employee.name}</h1>
    </div>
    <div className="profile-info">
    <label>Location</label>
    <strong>{employee.location}</strong>
    </div>
    <div className="profile-info">
      <label>Blood Group</label>
      <strong>{employee.bloodGroup}</strong>
    </div>
    <div className="profile-info">
      <label>Age</label>
      <strong>{employee.age}</strong>

    </div>
</div>

);

}
export default App;

// id













// https://youtu.be/iZhV0bILFb0
// https://youtu.be/iZhV0bILFb0
// https://youtu.be/ly3m6mv5qvg
// https://youtu.be/ly3m6mv5qvg
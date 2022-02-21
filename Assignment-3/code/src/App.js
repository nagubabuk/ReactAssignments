import React from 'react';
import logo from './logo.svg';
import './App.css';
const status={
1:'suspended',
2:'completed',
3:'cancelled'
}
const appointments={
  name:'Allen ford',
  employeeId:123456,
  appointmenton:new Date().toLocaleString(),
  email:'allen@gmail.com',
  phone:9876543210,
  status:status[1],
  door:'Mark',
  time: new Date().toLocaleTimeString() ,
  title:'just title',
  avatar:'https://www.w3schools.com/howto/img_avatar.png',
  discreption:'bbsdfvsdilusduSDIfIccSDcSD jv sfnmv nmv n d nmdc dnmc znmc z  njcbascbascashcbabcj'
}
var arrow="<"
const rightArrow=">"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
      <div className='order-details'>
        <div className='nav-bar'>
          <a href="#" >{arrow}</a>
          <h1>{appointments.name}</h1>
          <span>{appointments.employeeId}</span>
          <button className='nav-button'>print</button>
        </div>
        <div className='rows'>
          <div className='customer-info'>
          <p><b>Appointment On:</b>{appointments.appointmenton}</p>
          <p><b>Email :</b>{appointments.email}</p>
          <p><b>Phone :</b>{appointments.phone}</p>
          </div>
        </div>
        <div className='rows'>
        <div className='order-info'>
          <ul className='oderInfo-ul'>
            <li><b>Status</b></li>
            <li>{appointments.status}</li>
          </ul>
          <ul className='oderInfo-ul'>
            <li><b>Door </b></li>
            <li>{appointments.door}</li>
          </ul>
          <ul className='oderInfo-ul'>
            <li><b>Time </b></li>
            <li>{appointments.time}</li>
          </ul>
        </div>
        </div>
        <div className='rows'>
        <ul className='product-list'>
          <li>
            <label><input type="checkbox"></input><span></span>
            <img src={appointments.avatar} height='150' width='150' ></img>
            <span className='rightArrow'>{rightArrow}</span>
            </label>
            </li>
            <li>
            <a className='product-list-a'>
              <h3>{appointments.title}</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;